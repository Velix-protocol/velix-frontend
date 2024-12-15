/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { useContract, useContractHookState } from "./use-contract";
import { VELIX_METIS_VAULT_CONTRACT_ADDRESS } from "@/utils/constant";
import { ContractTransactionReceipt, parseEther, parseUnits } from "ethers";
import { velixApi } from "@/services/http.ts";
import axios from "axios";

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
  const contractInstance = useContract("VELIX_VAULT");

  const enterRedemptionQueue = useCallback(
    async (walletAddress: `0x${string}`, amount: number) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract.redeem(
          parseUnits(String(amount)),
          walletAddress,
          walletAddress
        );

        const txReceipt = (await tx.wait()) as ContractTransactionReceipt;
        setData(txReceipt.hash);
        setError(null);
        setIsPending(false);
        setIsSuccess(true);

        await velixApi.saveRedeemTicket({
          walletAddress: address,
          txHash: txReceipt.hash
        });
      } catch (e: any) {
        if (e instanceof axios.AxiosError) {
          console.log(e);
          return;
        }
        console.log(e);
        setData(null);
        setIsSuccess(false);
        setIsPending(false);
        setError({
          message: e.shortMessage ?? "We could not process the call, try later!"
        });
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
  const contractInstance = useContract("REDEMPTION_QUEUE");

  const redeemRedemptionTicketNft = useCallback(
    async (nftId: number, walletAddress: `0x${string}`) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract.redeemRedemptionTicketNft(
          parseUnits(String(nftId)),
          walletAddress
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
