import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider } from "@web3auth/base";
import { ethers } from "ethers";

export interface Web3AuthContextType {
  provider: IProvider | null;
  isLogged: boolean;
  userInfo: any;
  address: string | null;
  login: (loginProvider: "google" | "facebook") => Promise<void>;
  logout: () => Promise<void>;
  getBalance: (tokenAddress: string) => Promise<string>;
  claimTokens: (claimContractAddress: string, amount: string) => Promise<string>;
}

let web3auth: Web3Auth | null = null;

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x38", // BSC Chain ID (56 in hex)
  rpcTarget: process.env.NEXT_PUBLIC_BSC_RPC_URL || "https://bsc-dataseed1.binance.org:443",
  displayName: "Binance Smart Chain",
  blockExplorer: "https://bscscan.com",
  ticker: "BNB",
  tickerName: "BNB",
};

export const initWeb3Auth = async () => {
  if (typeof window === "undefined") return null;
  
  if (web3auth) {
    return web3auth;
  }

  try {
    web3auth = new Web3Auth({
      clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "",
      chainConfig: chainConfig as any,
      uiConfig: {
        appName: "GERD Token Claim",
        appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001",
        theme: "light" as any,
        loginGridCol: 2,
        primaryButton: "socialLogin" as any,
      },
      web3AuthNetwork: "sapphire_mainnet",
      enableLogging: true,
    } as any);

    // Initialize the modal - use type assertion to handle API differences
    try {
      if (typeof (web3auth as any).initModal === 'function') {
        await (web3auth as any).initModal();
        console.log("Web3Auth modal initialized successfully");
      } else {
        console.log("Web3Auth instance created (no initModal method available)");
      }
    } catch (initError) {
      console.error("Web3Auth initModal error:", initError);
      // Continue even if initModal fails
    }
    
    return web3auth;
  } catch (error) {
    console.error("Web3Auth initialization error:", error);
    throw error;
  }
};

export const getWeb3Auth = () => web3auth;

export const loginWithWeb3Auth = async (
  web3authInstance: Web3Auth,
  provider: "google" | "facebook"
) => {
  try {
    // Ensure instance is ready
    if (!web3authInstance) {
      throw new Error("Web3Auth instance not available - please refresh the page");
    }

    // Check if already connected
    if ((web3authInstance as any).connected || (web3authInstance as any).provider) {
      console.log("Web3Auth already connected");
      return (web3authInstance as any).provider;
    }

    // The connect method opens the modal and handles authentication
    console.log("Web3Auth connecting...");
    const result = await (web3authInstance as any).connect();
    console.log("Web3Auth connection successful");
    return result;
  } catch (error) {
    console.error("Web3Auth connect error:", error);
    throw error;
  }
};

export const logoutWeb3Auth = async (web3authInstance: Web3Auth) => {
  try {
    await web3authInstance.logout();
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const getEthersProvider = (provider: IProvider) => {
  return new ethers.BrowserProvider(provider as any);
};

export const getUserAddress = async (provider: IProvider): Promise<string> => {
  try {
    const ethersProvider = getEthersProvider(provider);
    const signer = await ethersProvider.getSigner();
    const address = await signer.getAddress();
    return address;
  } catch (error) {
    console.error("Error getting user address:", error);
    throw error;
  }
};

export const getTokenBalance = async (
  provider: IProvider,
  tokenAddress: string,
  userAddress: string
): Promise<string> => {
  try {
    const ethersProvider = getEthersProvider(provider);
    
    const ERC20_ABI = [
      "function balanceOf(address owner) view returns (uint256)",
      "function decimals() view returns (uint8)",
    ];
    
    const contract = new ethers.Contract(
      tokenAddress,
      ERC20_ABI,
      ethersProvider
    );

    const balance = await contract.balanceOf(userAddress);
    const decimals = await contract.decimals();
    
    return ethers.formatUnits(balance, decimals);
  } catch (error) {
    console.error("Error getting token balance:", error);
    throw error;
  }
};

export const claimTokens = async (
  provider: IProvider,
  claimContractAddress: string,
  amount: string
): Promise<string> => {
  try {
    const ethersProvider = getEthersProvider(provider);
    const signer = await ethersProvider.getSigner();

    const CLAIM_ABI = [
      "function claim(uint256 amount) public returns (bool)",
    ];

    const contract = new ethers.Contract(
      claimContractAddress,
      CLAIM_ABI,
      signer
    );

    const amountWei = ethers.parseUnits(amount, 18);
    const tx = await contract.claim(amountWei);
    
    return tx.hash;
  } catch (error) {
    console.error("Error claiming tokens:", error);
    throw error;
  }
};
