import { useReadContract, useWriteContract } from "wagmi";
import { useCallback } from "react";
import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metisToken";
import {
  METIS_TOKEN_CONTRACT_ADDRESS,
  SVEMETIS_CONTRACT_ADDRESS,
  VEMETIS_MINTER_CONTRACT_ADDRESS,
  VEMITIS_CONTRACT_ADDRESS
} from "@/lib/constant";
import { VEMETIS_MINTER_CONTRACT_ABI } from "@/abi/veMetisMinter";
import { VEMETIS_CONTRACT_ABI } from "@/abi/veMETIS";
import { SVMETIS_CONTRACT_ABI } from "@/abi/sveMETIS";
import { parseUnits } from "ethers";

/**
 * useApproveMinting approves the minting proess
 * @date 3/5/2024 - 12:40:00 AM
 *
 * @returns {*}
 */
export const useApproveMinting = () => {
  const { writeContractAsync, ...rest } = useWriteContract();

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

  return { ...rest, approveMinting };
};

/**
 * useMint mints the METIS
 *  - The arguments of the mint function should be the same as the one use for approving the minting process
 * @date 3/5/2024 - 12:42:02 AM
 *
 * @returns {*}
 */
export const useMint = () => {
  const { writeContractAsync, ...rest } = useWriteContract();

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

  return { ...rest, mint };
};

/**
 * Approve the staking on veMETIS
 * @date 3/5/2024 - 10:46:39 AM
 *
 * @returns {*}
 */
export const useApproveStaking = () => {
  const { writeContractAsync, ...rest } = useWriteContract();

  const approveStaking = useCallback(
    async (amountToStake: string) => {
      return await writeContractAsync({
        abi: VEMETIS_CONTRACT_ABI,
        address: VEMITIS_CONTRACT_ADDRESS,
        functionName: "approve",
        args: [SVEMETIS_CONTRACT_ADDRESS, parseUnits(amountToStake)]
      });
    },
    [writeContractAsync]
  );

  return { ...rest, approveStaking };
};

/**
 * This is a staking hook that should be called after approving the
 *  staking
 */
export const useStaking = () => {
  const { writeContractAsync, ...rest } = useWriteContract();

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

  return { ...rest, stake };
};

/**
 * Approve unstaking/withrow
 * @returns
 */
export const useApproveUnstaking = () => {
  const { writeContractAsync, ...rest } = useWriteContract();

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

  return { ...rest, approveUnstaking };
};

/**
 * Unstake hook
 * Should be called after approving the unstaking process
 * @returns
 */
export const useUnstake = () => {
  const { writeContractAsync, ...rest } = useWriteContract();

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

  return { ...rest, unstake };
};

export const useVeMetisBalance = (walletAddress: `0x${string}`) => {
  return useReadContract({
    abi: VEMETIS_CONTRACT_ABI,
    address: VEMITIS_CONTRACT_ADDRESS,
    functionName: "balanceOf",
    args: [walletAddress]
  });
};
