"use client";

import React, { useState } from "react";
import { useWeb3Auth } from "@/lib/Web3AuthContext";
import { useRouter } from "next/navigation";
import styles from "./auth.module.css";

export default function AuthPage() {
  const { login, loading, error, isLogged, address } = useWeb3Auth();
  const router = useRouter();
  const [localError, setLocalError] = useState<string | null>(null);

  // Redirect to dashboard if already logged in
  React.useEffect(() => {
    if (isLogged && address) {
      router.push("/gerd-claim");
    }
  }, [isLogged, address, router]);

  const handleLogin = async (provider: "google" | "facebook") => {
    try {
      setLocalError(null);
      await login(provider);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed. Please try again.";
      setLocalError(message);
    }
  };

  const displayError = error || localError;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>GERD Token Claim</h1>
          <p>Claim your GERD tokens with a simple login</p>
        </div>

        <div className={styles.content}>
          {displayError && (
            <div className={styles.error}>
              <h3>Configuration Required</h3>
              <p>{displayError}</p>
              {displayError.includes("Client ID") && (
                <div className={styles.setupGuide}>
                  <h4>Quick Setup:</h4>
                  <ol>
                    <li>Visit <a href="https://dashboard.web3auth.io" target="_blank" rel="noopener">https://dashboard.web3auth.io</a></li>
                    <li>Create a Web3Auth account</li>
                    <li>Create a new project</li>
                    <li>Copy your Client ID</li>
                    <li>Add to <code>.env.local</code>: <code>NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=your_client_id</code></li>
                    <li>Restart the dev server</li>
                  </ol>
                </div>
              )}
            </div>
          )}

          {!displayError && (
            <>
              <div className={styles.info}>
                <h2>Secure Wallet Creation</h2>
                <ul>
                  <li>✓ No seed phrases to manage</li>
                  <li>✓ No wallet software to install</li>
                  <li>✓ Social login powered by Web3Auth</li>
                  <li>✓ Your keys stay secure and private</li>
                  <li>✓ Works in any browser</li>
                </ul>
              </div>

              <div className={styles.buttonGroup}>
                <button
                  onClick={() => handleLogin("google")}
                  disabled={loading}
                  className={`${styles.button} ${styles.google}`}
                >
                  {loading ? "Logging in..." : "Login with Google"}
                </button>

                <button
                  onClick={() => handleLogin("facebook")}
                  disabled={loading}
                  className={`${styles.button} ${styles.facebook}`}
                >
                  {loading ? "Logging in..." : "Login with Facebook"}
                </button>
              </div>

              <div className={styles.footer}>
                <p>Your wallet is created automatically on first login.</p>
                <p className={styles.disclaimer}>
                  This is a non-custodial wallet. Only you have access to your keys.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
