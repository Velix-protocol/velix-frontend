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

export const isApp = () => APP_MODE === "app";
