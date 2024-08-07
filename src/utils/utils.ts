/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { APP_MODE, EXPLORER_TX_URL } from "./constant";

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
  window.open(`${EXPLORER_TX_URL}${txHash}`);
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

export const isApp = () => APP_MODE === "app";
