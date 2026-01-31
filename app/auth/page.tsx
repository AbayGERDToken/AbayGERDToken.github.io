"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useWeb3Auth } from "@/lib/Web3AuthContext";
import { useETNAuth } from "@/lib/ETNAuthContext";
import { Logo } from "@/components/Logo";
import styles from "./auth.module.css";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, logout, isLoading, error, isLogged, address } = useWeb3Auth();
  const { signIn: etnSignIn, logout: etnLogout, isLoading: etnIsLoading, error: etnError, isLogged: etnIsLogged, sub: etnSub, checkSession } = useETNAuth();
  const [localError, setLocalError] = React.useState<string | null>(null);
  const [balanceInfo, setBalanceInfo] = React.useState<string | null>(null);
  const [loadingBalance, setLoadingBalance] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState(false);
  const [activeAuthMethod, setActiveAuthMethod] = React.useState<'web3auth' | 'etn' | null>(null);

  // Check if we're returning from ETN callback
  useEffect(() => {
    const checkEtnCallback = async () => {
      if (searchParams.get('etn_callback') === 'true') {
        console.log('[Auth] ETN callback detected, checking session...');
        await checkSession();
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };
    checkEtnCallback();
  }, [searchParams, checkSession]);

  // Determine which auth method is active
  useEffect(() => {
    if (isLogged) {
      setActiveAuthMethod('web3auth');
    } else if (etnIsLogged) {
      setActiveAuthMethod('etn');
    }
  }, [isLogged, etnIsLogged]);

  // Show balance when logged in
  useEffect(() => {
    if (isLogged && address) {
      const checkBalance = async () => {
        setLoadingBalance(true);
        try {
          const balance = await fetchBalance(address);
          if (balance) {
            setBalanceInfo(`Balance: ${balance} GERD`);
          } else {
            setBalanceInfo('Balance: 0.00 GERD');
          }
        } catch (err) {
          console.error("Balance check error:", err);
          setBalanceInfo('Balance: Unable to fetch');
        } finally {
          setLoadingBalance(false);
        }
      };
      checkBalance();
    } else {
      setBalanceInfo(null);
    }
  }, [isLogged, address]);

  const fetchBalance = async (walletAddress: string): Promise<string | null> => {
    try {
      const Web3 = (await import('web3')).default;
      const rpcUrl = process.env.NEXT_PUBLIC_BSC_RPC_URL || 'https://bsc-dataseed1.binance.org:443';
      const tokenAddress = process.env.NEXT_PUBLIC_GERD_TOKEN_ADDRESS || '0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c';

      if (!rpcUrl) {
        console.warn('[Auth] Missing BSC RPC URL; returning null balance');
        return null;
      }
      if (!tokenAddress) {
        console.warn('[Auth] Missing GERD token address; returning null balance');
        return null;
      }

      const web3 = new Web3(rpcUrl);
      
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

  const handleLogin = async (provider: "google" | "facebook" | "etn") => {
    try {
      setLocalError(null);
      setBalanceInfo(null);
      if (provider === "etn") {
        await etnSignIn();
      } else {
        await login(provider);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed. Please try again.";
      setLocalError(message);
    }
  };

  const handleLogout = async () => {
    try {
      setLocalError(null);
      setBalanceInfo(null);
      if (activeAuthMethod === 'web3auth') {
        await logout();
      } else if (activeAuthMethod === 'etn') {
        await etnLogout();
      }
      setActiveAuthMethod(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Logout failed. Please try again.";
      setLocalError(message);
    }
  };

  const handleCopyAddress = async () => {
    if (address) {
      try {
        await navigator.clipboard.writeText(address);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy address:', err);
      }
    }
  };

  const displayError = error || etnError || localError;
  const currentAddress = etnSub || address;

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
            <strong>Error:</strong> {displayError}
            {displayError.includes('not initialized') && (
              <div className={styles.errorDetails} style={{ marginTop: '8px', fontSize: '12px' }}>
                <details>
                  <summary>Troubleshooting</summary>
                  <p style={{ marginTop: '8px' }}>
                    Web3Auth failed to initialize. This may be due to:
                    <ul style={{ paddingLeft: '20px', marginTop: '4px' }}>
                      <li>Network connectivity issues</li>
                      <li>Browser restrictions on loading external scripts</li>
                      <li>Ad blockers or privacy extensions</li>
                    </ul>
                    Please try:
                    <ul style={{ paddingLeft: '20px', marginTop: '4px' }}>
                      <li>Refreshing the page</li>
                      <li>Disabling browser extensions temporarily</li>
                      <li>Using a different browser</li>
                    </ul>
                  </p>
                </details>
              </div>
            )}
          </div>
        )}

        {isLogged && address && (
          <>
            <div className={styles.successAlert}>
              <i className="fas fa-check-circle me-2"></i>
              {loadingBalance ? (
                <>
                  Wallet connected! Loading balance...
                  <i className="fas fa-spinner fa-spin ms-2"></i>
                </>
              ) : (
                <>
                  Wallet connected! {balanceInfo || 'Balance: N/A'}
                </>
              )}
            </div>
            
            <div className={styles.addressContainer}>
              <div className={styles.addressLabel}>Wallet Address:</div>
              <div className={styles.addressRow}>
                <code className={styles.addressText}>{address}</code>
                <button
                  className={styles.copyButton}
                  onClick={handleCopyAddress}
                  title="Copy address"
                >
                  <i className={`fas ${copySuccess ? 'fa-check' : 'fa-copy'}`}></i>
                  {copySuccess ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </>
        )}

        {etnIsLogged && etnSub && (
          <>
            <div className={styles.successAlert}>
              <i className="fas fa-check-circle me-2"></i>
              ETN Identity Connected!
            </div>
            
            <div className={styles.addressContainer}>
              <div className={styles.addressLabel}>ETN User ID:</div>
              <div className={styles.addressRow}>
                <code className={styles.addressText}>{etnSub}</code>
                <button
                  className={styles.copyButton}
                  onClick={() => {
                    if (etnSub) {
                      navigator.clipboard.writeText(etnSub);
                      setCopySuccess(true);
                      setTimeout(() => setCopySuccess(false), 2000);
                    }
                  }}
                  title="Copy user ID"
                >
                  <i className={`fas ${copySuccess ? 'fa-check' : 'fa-copy'}`}></i>
                  {copySuccess ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
            <div className={styles.infoAlert} style={{ background: '#d1ecf1', color: '#0c5460', marginTop: '1rem' }}>
              <i className="fas fa-info-circle me-2"></i>
              Your ETN account is securely connected. You can now proceed to claim your GERD tokens.
            </div>
          </>
        )}

        {isLogged && !loadingBalance && (
          <button
            className={styles.proceedButton}
            onClick={() => router.push(`/claim-form?address=${address}`)}
          >
            <i className="fas fa-arrow-right me-2"></i>
            Proceed to Claim Form
          </button>
        )}

        {etnIsLogged && etnSub && (
          <button
            className={styles.proceedButton}
            onClick={() => router.push(`/claim-form?address=${etnSub}`)}
          >
            <i className="fas fa-arrow-right me-2"></i>
            Proceed to Claim Form
          </button>
        )}

        {(isLogged || etnIsLogged) && (
          <button
            className={styles.disconnectButton}
            onClick={handleLogout}
            disabled={isLoading || etnIsLoading}
          >
            <i className="fas fa-sign-out-alt me-2"></i>
            Disconnect
          </button>
        )}

        {!isLogged && !etnIsLogged && !displayError && (
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

          <button
            className={styles.loginButton}
            onClick={() => handleLogin("etn")}
            disabled={etnIsLoading}
            style={{ background: '#1a4d2e' }} // ETN Identity brand color
          >
            {etnIsLoading ? (
              <>
                <i className="fas fa-spinner fa-spin me-2"></i>
                Connecting...
              </>
            ) : (
              <>
                <i className="fas fa-id-card me-2"></i>
                Continue with ETN Identity
              </>
            )}
          </button>
        </div>
        )}

        {!isLogged && displayError && (
          <button
            className={styles.loginButton}
            onClick={() => window.location.reload()}
            style={{ marginTop: '10px' }}
          >
            <i className="fas fa-redo me-2"></i>
            Retry
          </button>
        )}

        <div className={styles.footer}>
          <p className={styles.footerText}>
            <i className="fas fa-shield-alt me-2"></i>
            Your credentials are secured with industry-standard authentication
          </p>
        </div>
      </div>
    </div>
  );
}
