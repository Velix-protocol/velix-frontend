/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract
} from "wagmi";
import { useCallback, useEffect, useMemo } from "react";
import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metisToken";
import {
  METIS_TOKEN_CONTRACT_ADDRESS,
  SVEMETIS_CONTRACT_ADDRESS,
  VEMETIS_MINTER_CONTRACT_ADDRESS,
  VEMETIS_CONTRACT_ADDRESS,
  CONFIRMATION_BLOCKS_NUMBER
} from "@/lib/constant";
import { VEMETIS_MINTER_CONTRACT_ABI } from "@/abi/veMetisMinter";
import { VEMETIS_CONTRACT_ABI } from "@/abi/veMETIS";
import { SVMETIS_CONTRACT_ABI } from "@/abi/sveMETIS";
import { ethers, formatEther, parseUnits } from "ethers";
import { useBalanceStore } from "@/store/balanceState";

/**
 * useApproveMinting approves the minting proess
 * @date 3/5/2024 - 12:40:00 AM
 *
 * @returns {*}
 */
export const useApproveMinting = () => {
  const {
    writeContractAsync,
    data: hash,
    reset,
    error,
    isPending: writePending
  } = useWriteContract();

  const approveMinting = useCallback(
    async (amount: string) => {
      return await writeContractAsync({
        abi: METIS_TOKEN_CONTRACT_ABI,
        address: METIS_TOKEN_CONTRACT_ADDRESS,
        functionName: "approve",
        args: [VEMETIS_MINTER_CONTRACT_ADDRESS, parseUnits(amount)]
      });
    },
    [writeContractAsync]
  );

  const { isLoading: receiptPending, isSuccess } = useWaitForTransactionReceipt(
    {
      confirmations: CONFIRMATION_BLOCKS_NUMBER,
      hash
    }
  );

  return {
    isPending: writePending || receiptPending,
    isSuccess,
    reset,
    approveMinting,
    error
  };
};

/**
 * useMint mints the METIS
 *  - The arguments of the mint function should be the same as the one use for approving the minting process
 * @date 3/5/2024 - 12:42:02 AM
 *
 * @returns {*}
 */
export const useMint = () => {
  const {
    writeContractAsync,
    data: hash,
    reset,
    error,
    isPending: writePending
  } = useWriteContract();

  const mint = useCallback(
    async (walletAddress: `0x${string}`, amount: string) => {
      return await writeContractAsync({
        abi: VEMETIS_MINTER_CONTRACT_ABI,
        address: VEMETIS_MINTER_CONTRACT_ADDRESS,
        functionName: "mint",
        args: [walletAddress, parseUnits(amount)]
      });
    },
    [writeContractAsync]
  );

  const { isLoading: receiptPending, isSuccess } = useWaitForTransactionReceipt(
    {
      confirmations: CONFIRMATION_BLOCKS_NUMBER,
      hash
    }
  );

  return {
    isPending: writePending || receiptPending,
    isSuccess,
    reset,
    mint,
    error
  };
};

/**
 * Approve the staking on veMETIS
 * @date 3/5/2024 - 10:46:39 AM
 *
 * @returns {*}
 */
export const useApproveStaking = () => {
  const {
    writeContractAsync,
    data: hash,
    reset,
    error,
    isPending: writePending
  } = useWriteContract();

  const approveStaking = useCallback(
    async (amountToStake: string) => {
      return await writeContractAsync({
        abi: VEMETIS_CONTRACT_ABI,
        address: VEMETIS_CONTRACT_ADDRESS,
        functionName: "approve",
        args: [SVEMETIS_CONTRACT_ADDRESS, parseUnits(amountToStake)]
      });
    },
    [writeContractAsync]
  );

  const { isLoading: receiptPending, isSuccess } = useWaitForTransactionReceipt(
    {
      confirmations: CONFIRMATION_BLOCKS_NUMBER,
      hash
    }
  );

  return {
    isPending: writePending || receiptPending,
    isSuccess,
    reset,
    approveStaking,
    error
  };
};

