/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAccount, useBalance } from "wagmi";
import { useCallback, useEffect, useMemo, useState } from "react";
import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metisToken";
import {
  METIS_TOKEN_CONTRACT_ADDRESS,
  SVEMETIS_CONTRACT_ADDRESS,
  VEMETIS_MINTER_CONTRACT_ADDRESS,
  VEMETIS_CONTRACT_ADDRESS,
  FAUCET_CONTRACT_ADDRESS
} from "@/utils/constant";
import { VEMETIS_MINTER_CONTRACT_ABI } from "@/abi/veMetisMinter";
import { VEMETIS_CONTRACT_ABI } from "@/abi/veMETIS";
import { SVMETIS_CONTRACT_ABI } from "@/abi/sveMETIS";
import {
  ContractTransactionReceipt,
  ethers,
  formatEther,
  parseUnits
} from "ethers";
import { useBalanceStore } from "@/store/balanceState";
import Web3Service from "@/services/web3Service";
import { savedAction } from "@/utils/supabase";
import { FAUCET_CONTRACT_ABI } from "@/abi/faucet";

/**
 * useApproveMinting approves the minting proess
 * @date 3/5/2024 - 12:40:00 AM
 *
 * @returns {*}
 */
export const useApproveMinting = () => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const approveMinting = useCallback(
    async (amount: string) => {
      if (!address) return;
      try {
        setIsPending(true);
        const contract = await new Web3Service().contract(
          METIS_TOKEN_CONTRACT_ADDRESS,
          METIS_TOKEN_CONTRACT_ABI,
          address
        );
        const tx = await contract.approve(
          VEMETIS_MINTER_CONTRACT_ADDRESS,
          parseUnits(amount)
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
    [address]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, []);

  return {
    isPending,
    isSuccess,
    reset,
    approveMinting,
    error,
    data
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
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const mint = useCallback(
    async (amount: string) => {
      if (!address) return;
      try {
        setIsPending(true);
        const contract = await new Web3Service().contract(
          VEMETIS_MINTER_CONTRACT_ADDRESS,
          VEMETIS_MINTER_CONTRACT_ABI,
          address
        );
        const tx = await contract.mint(address, parseUnits(amount));
        const txhash = (await tx.wait()) as ContractTransactionReceipt;
        await savedAction("mint", {
          amount,
          wallet_address: address,
          tx_hash: txhash.hash
        });
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
    [address]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, []);

  return {
    isPending,
    isSuccess,
    reset,
    mint,
    error,
    txhash: data
  };
};

/**
 * Approve the staking on veMETIS
 * @date 3/5/2024 - 10:46:39 AM
 *
 * @returns {*}
 */
export const useApproveStaking = () => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const approveStaking = useCallback(
    async (amountToStake: string) => {
      if (!address) return;
      try {
        setIsPending(true);
        const contract = await new Web3Service().contract(
          VEMETIS_CONTRACT_ADDRESS,
          VEMETIS_CONTRACT_ABI,
          address
        );
        const tx = await contract.approve(
          SVEMETIS_CONTRACT_ADDRESS,
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
    [address]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, []);

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
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const stake = useCallback(
    async (amountToStake: string) => {
      if (!address) return;
      try {
        setIsPending(true);
        const contract = await new Web3Service().contract(
          SVEMETIS_CONTRACT_ADDRESS,
          SVMETIS_CONTRACT_ABI,
          address
        );
        const tx = await contract.deposit(parseUnits(amountToStake), address);
        const txhash = (await tx.wait()) as ContractTransactionReceipt;
        await savedAction("stake", {
          amount: amountToStake,
          wallet_address: address,
          tx_hash: txhash.hash
        });
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
    [address]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, []);

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
 * Approve unstaking/withrow
 * @returns
 */
export const useApproveUnstaking = () => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const approveUnstaking = useCallback(
    async (amount: string) => {
      if (!address) return;
      try {
        setIsPending(true);
        const contract = await new Web3Service().contract(
          SVEMETIS_CONTRACT_ADDRESS,
          SVMETIS_CONTRACT_ABI,
          address
        );
        const tx = await contract.approve(
          SVEMETIS_CONTRACT_ADDRESS,
          parseUnits(amount)
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
    [address]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, []);

  return {
    isPending,
    isSuccess,
    reset,
    approveUnstaking,
    error,
    data
  };
};

/**
 * Unstake hook
 * Should be called after approving the unstaking process
 * @returns
 */
export const useUnstake = () => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const unstake = useCallback(
    async (amount: string) => {
      if (!address) return;
      try {
        setIsPending(true);
        const contract = await new Web3Service().contract(
          SVEMETIS_CONTRACT_ADDRESS,
          SVMETIS_CONTRACT_ABI,
          address
        );
        const tx = await contract.redeem(parseUnits(amount), address, address);
        const txhash = (await tx.wait()) as ContractTransactionReceipt;
        await savedAction("unstake", {
          amount,
          wallet_address: address,
          tx_hash: txhash.hash
        });
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
    [address]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, []);

  return {
    isPending,
    isSuccess,
    reset,
    unstake,
    error,
    txhash: data
  };
};

export const useFaucet = () => {
  const [data, setData] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const claim = useCallback(async () => {
    if (!address) return;
    try {
      setIsPending(true);
      const contract = await new Web3Service().contract(
        FAUCET_CONTRACT_ADDRESS,
        FAUCET_CONTRACT_ABI,
        address
      );
      const tx = await contract.claim();
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
  }, [address]);

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, []);

  return {
    isPending,
    isSuccess,
    reset,
    claim,
    error,
    txhash: data
  };
};

export const useMetisBalance = () => {
  const { address } = useAccount();
  const { setsveMETISBalance, setveMETISBalance, setMETISBalance } =
    useBalanceStore();
  const { data, refetch: fetchMETISBalance } = useBalance({
    address: address as `0x${string}`
  });

  const provider = useMemo(
    () => new ethers.JsonRpcProvider("https://sepolia.metisdevops.link/"),
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
        contracts[1].balanceOf(address),
        fetchMETISBalance()
      ]);
      setsveMETISBalance(formatEther(balances[1]));
      setveMETISBalance(formatEther(balances[0]));
    } catch (err) {
      console.log(err);
    }
  }, [
    address,
    contracts,
    fetchMETISBalance,
    setsveMETISBalance,
    setveMETISBalance
  ]);

  useEffect(() => {
    if (data) return setMETISBalance(formatEther(data.value));
  }, [data, setMETISBalance]);

  useEffect(() => {
    if (address) getBalances();
  }, [address, getBalances, setsveMETISBalance, setveMETISBalance]);

  return { getBalances };
};
