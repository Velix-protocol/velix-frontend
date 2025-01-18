/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { APP_MODE } from "./constant";
import { supportedChains } from "@/utils/config.ts";
import { SupportedChains } from "@/types/index.ts";
import {
  BigNumberish,
  Contract,
  GetTransactionReceiptResponse,
  RpcProvider
} from "starknet";
import { STARKNET_RPC_PROVIDER } from "@/services/web3Service.ts";
import { STARKET_TESTNET_VAULT_ABI } from "@/abi/starknet/velixStarknetVault.ts";
import { formatEther, TransactionReceipt } from "ethers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateString = (
  address?: string,
  startingCharacters = 4,
  endingCharacters = 4
): string => {
  if (!address) return "";
  return `${address.slice(0, startingCharacters)}...${address.slice(
    address.length - endingCharacters
  )}`;
};

export const converGweiToEth = (value: bigint, maxLength = 6) => {
  return (Number(value.toString()) / 1000000000000000000)
    .toString()
    .substring(0, maxLength);
};

export const viewTransactionOnExplorer = (txHash: string) => {
  window.open(`${supportedChains.metis.explorerUrls.testnet.txUrl}${txHash}`);
};

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

type Func = (...args: any[]) => void;
export function throttle(func: Func, limit: number): Func {
  let inThrottle = false;
  return function (this: any, ...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export const isApp = () => APP_MODE === "app";

export const decodeIntitatedWithdrawlStarknetEvents = async (
  txReceipt: GetTransactionReceiptResponse
) => {
  const provider = new RpcProvider({ nodeUrl: STARKNET_RPC_PROVIDER });
  const contract = new Contract(
    STARKET_TESTNET_VAULT_ABI,
    supportedChains.starknet.contracts.testnet.VAULT.address,
    provider
  );
  const events = contract.parseEvents(txReceipt);
  const data =
    events[0]?.[
      "velix_vault::vault::velix_vault_manager::velix_vault_manager::IntitatedWithdrawl"
    ];

  return {
    requestIndex: data.request_index.toString(),
    amount: formatEther(data.expected_amount as BigNumberish),
    maturity: Number(data.maturity_period.toString())
  };
};

export const waitForTransaction = async (chain: SupportedChains, res: any) => {
  if (chain === "starknet") {
    const provider = new RpcProvider({ nodeUrl: STARKNET_RPC_PROVIDER });
    const txReceipt = await provider.waitForTransaction(res.transaction_hash);
    return { txHash: res.transaction_hash, txReceipt };
  }

  const txReceipt = (await res.wait()) as TransactionReceipt;
  return {
    txHash: txReceipt.hash,
    txReceipt
  };
};

export const prettifyBalance = (balance: string, length = 2) => {
  return Number(balance).toFixed(length);
};
