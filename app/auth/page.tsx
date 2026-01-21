"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./auth.module.css";

export default function AuthPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleLogin = async (provider: "google" | "facebook") => {
    try {
      setLoading(true);
      setError(null);
      
      // Redirect to claim page for now
      // TODO: Implement Web3Auth integration
      router.push("/gerd-claim");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed. Please try again.";
      setError(message);
      setLoading(false);
    }
  };

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

        {error && (
          <div className={styles.errorAlert}>
            <i className="fas fa-exclamation-circle me-2"></i>
            {error}
          </div>
        )}

        <div className={styles.loginOptions}>
          <button
            className={styles.loginButton}
            onClick={() => handleLogin("google")}
            disabled={loading}
          >
            <i className="fab fa-google me-2"></i>
            Continue with Google
          </button>

          <button
            className={styles.loginButton}
            onClick={() => handleLogin("facebook")}
            disabled={loading}
          >
            <i className="fab fa-facebook me-2"></i>
            Continue with Facebook
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
