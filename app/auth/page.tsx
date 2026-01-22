"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWeb3Auth } from "@/lib/Web3AuthContext";
import styles from "./auth.module.css";

export default function AuthPage() {
  const router = useRouter();
  const { login, isLoading, error, isLogged, address } = useWeb3Auth();
  const [localError, setLocalError] = React.useState<string | null>(null);
  const [balanceInfo, setBalanceInfo] = React.useState<string | null>(null);

  // Show balance when logged in
  useEffect(() => {
    if (isLogged && address) {
      const checkBalance = async () => {
        try {
          const balance = await fetchBalance(address);
          if (balance && balance !== "0.00") {
            setBalanceInfo(`Balance: ${balance} GERD`);
          }
        } catch (err) {
          console.error("Balance check error:", err);
        }
      };
      checkBalance();
    }
  }, [isLogged, address]);

  const fetchBalance = async (walletAddress: string): Promise<string | null> => {
    try {
      const Web3 = (await import('web3')).default;
      const web3 = new Web3(process.env.NEXT_PUBLIC_BSC_RPC_URL || '');
      
      const tokenABI = [
        {
          constant: true,
          inputs: [{ name: 'account', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ name: '', type: 'uint256' }],
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [{ name: '', type: 'uint8' }],
          type: 'function',
        },
      ];

      const tokenAddress = process.env.NEXT_PUBLIC_GERD_TOKEN_ADDRESS || '';
      const contract = new web3.eth.Contract(tokenABI as any, tokenAddress);
      const decimals = await contract.methods.decimals().call();
      const balance = await contract.methods.balanceOf(walletAddress).call();
      const formatted = (Number(balance) / 10 ** Number(decimals)).toFixed(2);
      return formatted;
    } catch (err) {
      console.error('Error fetching balance:', err);
      return null;
    }
  };

  const handleLogin = async (provider: "google" | "facebook") => {
    try {
      setLocalError(null);
      setBalanceInfo(null);
      await login(provider);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed. Please try again.";
      setLocalError(message);
    }
  };

  const displayError = error || localError;

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <i className="fas fa-wallet"></i>
          </div>
          <h1 className={styles.title}>Welcome to GERD Token</h1>
          <p className={styles.subtitle}>Sign in to access your wallet and claim tokens</p>
        </div>

        {displayError && (
          <div className={styles.errorAlert}>
            <i className="fas fa-exclamation-circle me-2"></i>
            {displayError}
          </div>
        )}

        {balanceInfo && (
          <div className={styles.successAlert}>
            <i className="fas fa-check-circle me-2"></i>
            Wallet created! {balanceInfo}
          </div>
        )}

        {isLogged && balanceInfo && (
          <button
            className={styles.proceedButton}
            onClick={() => router.push("/claim-form")}
          >
            <i className="fas fa-arrow-right me-2"></i>
            Proceed to Claim Form
          </button>
        )}

        <div className={styles.loginOptions}>
          <button
            className={styles.loginButton}
            onClick={() => handleLogin("google")}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin me-2"></i>
                Connecting...
              </>
            ) : (
              <>
                <i className="fab fa-google me-2"></i>
                Continue with Google
              </>
            )}
          </button>

          <button
            className={styles.loginButton}
            onClick={() => handleLogin("facebook")}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin me-2"></i>
                Connecting...
              </>
            ) : (
              <>
                <i className="fab fa-facebook me-2"></i>
                Continue with Facebook
              </>
            )}
          </button>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            <i className="fas fa-shield-alt me-2"></i>
            Your credentials are secured with Web3Auth
          </p>
        </div>
      </div>
    </div>
  );
}
