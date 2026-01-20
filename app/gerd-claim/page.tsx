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

  // Initialize wallet service and fetch claim info
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

        // Get claimable amount
        const claimContractAddr = process.env.NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS;
        if (!claimContractAddr) {
          throw new Error("Claim contract address not configured");
        }

        try {
          const claimable = await service.getClaimableAmount(claimContractAddr, address);
          setClaimAmount(claimable);

          // Check if already claimed
          const claimed = await service.checkIfClaimed(claimContractAddr, address);
          setIsClaimed(claimed);
        } catch (err) {
          console.warn("Could not fetch claim info:", err);
          setClaimAmount("0");
          setIsClaimed(false);
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
    if (!walletService || !address) {
      setError("Wallet not initialized");
      return;
    }

    try {
      setClaiming(true);
      setError(null);
      setSuccess(null);
      setTxHash(null);

      const claimContractAddr = process.env.NEXT_PUBLIC_CLAIM_CONTRACT_ADDRESS;
      if (!claimContractAddr) {
        throw new Error("Claim contract address not configured");
      }

      // Execute claim
      const hash = await walletService.claimTokens(claimContractAddr, claimAmount);
      setTxHash(hash);

      // Wait for confirmation
      await walletService.waitForTransaction(hash);

      setSuccess(`✓ Claim successful! Transaction: ${hash.substring(0, 10)}...`);
      setIsClaimed(true);
      setClaimAmount("0");
    } catch (err) {
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

  const canClaim = !isClaimed && parseFloat(claimAmount) > 0;
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
                    <span>{parseFloat(claimAmount).toFixed(2)}</span>
                    <span className={styles.symbol}>GERD</span>
                  </div>
                </div>

                {canClaim ? (
                  <button
                    onClick={handleClaim}
                    disabled={claiming}
                    className={styles.claimButton}
                  >
                    {claiming ? "Processing..." : "Claim Now"}
                  </button>
                ) : (
                  <div className={styles.noClaimMessage}>
                    <p>No tokens available to claim at this time.</p>
                  </div>
                )}
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
