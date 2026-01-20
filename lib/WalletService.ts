import { ethers } from "ethers";
import { IProvider } from "@web3auth/base";

export interface WalletInfo {
  address: string;
  balance: string;
  displayBalance: string;
}

export interface TokenInfo {
  address: string;
  symbol: string;
  decimals: number;
  balance: string;
  displayBalance: string;
}

// ERC20 ABI for token interactions
export const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint256)",
  "function symbol() view returns (string)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
];

// Claim contract ABI
export const CLAIM_CONTRACT_ABI = [
  "function claim(uint256 amount) public returns (bool)",
  "function getClaimableAmount(address user) public view returns (uint256)",
  "function isClaimed(address user) public view returns (bool)",
  "function claimStartTime() public view returns (uint256)",
  "function claimEndTime() public view returns (uint256)",
];

export class WalletService {
  private provider: IProvider;
  private ethersProvider: ethers.BrowserProvider;
  private signer: ethers.Signer | null = null;

  constructor(provider: IProvider) {
    this.provider = provider;
    this.ethersProvider = new ethers.BrowserProvider(provider as any);
  }

  async getSigner(): Promise<ethers.Signer> {
    if (!this.signer) {
      this.signer = await this.ethersProvider.getSigner();
    }
    return this.signer;
  }

  async getWalletInfo(): Promise<WalletInfo> {
    try {
      const signer = await this.getSigner();
      const address = await signer.getAddress();
      const balance = await this.ethersProvider.getBalance(address);
      const displayBalance = ethers.formatEther(balance);

      return {
        address,
        balance: balance.toString(),
        displayBalance: parseFloat(displayBalance).toFixed(4),
      };
    } catch (error) {
      console.error("Error getting wallet info:", error);
      throw new Error("Failed to get wallet information");
    }
  }

  async getTokenInfo(
    tokenAddress: string
  ): Promise<TokenInfo> {
    try {
      const signer = await this.getSigner();
      const userAddress = await signer.getAddress();
      
      const contract = new ethers.Contract(
        tokenAddress,
        ERC20_ABI,
        this.ethersProvider
      );

      const [balance, decimals, symbol] = await Promise.all([
        contract.balanceOf(userAddress),
        contract.decimals(),
        contract.symbol(),
      ]);

      const displayBalance = ethers.formatUnits(balance, decimals);

      return {
        address: tokenAddress,
        symbol,
        decimals,
        balance: balance.toString(),
        displayBalance: parseFloat(displayBalance).toFixed(2),
      };
    } catch (error) {
      console.error("Error getting token info:", error);
      throw new Error("Failed to get token information");
    }
  }

  async getClaimableAmount(
    claimContractAddress: string,
    userAddress: string
  ): Promise<string> {
    try {
      const contract = new ethers.Contract(
        claimContractAddress,
        CLAIM_CONTRACT_ABI,
        this.ethersProvider
      );

      const amount = await contract.getClaimableAmount(userAddress);
      const displayAmount = ethers.formatUnits(amount, 18);
      
      return displayAmount;
    } catch (error) {
      console.error("Error getting claimable amount:", error);
      throw new Error("Failed to get claimable amount");
    }
  }

  async checkIfClaimed(
    claimContractAddress: string,
    userAddress: string
  ): Promise<boolean> {
    try {
      const contract = new ethers.Contract(
        claimContractAddress,
        CLAIM_CONTRACT_ABI,
        this.ethersProvider
      );

      return await contract.isClaimed(userAddress);
    } catch (error) {
      console.error("Error checking claim status:", error);
      return false;
    }
  }

  async getClaimPeriod(claimContractAddress: string): Promise<{
    startTime: number;
    endTime: number;
    isActive: boolean;
  }> {
    try {
      const contract = new ethers.Contract(
        claimContractAddress,
        CLAIM_CONTRACT_ABI,
        this.ethersProvider
      );

      const [startTime, endTime] = await Promise.all([
        contract.claimStartTime(),
        contract.claimEndTime(),
      ]);

      const now = Math.floor(Date.now() / 1000);
      const isActive = now >= Number(startTime) && now <= Number(endTime);

      return {
        startTime: Number(startTime),
        endTime: Number(endTime),
        isActive,
      };
    } catch (error) {
      console.error("Error getting claim period:", error);
      throw new Error("Failed to get claim period");
    }
  }

  async claimTokens(
    claimContractAddress: string,
    amount: string
  ): Promise<string> {
    try {
      const signer = await this.getSigner();
      const contract = new ethers.Contract(
        claimContractAddress,
        CLAIM_CONTRACT_ABI,
        signer
      );

      const amountWei = ethers.parseUnits(amount, 18);
      const tx = await contract.claim(amountWei);
      
      // Wait for transaction confirmation
      const receipt = await tx.wait();
      
      if (!receipt) {
        throw new Error("Transaction failed");
      }

      return tx.hash;
    } catch (error) {
      console.error("Error claiming tokens:", error);
      throw new Error(
        error instanceof Error ? error.message : "Failed to claim tokens"
      );
    }
  }

  async approveToken(
    tokenAddress: string,
    spenderAddress: string,
    amount: string
  ): Promise<string> {
    try {
      const signer = await this.getSigner();
      const contract = new ethers.Contract(
        tokenAddress,
        ERC20_ABI,
        signer
      );

      const amountWei = ethers.parseUnits(amount, 18);
      const tx = await contract.approve(spenderAddress, amountWei);
      
      const receipt = await tx.wait();
      
      if (!receipt) {
        throw new Error("Approval failed");
      }

      return tx.hash;
    } catch (error) {
      console.error("Error approving token:", error);
      throw new Error("Failed to approve token");
    }
  }

  async waitForTransaction(txHash: string): Promise<any> {
    try {
      const receipt = await this.ethersProvider.waitForTransaction(txHash);
      return receipt;
    } catch (error) {
      console.error("Error waiting for transaction:", error);
      throw new Error("Transaction confirmation failed");
    }
  }

  getExplorerLink(txHash: string): string {
    return `https://bscscan.com/tx/${txHash}`;
  }
}
