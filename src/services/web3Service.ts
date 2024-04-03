import { METIS_SEPOLIA } from "@/utils/wagmi.config";
import {
  BrowserProvider,
  Interface,
  InterfaceAbi,
  JsonRpcProvider,
  ethers
} from "ethers";

export default class Web3Service {
  public provider: JsonRpcProvider | BrowserProvider;

  constructor() {
    this.provider = window.ethereum
      ? new ethers.BrowserProvider(window.ethereum)
      : new ethers.JsonRpcProvider(METIS_SEPOLIA.rpcUrls.default.http[0]);
  }

  async contract(
    contractAddress: `0x${string}`,
    ABI: Interface | InterfaceAbi,
    connectedWalletAddress: `0x${string}`
  ) {
    const signer = await this.provider.getSigner(
      connectedWalletAddress ?? undefined
    );
    return new ethers.Contract(contractAddress, ABI, signer);
  }
}