/**
 * This is a staking hook that should be called after approving the
 *  staking
 */
export const useStaking = () => {
  const {
    writeContractAsync,
    data: hash,
    reset,
    error,
    isPending: writePending
  } = useWriteContract();

  const stake = useCallback(
    async (walletAddress: `0x${string}`, amount: string) => {
      return await writeContractAsync({
        abi: SVMETIS_CONTRACT_ABI,
        address: SVEMETIS_CONTRACT_ADDRESS,
        functionName: "deposit",
        args: [parseUnits(amount), walletAddress]
      });
    },
    [writeContractAsync]
  );

  const { isLoading: receiptPending, isSuccess } = useWaitForTransactionReceipt(
    {
      confirmations: CONFIRMATION_BLOCKS_NUMBER,
      hash
    }
  );

  return {
    isPending: writePending || receiptPending,
    isSuccess,
    reset,
    stake,
    error
  };
};

/**
 * Approve unstaking/withrow
 * @returns
 */
export const useApproveUnstaking = () => {
  const {
    writeContractAsync,
    data: hash,
    reset,
    error,
    isPending: writePending
  } = useWriteContract();

  const approveUnstaking = useCallback(
    async (amount: string) => {
      return await writeContractAsync({
        abi: SVMETIS_CONTRACT_ABI,
        address: SVEMETIS_CONTRACT_ADDRESS,
        functionName: "approve",
        args: [SVEMETIS_CONTRACT_ADDRESS, parseUnits(amount)]
      });
    },
    [writeContractAsync]
  );

  const { isLoading: receiptPending, isSuccess } = useWaitForTransactionReceipt(
    {
      confirmations: CONFIRMATION_BLOCKS_NUMBER,
      hash
    }
  );

  return {
    isPending: writePending || receiptPending,
    isSuccess,
    reset,
    approveUnstaking,
    error
  };
};

/**
 * Unstake hook
 * Should be called after approving the unstaking process
 * @returns
 */
export const useUnstake = () => {
  const {
    writeContractAsync,
    data: hash,
    reset,
    error,
    isPending: writePending
  } = useWriteContract();

  const unstake = useCallback(
    async (amount: string, walletAddress: `0x${string}`) => {
      return await writeContractAsync({
        abi: SVMETIS_CONTRACT_ABI,
        address: SVEMETIS_CONTRACT_ADDRESS,
        functionName: "redeem",
        args: [parseUnits(amount), walletAddress, walletAddress]
      });
    },
    [writeContractAsync]
  );

  const { isLoading: receiptPending, isSuccess } = useWaitForTransactionReceipt(
    {
      confirmations: CONFIRMATION_BLOCKS_NUMBER,
      hash
    }
  );

  return {
    isPending: writePending || receiptPending,
    isSuccess,
    reset,
    unstake,
    error
  };
};

export const useMetisBalance = () => {
  const { address } = useAccount();
  const { setsveMETISBalance, setveMETISBalance, setMETISBalance } =
    useBalanceStore();
  const { data } = useBalance({
    address: address as `0x${string}`
  });

  const provider = useMemo(
    () => new ethers.JsonRpcProvider("https://sepolia.rpc.metisdevops.link/"),
    []
  );

  const contractsDetails = useMemo(
    () => [
      [VEMETIS_CONTRACT_ADDRESS, VEMETIS_CONTRACT_ABI, provider] as any,
      [SVEMETIS_CONTRACT_ADDRESS, SVMETIS_CONTRACT_ABI, provider] as any
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
        contracts[1].balanceOf(address)
      ]);
      setsveMETISBalance(formatEther(balances[1]));
      setveMETISBalance(formatEther(balances[0]));
    } catch (err) {
      console.log(err);
    }
  }, [address, contracts, setsveMETISBalance, setveMETISBalance]);

  useEffect(() => {
    if (data) return setMETISBalance(formatEther(data.value));
  }, [data, setMETISBalance]);

  useEffect(() => {
    getBalances();
  }, [address, getBalances, setsveMETISBalance, setveMETISBalance]);

  return { getBalances };
};
