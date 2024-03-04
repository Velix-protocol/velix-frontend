import { useWriteContract } from "wagmi";
import { useCallback } from "react";
import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metisToken";
import {
  METIS_TOKEN_CONTRACT_ADDRESS,
  VEMETIS_MINTER_CONTRACT_ADDRESS
} from "@/lib/constant";
import { VEMETIS_MINTER_CONTRACT_ABI } from "@/abi/veMetisMinter";

/**
 * useApproveMinting approves the minting proess
 * @date 3/5/2024 - 12:40:00 AM
 *
 * @returns {*}
 */
export const useApproveMinting = () => {
  const { writeContractAsync, ...rest } = useWriteContract();

  const ApproveMinting = useCallback(
    async (veMetisMInter: `0x0${string}`, amount: number) => {
      return await writeContractAsync({
        abi: METIS_TOKEN_CONTRACT_ABI,
        address: METIS_TOKEN_CONTRACT_ADDRESS,
        functionName: "approve",
        args: [veMetisMInter, BigInt(amount)]
      });
    },
    [writeContractAsync]
  );

  return { ...rest, ApproveMinting };
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
    async (veMetisMInter: `0x0${string}`, amount: number) => {
      return await writeContractAsync({
        abi: VEMETIS_MINTER_CONTRACT_ABI,
        address: VEMETIS_MINTER_CONTRACT_ADDRESS,
        functionName: "mint",
        args: [veMetisMInter, BigInt(amount)]
      });
    },
    [writeContractAsync]
  );

  return { ...rest, mint };
};
