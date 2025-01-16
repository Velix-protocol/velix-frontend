/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBalance } from "wagmi";
import { useCallback, useEffect, useMemo, useState } from "react";
import { VELIX_METIS_VAULT_CONTRACT_ADDRESS } from "@/utils/constant";
import { ethers, formatEther, parseUnits } from "ethers";
import { useBalanceStore } from "@/store/balanceState";
import Web3Service from "@/services/web3Service";
import { useMetricsStore } from "@/store/velixMetrics";
import { velixApi } from "@/services/http";
import { AxiosError } from "axios";
import { VELIX_METIS_VAULT_ABI } from "@/abi/metis/velixMetisVault.ts";
import { supportedChains } from "@/utils/config.ts";
import useChainAccount from "./useChainAccount";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";
import { converGweiToEth, waitForTransaction } from "@/utils/utils.ts";
import { SupportedChains } from "@/types/index.ts";
import { useStarknetBalance } from "@/hooks/useStarknetBalance.ts";
import { useAccount } from "@starknet-react/core";
import { cairo, constants } from "starknet";
import { useQuery } from "@tanstack/react-query";

export const useContractHookState = () => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);
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
        const spender =
          chain === "starknet"
            ? supportedChains.starknet.contracts.testnet.VAULT.address
            : supportedChains.metis.contracts.testnet.VELIX_VAULT.address;

        let tx = null;
        if (chain === "starknet" && starknetAccount) {
          const starknetAmount = cairo.uint256(parseUnits(amountToStake));
          tx = await starknetAccount?.execute(
            {
              contractAddress:
                supportedChains.starknet.contracts.testnet.STRK_TOKEN.address,
              entrypoint: "approve",
              calldata: [spender, starknetAmount.low, starknetAmount.high]
            },
            {
              version: constants.TRANSACTION_VERSION.V3
            }
          );
        } else {
          tx = await contract.approve(spender, parseUnits(amountToStake));
        }

        const { txHash } = await waitForTransaction(
          chain as SupportedChains,
          tx
        );
        console.log({ txHash });
        setData(txHash);
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
              entrypoint: "deposit_strk",
              calldata: [
                starknetAmount.low,
                starknetAmount.high,
                starknetAccount.address
              ]
            },
            {
              version: constants.TRANSACTION_VERSION.V3
            }
          );
        } else {
          tx = await contract.deposit(parseUnits(amountToStake), address);
        }

        const { txHash } = await waitForTransaction(
          chain as SupportedChains,
          tx
        );
        await velixApi.saveAction("stake", {
          amount: Number(amountToStake),
          walletAddress: address,
          txHash,
          chain: chain as SupportedChains
        });

        setData(txHash);
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
        chain === "starknet" ? "get_tvl" : "totalAssets";
      const totalValueLocked = await contract?.[functionToGetTotalSupply]();
      setTotalValueLocked(Number(formatEther(totalValueLocked)).toFixed(4));
      return totalValueLocked;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }, [address, chain, contractInstance, setTotalValueLocked]);

  useQuery({
    queryKey: ["getValueLocked"],
    queryFn: () => getTotalLocked(),
    retryOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
  });
};

/**
 * This hook returns the amount of shares that would be exchanged by the vault for the amount of assets provided.
 * @returns
 */
export const useGetConvertToShareValue = () => {
  const { address } = useChainAccount();
  const chain = useSupportedChain();
  const contractInstance = useContract(
    chain === "starknet" ? "VAULT" : "VELIX_VAULT"
  );

  return useCallback(
    async (assets: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;

      try {
        const shareValue = await contract?.[
          chain === "starknet" ? "get_ve_strk_to_mint" : "convertToShares"
        ](parseUnits(assets));
        return shareValue;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    [address, chain, contractInstance]
  );
};

export const useStarknetBalances = () => {
  const { address } = useChainAccount();
  const { setStrkBalance, setveStrkBalance } = useBalanceStore();
  const chain = useSupportedChain();
  const { data, refetch } = useStarknetBalance();

  const getBalances = useCallback(async () => {
    if (!address) return;
    if (chain === "metis") return;
    const web3Service = new Web3Service("starknet");
    const contract = await web3Service.contract(
      supportedChains.starknet.contracts.testnet.VESTRK_TOKEN
        .address as `0x${string}`,
      supportedChains.starknet.contracts.testnet.VESTRK_TOKEN.abi,
      address
    );

    const balance = await contract.balance_of(address);
    const formattedBalance = converGweiToEth(balance);
    setveStrkBalance(formattedBalance);
    refetch();
  }, [address, chain, refetch, setveStrkBalance]);

  useQuery({
    queryKey: ["getstaknetBalances", chain, data?.formatted],
    queryFn: async () => {
      setStrkBalance(data?.formatted ?? "0.0");
      await getBalances();
      return data?.formatted;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: chain !== "metis"
  });

  return {
    getBalances
  };
};

export const useMetisBalances = () => {
  const { address } = useChainAccount();
  const { setveMETISBalance, setMETISBalance } = useBalanceStore();
  const { data, refetch: fetchMETISBalance } = useBalance({
    address: address as `0x${string}`
  });

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
