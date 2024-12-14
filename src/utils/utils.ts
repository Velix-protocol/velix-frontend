/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { APP_MODE } from "./constant";
import { supportedChains } from "@/utils/config.ts";
import { SupportedChains } from "@/types/index.ts";
import { RpcProvider } from "starknet";
import { STARKNET_RPC_PROVIDER } from "@/services/web3Service.ts";

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

export const waitForTransaction = async (chain: SupportedChains, res: any) => {
  if (chain === "starknet") {
    const provider = new RpcProvider({ nodeUrl: STARKNET_RPC_PROVIDER });
    await provider.waitForTransaction(res.transaction_hash);
    return res.transaction_hash;
  }
  if (chain === "metis") {
    return (await res.wait()).tx_hash;
  }
};

export const prettifyBalance = (balance: string) => {
  return Number(balance).toFixed(2);
};
