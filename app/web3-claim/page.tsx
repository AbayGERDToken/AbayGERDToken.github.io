"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useWeb3Auth } from "@/lib/Web3AuthContext";
import styles from "./web3-claim.module.css";

export default function Web3ClaimPage() {
  const { isLogged, loading } = useWeb3Auth();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isLogged) {
      router.push("/gerd-claim");
    } else {
      router.push("/auth");
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Claim Your GERD Tokens</h1>
          <p className={styles.subtitle}>
            Simple, secure, and non-custodial wallet creation for everyone
          </p>
          
          <button onClick={handleGetStarted} className={styles.ctaButton}>
            {isLogged ? "Go to Claim" : "Get Started Now"}
          </button>

          <p className={styles.heroCta}>
            {isLogged 
              ? "Your wallet is ready. Click the button above to claim tokens."
              : "No MetaMask. No seed phrases. Just social login."}
          </p>
        </div>

        <div className={styles.illustration}>
          <div className={styles.wallet}>💳</div>
          <div className={styles.lock}>🔐</div>
          <div className={styles.coin}>💰</div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Why Choose This?</h2>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>Super Simple</h3>
            <p>No technical knowledge needed. Login with Google or Facebook and you're done.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔐</div>
            <h3>Completely Secure</h3>
            <p>Non-custodial wallet. Your keys stay in your browser. We never store them.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Works Anywhere</h3>
            <p>No app to download. Works on your phone, tablet, or computer in any browser.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Lightning Fast</h3>
            <p>Built on Binance Smart Chain with low fees and instant transactions.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌍</div>
            <h3>No Restrictions</h3>
            <p>Works globally. Designed for Ethiopian users and everyone else.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💾</div>
            <h3>Install as App</h3>
            <p>Install on your home screen and use like a native app. Works offline too.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Login</h3>
            <p>Sign in with your Google or Facebook account</p>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Wallet Created</h3>
            <p>Your secure wallet is created automatically</p>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Claim Tokens</h3>
            <p>Receive your GERD tokens in seconds</p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className={styles.security}>
        <h2>Your Security is Our Priority</h2>
        
        <div className={styles.securityPoints}>
          <div className={styles.securityPoint}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>Non-Custodial</h4>
              <p>You own your private keys. We can't access them or your funds.</p>
            </div>
          </div>

          <div className={styles.securityPoint}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>No Seed Phrases</h4>
              <p>No complicated recovery phrases to lose or leak. Social login is your recovery.</p>
            </div>
          </div>

          <div className={styles.securityPoint}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>Browser-Based</h4>
              <p>Everything happens in your browser. No servers store your secrets.</p>
            </div>
          </div>

          <div className={styles.securityPoint}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>HTTPS Encrypted</h4>
              <p>All communication is encrypted end-to-end.</p>
            </div>
          </div>

          <div className={styles.securityPoint}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>Web3Auth Secured</h4>
              <p>Powered by Web3Auth, the industry standard for non-custodial wallets.</p>
            </div>
          </div>

          <div className={styles.securityPoint}>
            <span className={styles.checkmark}>✓</span>
            <div>
              <h4>Open Source</h4>
              <p>No hidden code. Everything is verifiable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        
        <div className={styles.faqList}>
          <details className={styles.faqItem}>
            <summary>Do I need MetaMask?</summary>
            <p>
              No! This app doesn't require MetaMask. Everything works in your browser with social login.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>What if I lose my phone?</summary>
            <p>
              Your account is tied to your Google or Facebook login. Just log back in with the same account on any device.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Is it safe for non-technical users?</summary>
            <p>
              Absolutely! This app is designed specifically for non-technical users. No seed phrases, no complex setup. Just login and claim.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Can you access my funds?</summary>
            <p>
              No. This is a non-custodial wallet. You own your private keys. We have no ability to access or control your funds.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Works in my country?</summary>
            <p>
              This app works globally, including Ethiopia and other African countries. As long as you have internet, you can use it.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>How much does it cost?</summary>
            <p>
              It's completely free to claim. You might pay a small gas fee on Binance Smart Chain (usually less than 1 cent).
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Claim Your Tokens?</h2>
        <p>Join thousands of users claiming their GERD tokens</p>
        <button onClick={handleGetStarted} className={styles.ctaButtonLarge}>
          {isLogged ? "Go to Claim Now" : "Start Your Journey"}
        </button>
      </section>
    </div>
  );
}
