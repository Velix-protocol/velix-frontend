/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAccount, useBalance } from "wagmi";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  VEMETIS_CONTRACT_ADDRESS,
  velixContracts,
  VELIX_METIS_VAULT_CONTRACT_ADDRESS
} from "@/utils/constant";
import { VEMETIS_CONTRACT_ABI } from "@/abi/veMETIS";
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

export const useContractHookState = () => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

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

export type ContractName = keyof typeof velixContracts;

export const useContract = (contactName: ContractName) => {
  const { address } = useAccount();
  if (!address) return;
  const contractData = velixContracts[contactName];
  if (!contractData.abi || !contractData.address) return;

  return new Web3Service().contract(
    contractData.address,
    contractData.abi,
    address
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
  const contractInstance = useContract("METIS_TOKEN");

  const approveStaking = useCallback(
    async (amountToStake: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract.approve(
          VELIX_METIS_VAULT_CONTRACT_ADDRESS,
          parseUnits(amountToStake)
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
  const contractInstance = useContract("VELIX_VAULT");

  const stake = useCallback(
    async (amountToStake: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract.deposit(parseUnits(amountToStake), address);
        const txhash = (await tx.wait()) as ContractTransactionReceipt;
        await velixApi.saveAction("stake", {
          amount: Number(amountToStake),
          walletAddress: address,
          txHash: txhash.hash
        });
        setData(txhash.hash);
        setError(null);
        setIsSuccess(true);
      } catch (e: any) {
        console.log(e);
        setData(null);
        setIsSuccess(false);
        setError({
          message: e instanceof AxiosError ? e.message : e.shortMessage ?? e
        });
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
  const { address } = useAccount();
  const contractInstance = useContract("VELIX_VAULT");
  const { setTotalValueLocked } = useMetricsStore();

  const getTotalLocked = useCallback(async () => {
    const contract = await contractInstance;
    if (!contract) return;
    if (!address) return;

    try {
      const totalValueLocked = await contract.totalAssets();
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
  const { address } = useAccount();
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

export const useMetisBalance = () => {
  const { address } = useAccount();
  const { setveMETISBalance, setMETISBalance } = useBalanceStore();
  const { data, refetch: fetchMETISBalance } = useBalance({
    address: address as `0x${string}`
  });

  const provider = useMemo(
    () => new ethers.JsonRpcProvider("https://sepolia.metisdevops.link/"),
    []
  );

  const contractsDetails = useMemo(
    () => [[VEMETIS_CONTRACT_ADDRESS, VEMETIS_CONTRACT_ABI, provider] as any],
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
