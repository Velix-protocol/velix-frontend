/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { useContract, useContractHookState } from "./use-contract";
import { VELIX_METIS_VAULT_CONTRACT_ADDRESS } from "@/utils/constant";
import { ContractTransactionReceipt, parseEther, parseUnits } from "ethers";
import axios from "axios";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";
import { cairo, constants, GetTransactionReceiptResponse } from "starknet";
import { supportedChains } from "@/utils/config.ts";
import { useAccount } from "@starknet-react/core";
import {
  decodeIntitatedWithdrawlStarknetEvents,
  waitForTransaction
} from "@/utils/utils.ts";
import { velixApi } from "@/services/http.ts";

export const useApproveRedeem = () => {
  const {
    address,
    data,
    setData,
    isPending,
    setIsPending,
    error,
    setError,
    isSuccess,
    setIsSuccess
  } = useContractHookState();
  const contractInstance = useContract("VELIX_VAULT");

  const approveRedemption = useCallback(
    async (amount: number) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;

      console.log({ amount });
      try {
        setIsPending(true);
        const tx = await contract.approve(
          VELIX_METIS_VAULT_CONTRACT_ADDRESS,
          parseUnits(String(amount))
        );
        const txhash = (await tx.wait()) as ContractTransactionReceipt;
        setData(txhash.hash);
        setError(null);
        setIsSuccess(true);
      } catch (e: any) {
        console.log(e);
        setData(null);
        setIsSuccess(false);
        setError({ message: e.shortMessage ?? e });
      } finally {
        setIsPending(false);
      }
    },
    [address, contractInstance, setData, setError, setIsPending, setIsSuccess]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, [setData, setError, setIsPending, setIsSuccess]);

  return {
    isPending,
    isSuccess,
    reset,
    approveRedemption,
    error,
    data
  };
};

export const useEnterRedemptionQueue = () => {
  const {
    address,
    data,
    setData,
    isPending,
    setIsPending,
    error,
    setError,
    isSuccess,
    setIsSuccess
  } = useContractHookState();
  const chain = useSupportedChain();
  const contractInstance = useContract(
    chain === "starknet" ? "VAULT" : "VELIX_VAULT"
  );
  const { account: starknetAccount } = useAccount();

  const enterRedemptionQueue = useCallback(
    async (walletAddress: `0x${string}`, amount: number) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        let tx = null;
        if (chain === "starknet" && starknetAccount) {
          const starknetAmount = cairo.uint256(parseUnits(String(amount)));
          tx = await starknetAccount.execute(
            {
              contractAddress:
                supportedChains.starknet.contracts.testnet.VAULT.address,
              entrypoint: "initiate_withdrawal",
              calldata: [starknetAmount]
            },
            {
              version: constants.TRANSACTION_VERSION.V3
            }
          );
        } else {
          tx = await contract.redeem(
            parseUnits(String(amount)),
            walletAddress,
            walletAddress
          );
        }

        const { txHash, txReceipt } = await waitForTransaction(chain, tx);
        setData(txHash);
        setError(null);
        setIsSuccess(true);
        if (chain === "starknet") {
          const data = await decodeIntitatedWithdrawlStarknetEvents(
            txReceipt as GetTransactionReceiptResponse
          );
          await velixApi.saveStarknetRedeemTicket({
            amount: String(amount),
            txHash,
            walletAddress,
            maturity: data.maturity,
            nftId: data.requestIndex
          });
        }

        if (chain === "metis") {
          await velixApi.saveRedeemTicketTransactionHash({
            walletAddress: address,
            txHash: txHash
          });
        }
      } catch (e: any) {
        if (e instanceof axios.AxiosError) {
          console.log(e);
          return;
        }
        console.log(e);
        setData(null);
        setIsSuccess(false);
        setError({
          message: e.shortMessage ?? "We could not process the call, try later!"
        });
      } finally {
        setIsPending(false);
      }
    },
    [
      address,
      chain,
      contractInstance,
      setData,
      setError,
      setIsPending,
      setIsSuccess,
      starknetAccount
    ]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, [setData, setError, setIsPending, setIsSuccess]);

  return {
    isPending,
    isSuccess,
    reset,
    enterRedemptionQueue,
    error,
    data
  };
};

export const useRedeemRedemptionTicketNft = () => {
  const {
    address,
    data,
    setData,
    isPending,
    setIsPending,
    error,
    setError,
    isSuccess,
    setIsSuccess
  } = useContractHookState();
  const { account: starknetAccount } = useAccount();
  const chain = useSupportedChain();
  const contractInstance = useContract(
    chain === "starknet" ? "VAULT" : "REDEMPTION_QUEUE"
  );

  const redeemRedemptionTicketNft = useCallback(
    async (nftId: number, walletAddress: `0x${string}`) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        let tx = null;
        setIsPending(true);
        if (chain === "starknet" && starknetAccount) {
          tx = await starknetAccount.execute(
            {
              contractAddress:
                supportedChains.starknet.contracts.testnet.VAULT.address,
              entrypoint: "complete_withdrawal",
              calldata: [cairo.uint256(nftId)]
            },
            {
              version: constants.TRANSACTION_VERSION.V3
            }
          );
        } else {
          tx = await contract.redeemRedemptionTicketNft(
            parseUnits(String(nftId)),
            walletAddress
          );
        }
        const { txHash } = await waitForTransaction(chain, tx);
        setData(txHash);
        setError(null);
        setIsSuccess(true);
        setIsPending(false);

        await velixApi.completeRedeemTicket({
          walletAddress,
          chain,
          nftId: String(nftId)
        });
      } catch (e: any) {
        if (e instanceof axios.AxiosError) {
          console.log(e);
          return;
        }

        console.log(e);
        setData(null);
        setIsSuccess(false);
        setError({
          message:
            e?.shortMessage ?? "We could not process the call, try later!"
        });
        setIsPending(false);
      }
    },
    [
      address,
      chain,
      contractInstance,
      setData,
      setError,
      setIsPending,
      setIsSuccess,
      starknetAccount
    ]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, [setData, setError, setIsPending, setIsSuccess]);

  return {
    isPending,
    isSuccess,
    reset,
    redeemRedemptionTicketNft,
    error,
    data
  };
};

export const useCancelRedeemNftTicket = () => {
  const {
    address,
    data,
    setData,
    isPending,
    setIsPending,
    error,
    setError,
    isSuccess,
    setIsSuccess
  } = useContractHookState();
  const contractInstance = useContract("REDEMPTION_QUEUE");

  const cancelRedeemNftTicket = useCallback(
    async (nftId: number, walletAddress: `0x${string}`) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract.cancelRedemptionTicketNft(
          walletAddress,
          parseEther(String(nftId))
        );
        const txhash = (await tx.wait()) as ContractTransactionReceipt;
        setData(txhash.hash);
        setError(null);
        setIsSuccess(true);
      } catch (e: any) {
        console.log(e);
        setData(null);
        setIsSuccess(false);
        setError({ message: e.shortMessage ?? e });
      } finally {
        setIsPending(false);
      }
    },
    [address, contractInstance, setData, setError, setIsPending, setIsSuccess]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, [setData, setError, setIsPending, setIsSuccess]);

  return {
    isPending,
    isSuccess,
    reset,
    cancelRedeemNftTicket,
    error,
    data
  };
};
