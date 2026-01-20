"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Web3Auth } from "@web3auth/modal";
import { IProvider } from "@web3auth/base";
import {
  initWeb3Auth,
  loginWithWeb3Auth,
  logoutWeb3Auth,
  getUserAddress,
  getTokenBalance,
  claimTokens,
} from "./web3auth";

export interface Web3AuthContextType {
  provider: IProvider | null;
  isLogged: boolean;
  userInfo: any;
  address: string | null;
  loading: boolean;
  error: string | null;
  login: (loginProvider: "google" | "facebook") => Promise<void>;
  logout: () => Promise<void>;
  getBalance: (tokenAddress: string) => Promise<string>;
  claimGERD: (claimContractAddress: string, amount: string) => Promise<string>;
}

const Web3AuthContext = createContext<Web3AuthContextType | undefined>(undefined);

export const Web3AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [web3authInstance, setWeb3authInstance] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mark component as mounted on client only
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize Web3Auth only on client side after mount
  useEffect(() => {
    if (!mounted) return;

    const initializeWeb3Auth = async () => {
      try {
        setLoading(true);
        
        // Check for required environment variables
        const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID;
        if (!clientId || clientId === "YOUR_WEB3AUTH_CLIENT_ID") {
          throw new Error(
            "Web3Auth Client ID is not configured. Please set NEXT_PUBLIC_WEB3AUTH_CLIENT_ID in .env.local. " +
            "Get your Client ID from https://dashboard.web3auth.io"
          );
        }
        
        const web3auth = await initWeb3Auth();
        
        if (web3auth) {
          setWeb3authInstance(web3auth);
          
          // Add a small delay to ensure modal is fully initialized
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Check if user is already logged in
          if (web3auth.provider) {
            setProvider(web3auth.provider);
            setIsLogged(true);

            try {
              const user = await web3auth.getUserInfo();
              setUserInfo(user);

              const userAddr = await getUserAddress(web3auth.provider);
              setAddress(userAddr);
            } catch (err) {
              console.error("Error getting user info:", err);
            }
          }
        } else {
          throw new Error("Failed to initialize Web3Auth instance");
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to initialize Web3Auth";
        setError(errorMessage);
        console.error("Web3Auth initialization failed:", err);
      } finally {
        setLoading(false);
      }
    };

    initializeWeb3Auth();
  }, [mounted]);

  const login = async (loginProvider: "google" | "facebook") => {
    if (!web3authInstance) {
      setError("Web3Auth not initialized. Please refresh the page.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Wait to ensure modal is ready
      await new Promise(resolve => setTimeout(resolve, 500));

      console.log("Attempting login with Web3Auth...");
      const result = await loginWithWeb3Auth(web3authInstance, loginProvider);
      console.log("Login successful");
      
      if (web3authInstance.provider) {
        setProvider(web3authInstance.provider);
        setIsLogged(true);

        try {
          const user = await web3authInstance.getUserInfo();
          setUserInfo(user);
        } catch (userErr) {
          console.warn("Could not get user info:", userErr);
        }

        try {
          const userAddr = await getUserAddress(web3authInstance.provider);
          setAddress(userAddr);
        } catch (addrErr) {
          console.warn("Could not get user address:", addrErr);
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login failed";
      
      console.error("Login error details:", err);
      
      // Provide helpful error messages
      if (errorMessage.includes("modal") || errorMessage.includes("wallet") || errorMessage.includes("not initialized") || errorMessage.includes("ready")) {
        setError("Web3Auth modal is not ready yet. Please refresh the page and try again.");
      } else if (errorMessage.includes("Network") || errorMessage.includes("network")) {
        setError("Network error. Please check your internet connection and try again.");
      } else if (errorMessage.includes("User closed")) {
        setError("Login cancelled. Please try again if you'd like to proceed.");
      } else {
        setError(errorMessage || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    if (!web3authInstance) {
      setError("Web3Auth not initialized");
      return;
    }

    try {
      setLoading(true);
      await logoutWeb3Auth(web3authInstance);
      
      setProvider(null);
      setIsLogged(false);
      setUserInfo(null);
      setAddress(null);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Logout failed";
      setError(errorMessage);
      console.error("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getBalance = async (tokenAddress: string): Promise<string> => {
    if (!provider || !address) {
      throw new Error("User not logged in");
    }

    try {
      return await getTokenBalance(provider, tokenAddress, address);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to get balance";
      setError(errorMessage);
      throw err;
    }
  };

  const claimGERD = async (claimContractAddress: string, amount: string): Promise<string> => {
    if (!provider) {
      throw new Error("User not logged in");
    }

    try {
      return await claimTokens(provider, claimContractAddress, amount);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Claim failed";
      setError(errorMessage);
      throw err;
    }
  };

  const value: Web3AuthContextType = {
    provider,
    isLogged,
    userInfo,
    address,
    loading,
    error,
    login,
    logout,
    getBalance,
    claimGERD,
  };

  return (
    <Web3AuthContext.Provider value={value}>
      {children}
    </Web3AuthContext.Provider>
  );
};

export const useWeb3Auth = (): Web3AuthContextType => {
  const context = useContext(Web3AuthContext);
  if (context === undefined) {
    throw new Error("useWeb3Auth must be used within Web3AuthProvider");
  }
  return context;
};
