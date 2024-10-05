/* eslint-disable @typescript-eslint/no-explicit-any */
import { claimFaucetToken, velixApi } from "@/services/http";
import { useStakersStore } from "@/store/stakers";
import { useCallback, useState } from "react";
import { useMetisBalances } from "./use-contract";
import useChainAccount from "./useChainAccount";

const useApiHookBaseState = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useChainAccount();

  return {
    isPending,
    setIsPending,
    error,
    setError,
    isSuccess,
    setIsSuccess,
    address
  };
};

export const useRedeemPoints = () => {
  const {
    isPending,
    setIsPending,
    error,
    setError,
    isSuccess,
    setIsSuccess,
    address
  } = useApiHookBaseState();
  const { getStaker } = useStakersStore();
  const [txHash, setTxHash] = useState("");
  const { getBalances } = useMetisBalances();

  const redeemPoints = useCallback(
    async (points: number) => {
      if (!address) return;
      try {
        setIsPending(true);
        const res = await velixApi.redeemPoints({
          walletAddress: address,
          points
        });
        setTxHash(res?.data.hash ?? "");
        setIsSuccess(true);
        await getStaker(address);
        await getBalances();
      } catch (err: any) {
        console.log(err.response);
        setIsSuccess(false);
        setError(err.response.data.message || err.message || "");
      } finally {
        setIsPending(false);
      }
    },
    [address, getBalances, getStaker, setError, setIsPending, setIsSuccess]
  );

  const cleanup = useCallback(() => {
    setTxHash(""), setIsPending(false);
    setIsSuccess(false);
    setError(null);
  }, [setError, setIsPending, setIsSuccess]);

  return {
    redeemPoints,
    isPending,
    error,
    isSuccess,
    txHash,
    cleanup
  };
};

export const useFaucet = () => {
  const {
    isPending,
    setIsPending,
    error,
    setError,
    isSuccess,
    setIsSuccess,
    address
  } = useApiHookBaseState();

  const claim = useCallback(async () => {
    if (!address) return;
    try {
      setIsPending(true);
      await claimFaucetToken(address);
      setError(null);
      setIsSuccess(true);
    } catch (e: any) {
      console.log(e);
      setIsSuccess(false);
      setError({ message: e.message ?? e });
    } finally {
      setIsPending(false);
    }
  }, [address, setError, setIsPending, setIsSuccess]);

  const reset = useCallback(() => {
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, [setError, setIsPending, setIsSuccess]);

  return {
    isPending,
    isSuccess,
    reset,
    claim,
    error
  };
};
