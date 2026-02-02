"use client";

import React, { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useWeb3Auth } from "@/lib/Web3AuthContext";
import { useETNAuth } from "@/lib/ETNAuthContext";
import { Logo } from "@/components/Logo";
import styles from "./auth.module.css";

function AuthPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, logout, isLoading, error, isLogged, address } = useWeb3Auth();
  const { signIn: etnSignIn, logout: etnLogout, isLoading: etnIsLoading, error: etnError, isLogged: etnIsLogged, sub: etnSub, walletAddress: etnWalletAddress, checkSession } = useETNAuth();
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

  // Show balance when logged in (Web3Auth)
  useEffect(() => {
    if (isLogged && address) {
      const checkBalance = async () => {
        setLoadingBalance(true);
        try {
          const balance = await fetchBalance(address);
          if (balance) {
            setBalanceInfo(`${balance} GERD`);
          } else {
            setBalanceInfo('0.00 GERD');
          }
        } catch (err) {
          console.error("Balance check error:", err);
          setBalanceInfo('Unable to fetch');
        } finally {
          setLoadingBalance(false);
        }
      };
      checkBalance();
    } else {
      setBalanceInfo(null);
    }
  }, [isLogged, address]);

  // Show balance when logged in (ETN)
  useEffect(() => {
    if (etnIsLogged && etnWalletAddress) {
      const checkBalance = async () => {
        setLoadingBalance(true);
        try {
          const balance = await fetchBalance(etnWalletAddress);
          if (balance) {
            setBalanceInfo(`${balance} GERD`);
          } else {
            setBalanceInfo('0.00 GERD');
          }
        } catch (err) {
          console.error("Balance check error:", err);
          setBalanceInfo('Unable to fetch');
        } finally {
          setLoadingBalance(false);
        }
      };
      checkBalance();
    }
  }, [etnIsLogged, etnWalletAddress]);

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
            <div style={{
              background: 'linear-gradient(135deg, #84d5a6 0%, #5bc29e 100%)',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{
                      padding: '1rem',
                      borderRight: '1px solid rgba(255,255,255,0.2)',
                      width: '50%',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', opacity: 0.9 }}>
                        <i className="fas fa-wallet me-2"></i>Wallet Connected
                      </div>
                      <div style={{ fontSize: '0.85rem', wordBreak: 'break-all', fontFamily: 'monospace' }}>
                        {address}
                      </div>
                    </td>
                    <td style={{
                      padding: '1rem',
                      textAlign: 'center',
                      width: '50%',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', opacity: 0.9 }}>
                        <i className="fas fa-coins me-2"></i>Balance
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {loadingBalance ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i>
                          </>
                        ) : (
                          balanceInfo || '0.00 GERD'
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {etnIsLogged && etnSub && (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #84d5a6 0%, #5bc29e 100%)',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{
                      padding: '1rem',
                      borderRight: '1px solid rgba(255,255,255,0.2)',
                      width: '50%',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', opacity: 0.9 }}>
                        <i className="fas fa-wallet me-2"></i>Wallet Connected
                      </div>
                      <div style={{ fontSize: '0.85rem', wordBreak: 'break-all', fontFamily: 'monospace' }}>
                        {etnWalletAddress || etnSub}
                      </div>
                    </td>
                    <td style={{
                      padding: '1rem',
                      textAlign: 'center',
                      width: '50%',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', opacity: 0.9 }}>
                        <i className="fas fa-coins me-2"></i>Balance
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {loadingBalance ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i>
                          </>
                        ) : (
                          balanceInfo || '0.00 GERD'
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

        {etnIsLogged && etnWalletAddress && (
          <button
            className={styles.proceedButton}
            onClick={() => router.push(`/claim-form?address=${etnWalletAddress}`)}
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
            onClick={() => handleLogin("etn")}
            disabled={etnIsLoading}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
          >
            {etnIsLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                <span>Connecting...</span>
              </>
            ) : (
              <>
                <Logo size={20} />
                <span>Continue with ETN-ID</span>
              </>
            )}
          </button>

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

export default function AuthPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
      <AuthPageContent />
    </Suspense>
  );
}
