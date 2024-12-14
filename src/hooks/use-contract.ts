/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBalance } from "wagmi";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  velixContracts,
  VELIX_METIS_VAULT_CONTRACT_ADDRESS
} from "@/utils/constant";
import {
  ContractTransactionReceipt,
  ethers,
  formatEther,
  parseUnits
} from "ethers";
import { useBalanceStore } from "@/store/balanceState";
import Web3Service from "@/services/web3Service";
import { useMetricsStore } from "@/store/velixMetrics";
import { velixApi } from "@/services/http";
import { AxiosError } from "axios";
import { VELIX_METIS_VAULT_ABI } from "@/abi/velixMetisVault.ts";
import { supportedChains } from "@/utils/config.ts";
import useChainAccount from "./useChainAccount";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";
import { converGweiToEth, waitForTransaction } from "@/utils/utils.ts";
import { SupportedChains } from "@/types/index.ts";
import { useStarknetBalance } from "@/hooks/useStarknetBalance.ts";
import { useAccount } from "@starknet-react/core";
import { cairo, constants } from "starknet";

export const useContractHookState = () => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useChainAccount();

  return {
    data,
    setData,
    isPending,
    setIsPending,
    error,
    setError,
    isSuccess,
    setIsSuccess,
    address
  };
};

export type MetisContractName =
  keyof typeof supportedChains.metis.contracts.testnet;

export type StarknetContractName =
  keyof typeof supportedChains.starknet.contracts.testnet;

export const useContract = (
  contactName: MetisContractName | StarknetContractName
) => {
  const { address } = useChainAccount();
  const chain = useSupportedChain();
  if (!chain) return;
  if (!address) return;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const contractData = supportedChains[chain].contracts.testnet[contactName];
  if (!contractData?.abi || !contractData?.address) return;

  const web3Service = new Web3Service(chain);
  return web3Service.contract(
    contractData.address as `0x${string}`,
    contractData.abi,
    address as `0x${string}`
  );
};

/**
 * Approve the staking on veMETIS
 * @date 3/5/2024 - 10:46:39 AM
 *
 * @returns {*}
 */
export const useApproveStaking = () => {
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
    chain === "starknet" ? "STRK_TOKEN" : "METIS_TOKEN"
  );

  const { account: starknetAccount } = useAccount();
  const approveStaking = useCallback(
    async (amountToStake: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const approveAddress =
          chain === "starknet"
            ? supportedChains.starknet.contracts.testnet.STRK_TOKEN.address
            : supportedChains.metis.contracts.testnet.SVEMETIS.address;

        let tx = null;
        if (chain === "starknet" && starknetAccount) {
          const starknetAmount = cairo.uint256(parseUnits(amountToStake));
          tx = await starknetAccount?.execute(
            {
              contractAddress:
                supportedChains.starknet.contracts.testnet.STRK_TOKEN.address,
              entrypoint: "approve",
              calldata: [approveAddress, starknetAmount]
            },
            {
              version: constants.TRANSACTION_VERSION.V3
            }
          );
        } else {
          tx = await contract.approve(
            approveAddress,
            parseUnits(amountToStake)
          );
        }

        const txhash = await waitForTransaction(chain as SupportedChains, tx);
        console.log({ txhash });
        setData(txhash);
        setError(null);
        setIsSuccess(true);
      } catch (e: any) {
        console.log(e);
        setData(null);
        setIsSuccess(false);
        if (chain !== "starknet") {
          setError({ message: e.shortMessage ?? e });
        }
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
    approveStaking,
    error,
    data
  };
};

/**
 * This is a staking hook that should be called after approving the
 *  staking
 */
