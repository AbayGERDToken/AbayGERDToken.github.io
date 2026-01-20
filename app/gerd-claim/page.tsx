"use client";

import React, { useState, useEffect } from "react";
import { useWeb3Auth } from "@/lib/Web3AuthContext";
import { useRouter } from "next/navigation";
import { WalletService } from "@/lib/WalletService";
import styles from "./claim.module.css";

export default function ClaimPage() {
  const { provider, isLogged, address, logout, loading: authLoading } = useWeb3Auth();
  const router = useRouter();
  
  const [walletService, setWalletService] = useState<WalletService | null>(null);
  const [claimAmount, setClaimAmount] = useState<string>("0");
  const [bscBalance, setBscBalance] = useState<string>("0");
  const [isClaimed, setIsClaimed] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!authLoading && !isLogged) {
      router.push("/auth");
    }
  }, [isLogged, authLoading, router]);

  // Initialize wallet service and fetch balance
  useEffect(() => {
    if (!provider || !address) return;

    const initializeAndFetch = async () => {
      try {
        setLoading(true);
        setError(null);

        const service = new WalletService(provider);
        setWalletService(service);

        // Get BNB balance
        const walletInfo = await service.getWalletInfo();
        setBscBalance(walletInfo.displayBalance);

        // Check if already claimed via backend
        try {
          const checkResponse = await fetch(`https://abay-gerd-backend.onrender.com/check-claim/${address}`);
          if (checkResponse.ok) {
            const checkData = await checkResponse.json();
            setIsClaimed(checkData.claimed || false);
          }
        } catch (err) {
          console.warn("Could not check claim status:", err);
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Failed to initialize wallet";
        setError(errorMsg);
        console.error("Initialization error:", err);
      } finally {
        setLoading(false);
      }
    };

    initializeAndFetch();
  }, [provider, address]);

  const handleClaim = async () => {
    if (!address) {
      setError("Wallet not connected");
      return;
    }

    try {
      setClaiming(true);
      setError(null);
      setSuccess(null);
      setTxHash(null);

      // Get session token
      const sessionResponse = await fetch('https://abay-gerd-backend.onrender.com/auth/session');
      const sessionData = await sessionResponse.json();
      
      if (!sessionData.session_token) {
        throw new Error("Failed to get session token");
      }

      // Detect country
      let estimatedAmount = 10000;
      try {
        const locResponse = await fetch('https://ipapi.co/json/');
        const locData = await locResponse.json();
        estimatedAmount = (locData.country_code === "ET") ? 75000 : 10000;
      } catch (err) {
        console.warn("Could not detect location:", err);
      }

      // Call backend to send tokens
      const response = await fetch('https://abay-gerd-backend.onrender.com/send-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: address,
          session_token: sessionData.session_token,
          recaptchaToken: "" // Empty since we're using Web3Auth authentication
        })
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        const hash = data.tx_hash.startsWith('0x') ? data.tx_hash : `0x${data.tx_hash}`;
        setTxHash(hash);
        setSuccess(`✓ Claim successful! Received approximately ${estimatedAmount.toLocaleString()} GERD tokens`);
        setIsClaimed(true);
        setClaimAmount("0");      } else {
        throw new Error(data.message || "Failed to claim tokens");
      }    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Claim failed";
      setError(errorMsg);
      console.error("Claim error:", err);
    } finally {
      setClaiming(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/auth");
    } catch (err) {
      setError("Logout failed");
    }
  };

  if (authLoading || loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingCard}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const explorerLink = txHash ? `https://bscscan.com/tx/${txHash}` : null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1>GERD Token Claim</h1>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>

      <div className={styles.mainCard}>
        <div className={styles.walletInfo}>
          <div className={styles.infoBox}>
            <label>Your Wallet Address</label>
            <div className={styles.addressBox}>
              <code>{address}</code>
              <button
                onClick={() => {
                  if (address) navigator.clipboard.writeText(address);
                }}
                className={styles.copyBtn}
                title="Copy address"
              >
                📋
              </button>
            </div>
          </div>

          <div className={styles.infoBox}>
            <label>BNB Balance</label>
            <div className={styles.valueBox}>{bscBalance} BNB</div>
          </div>
        </div>

        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}

        <div className={styles.claimSection}>
          <div className={styles.claimCard}>
            <h2>Claim Your GERD Tokens</h2>

            {isClaimed ? (
              <div className={styles.claimedMessage}>
                <p className={styles.claimedEmoji}>✓</p>
                <p>You have already claimed your tokens!</p>
              </div>
            ) : (
              <>
                <div className={styles.amountDisplay}>
                  <label>Available to Claim</label>
                  <div className={styles.amountValue}>
                    <span>10,000 - 75,000</span>
                    <span className={styles.symbol}>GERD</span>
                  </div>
                  <p className={styles.note}>Amount varies by location</p>
                </div>

                <button
                  onClick={handleClaim}
                  disabled={claiming}
                  className={styles.claimButton}
                >
                  {claiming ? "Processing..." : "Claim Now"}
                </button>
              </>
            )}

            {explorerLink && (
              <div className={styles.explorerLink}>
                <a href={explorerLink} target="_blank" rel="noopener noreferrer">
                  View on BSCScan →
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3>🔐 Non-Custodial</h3>
              <p>Your wallet is created using Web3Auth. You maintain full control of your private keys.</p>
            </div>
            <div className={styles.infoItem}>
              <h3>⚡ Fast & Secure</h3>
              <p>Transactions on Binance Smart Chain are quick and have low gas fees.</p>
            </div>
            <div className={styles.infoItem}>
              <h3>📱 Browser-Based</h3>
              <p>No need to install anything. Everything works directly in your browser.</p>
            </div>
            <div className={styles.infoItem}>
              <h3>🌍 Global Access</h3>
              <p>Works anywhere with internet access. No geographic restrictions.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Safe, simple, and secure token claiming for everyone.</p>
      </footer>
    </div>
  );
}
