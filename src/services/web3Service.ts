import { METIS_SEPOLIA } from "@/utils/wagmi.config";
import {
  BrowserProvider,
  Interface,
  InterfaceAbi,
  JsonRpcProvider,
  ethers
} from "ethers";
import { RpcProvider, Contract, Abi, AccountInterface } from "starknet";
import { SupportedChains } from "@/types/index.ts";

export const STARKNET_RPC_PROVIDER =
  "https://free-rpc.nethermind.io/sepolia-juno/v0_7";

export default class Web3Service {
  public provider: JsonRpcProvider | BrowserProvider | RpcProvider | null;
  private ecosystem: SupportedChains;

  constructor(ecosystem: "metis" | "starknet") {
    this.ecosystem = ecosystem;
    if (ecosystem === "metis") {
      this.provider = window.ethereum
        ? new ethers.BrowserProvider(window.ethereum)
        : new ethers.JsonRpcProvider(METIS_SEPOLIA.rpcUrls.default.http[0]);
    } else {
      this.provider = new RpcProvider({
        nodeUrl: STARKNET_RPC_PROVIDER
      });
    }
  }

  async contract(
    contractAddress: `0x${string}`,
    ABI: Interface | InterfaceAbi | Abi,
    connectedWalletAddress: `0x${string}`,
    account?: AccountInterface
  ) {
    if (this.ecosystem === "starknet") {
      return new Contract(
        ABI as Abi,
        contractAddress,
        account ? account : (this.provider as RpcProvider)
      );
    }

    const signer = await (
      this.provider as JsonRpcProvider | BrowserProvider
    )?.getSigner(connectedWalletAddress ?? undefined);
    return new ethers.Contract(contractAddress, ABI, signer);
  }
}