export const useStaking = () => {
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

  const stake = useCallback(
    async (amountToStake: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        let tx = null;
        if (chain === "starknet" && starknetAccount) {
          const starknetAmount = cairo.uint256(parseUnits(amountToStake));
          tx = await starknetAccount.execute(
            {
              contractAddress:
                supportedChains.starknet.contracts.testnet.VAULT.address,
              entrypoint: "deposit",
              calldata: [starknetAmount]
            },
            {
              version: constants.TRANSACTION_VERSION.V3
            }
          );
        } else {
          tx = await contract.deposit(parseUnits(amountToStake), address);
        }

        const txhash = await waitForTransaction(chain as SupportedChains, tx);
        await velixApi.saveAction("stake", {
          amount: Number(amountToStake),
          walletAddress: address,
          txHash: txhash,
          chain: chain as SupportedChains
        });

        setData(txhash);
        setError(null);
        setIsSuccess(true);
      } catch (e: any) {
        console.log(e);
        setData(null);
        setIsSuccess(false);
        if (chain !== "starknet") {
          setError({
            message: e instanceof AxiosError ? e.message : e.shortMessage ?? e
          });
        }
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
    stake,
    error,
    txhash: data
  };
};

/**
 * This hook returns the total amount of underlying (veMetis) assets held by the vault.
 *
 * */
export const useGetTotalVeMetisAssets = () => {
  const { address } = useChainAccount();
  const chain = useSupportedChain();
  const contractInstance = useContract(
    chain === "starknet" ? "VAULT" : "VELIX_VAULT"
  );
  const { setTotalValueLocked } = useMetricsStore();

  const getTotalLocked = useCallback(async () => {
    const contract = await contractInstance;
    if (!contract) return;
    if (!address) return;

    try {
      const functionToGetTotalSupply =
        chain === "starknet" ? "contract_total_supply" : "totalAssets";
      const totalValueLocked = await contract?.[functionToGetTotalSupply]();
      setTotalValueLocked(Number(formatEther(totalValueLocked)).toFixed(4));
    } catch (err) {
      console.log(err);
      throw err;
    }
  }, [address, contractInstance, setTotalValueLocked]);

  useEffect(() => {
    getTotalLocked();
  }, [getTotalLocked]);
};

/**
 * This hook returns the amount of shares that would be exchanged by the vault for the amount of assets provided.
 * @returns
 */
export const useGetConvertToShareValue = () => {
  const { address } = useChainAccount();
  const contractInstance = useContract("VELIX_VAULT");

  return useCallback(
    async (assets: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;

      try {
        const shareValue = await contract.convertToShares(parseUnits(assets));
        return shareValue;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    [address, contractInstance]
  );
};

export const useStarknetBalances = () => {
  const { address } = useChainAccount();
  const { setStrkBalance, setveStrkBalance } = useBalanceStore();
  const chain = useSupportedChain();
  const { data } = useStarknetBalance();

  useEffect(() => {
    if (chain === "metis") return;
    setStrkBalance(data?.formatted ?? "0.0");
  }, [chain, data?.formatted, setStrkBalance]);

  const getBalances = useCallback(async () => {
    if (!address) return;
    if (chain === "metis") return;
    const web3Service = new Web3Service("starknet");
    const contract = await web3Service.contract(
      supportedChains.starknet.contracts.testnet.VAULT.address as `0x${string}`,
      supportedChains.starknet.contracts.testnet.VAULT.abi,
      address
    );

    const balance = await contract.user_balance_of(address);
    const formattedBalance = converGweiToEth(balance);
    setveStrkBalance(formattedBalance);
  }, [address, setveStrkBalance]);

  return {
    getBalances
  };
};

export const useMetisBalances = () => {
  const { address } = useChainAccount();
  const { setsveMETISBalance, setveMETISBalance, setMETISBalance } =
    useBalanceStore();
  const { data, refetch: fetchMETISBalance } = useBalance({
    address: address as `0x${string}`
  });
  const chain = useSupportedChain();

  const provider = useMemo(
    () => new ethers.JsonRpcProvider("https://sepolia.metisdevops.link/"),
    []
  );

  const contractsDetails = useMemo(
    () => [
      [
        VELIX_METIS_VAULT_CONTRACT_ADDRESS,
        VELIX_METIS_VAULT_ABI,
        provider
      ] as any
    ],
    [provider]
  );

  const contracts = useMemo(
    () =>
      contractsDetails.map(
        (contractArgs) =>
          new ethers.Contract(contractArgs[0], contractArgs[1], contractArgs[2])
      ),
    [contractsDetails]
  );

  const getBalances = useCallback(async () => {
    try {
      const balances = await Promise.all([
        contracts[0].balanceOf(address),
        fetchMETISBalance()
      ]);
      setveMETISBalance(formatEther(balances[0]));
    } catch (err) {
      console.log(err);
    }
  }, [address, contracts, fetchMETISBalance, setveMETISBalance]);

  useEffect(() => {
    if (data) return setMETISBalance(formatEther(data.value));
  }, [data, setMETISBalance]);

  useEffect(() => {
    if (address) getBalances();
  }, [address, getBalances]);

  return { getBalances };
};
