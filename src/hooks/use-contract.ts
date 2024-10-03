/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBalance } from "wagmi";
import { useCallback, useEffect, useMemo, useState } from "react";
import { VELIX_SUPER_NFT_URL } from "@/utils/constant";
import {
  ContractTransactionReceipt,
  ethers,
  formatEther,
  parseUnits
} from "ethers";
import { useBalanceStore } from "@/store/balanceState";
import Web3Service from "@/services/web3Service";
import { saveClaimNftAction } from "@/utils/supabase";
import { useMetricsStore } from "@/store/velixMetrics";
import { velixApi } from "@/services/http";
import { AxiosError } from "axios";
import { supportedChains } from "@/utils/config.ts";
import useChainAccount from "./useChainAccount";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";
import { waitForTransaction } from "@/utils/utils.ts";
import { SupportedChains } from "@/types/index.ts";

const useContractHookState = () => {
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
  console.log({ contractData });
  if (!contractData?.abi || !contractData?.address) return;

  return new Web3Service(chain).contract(
    contractData.address as `0x${string}`,
    contractData.abi,
    address as `0x${string}`
  );
};

export const useApproveMinting = () => {
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

  const approveMinting = useCallback(
    async (amount: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract.approve(
          supportedChains.metis.contracts.testnet.VEMETIS_MINTER.address,
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
  const contractInstance = useContract("VEMETIS_MINTER");

  const mint = useCallback(
    async (amount: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract.mint(address, parseUnits(amount));
        const txhash = (await tx.wait()) as ContractTransactionReceipt;
        await velixApi.saveAction("mint", {
          amount: Number(amount),
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
    chain === "starknet" ? "STRK_TOKEN" : "VEMETIS"
  );

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

        const tx = await contract.approve(
          approveAddress,
          parseUnits(amountToStake)
        );
        const txhash = waitForTransaction(chain as SupportedChains, tx);
        setData(txhash);
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
    [
      address,
      chain,
      contractInstance,
      setData,
      setError,
      setIsPending,
      setIsSuccess
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
    chain === "starknet" ? "VAULT" : "SVEMETIS"
  );

  const stake = useCallback(
    async (amountToStake: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract.deposit(parseUnits(amountToStake), address);
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
        setError({
          message: e instanceof AxiosError ? e.message : e.shortMessage ?? e
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
      setIsSuccess
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
 * Approve unstaking/withrow
 * @returns
 */
export const useApproveUnstaking = () => {
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
    chain === "starknet" ? "VAULT" : "SVEMETIS"
  );

  const approveUnstaking = useCallback(
    async (amount: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const approveAddress =
          chain === "starknet"
            ? supportedChains.starknet.contracts.testnet.STRK_TOKEN.address
            : supportedChains.metis.contracts.testnet.SVEMETIS.address;

        const tx = await contract.approve(approveAddress, parseUnits(amount));
        const txhash = waitForTransaction(chain as SupportedChains, tx);
        setData(txhash);
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
    [
      address,
      chain,
      contractInstance,
      setData,
      setError,
      setIsPending,
      setIsSuccess
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
    chain === "starknet" ? "VAULT" : "SVEMETIS"
  );

  const unstakeContractFunction = chain === "starknet" ? "withdraw" : "redeem";
  const unstake = useCallback(
    async (amount: string) => {
      const contract = await contractInstance;
      if (!contract) return;
      if (!address) return;
      try {
        setIsPending(true);
        const tx = await contract?.[unstakeContractFunction](
          parseUnits(amount),
          address,
          address
        );
        const txhash = await waitForTransaction(chain as SupportedChains, tx);
        await velixApi.saveAction("unstake", {
          amount: Number(amount),
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
        setError({
          message: e instanceof AxiosError ? e.message : e.shortMessage ?? e
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
      unstakeContractFunction
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
    unstake,
    error,
    txhash: data
  };
};

export const useMintNft = () => {
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
  const contractInstance = useContract("VELIX_NFT");

  const addEligibleAddress = useCallback(async () => {
    const contract = await contractInstance;
    if (!contract) return;
    if (!address) return;
    try {
      const tx = await contract.addEligibleAddress(address);
      await tx.wait();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }, [address, contractInstance]);

  const mintNft = useCallback(async () => {
    if (!address) return;
    try {
      setIsPending(true);
      const contract = await new Web3Service("metis").contract(
        supportedChains.metis.contracts.testnet.VELIX_NFT
          .address as `0x${string}`,
        supportedChains.metis.contracts.testnet.VELIX_NFT.abi,
        address as `0x${string}`
      );

      // 3332 is a random number for now is just to satisfy the contract requirement,
      // when the contract is update that parameter should be removed
      await addEligibleAddress();
      const tx = await contract.safeMint(
        address,
        parseUnits("3332"),
        VELIX_SUPER_NFT_URL,
        { from: address }
      );

      const txhash = (await tx.wait()) as ContractTransactionReceipt;
      console.log(txhash);
      const { error } = await saveClaimNftAction(address, "3332", txhash.hash);
      console.log(error);
      if (error) throw error;

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
  }, [
    addEligibleAddress,
    address,
    setData,
    setError,
    setIsPending,
    setIsSuccess
  ]);

  const reset = useCallback(() => {
    setData(null);
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, [setData, setError, setIsPending, setIsSuccess]);

  return {
    isPending,
    addEligibleAddress,
    isSuccess,
    reset,
    mintNft,
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
    chain === "starknet" ? "VAULT" : "SVEMETIS"
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
  const contractInstance = useContract("SVEMETIS");

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
  const { address } = useChainAccount();
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
      [
        supportedChains.metis.contracts.testnet.VEMETIS.address,
        supportedChains.metis.contracts.testnet.VEMETIS.abi,
        provider
      ] as any,
      [
        supportedChains.metis.contracts.testnet.SVEMETIS.address,
        supportedChains.metis.contracts.testnet.SVEMETIS.abi,
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
