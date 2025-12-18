'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';

import ClaimUpdateModal from '@/components/ClaimUpdateModal';
import ContractAddress from '@/components/ContractAddress';
import LocalizedText from '@/components/LocalizedText';
import { useTranslations } from 'next-intl';

declare global {
  interface Window {
    Web3: any;
    grecaptcha: any;
  }
}

export default function ClaimForm() {
  const t = useTranslations();
  const [walletAddress, setWalletAddress] = useState('');
  const [balanceAddress, setBalanceAddress] = useState('');
  const [balance, setBalance] = useState<string | null>(null);
  const [response, setResponse] = useState<{ type: string; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [sessionToken, setSessionToken] = useState('');
  const [web3, setWeb3] = useState<any>(null);
  const [contract, setContract] = useState<any>(null);
  const [isWeb3Ready, setIsWeb3Ready] = useState(false);
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const isInitializing = useRef(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  // Utility to load script if absent, or attach load handler if present
  const ensureScriptLoaded = (src: string, onload: () => void) => {
    if (typeof document === 'undefined') return () => { };
    const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
    if (existing) {
      // If already loaded, call onload immediately when possible
      if ((existing as any).loaded || (existing as any).readyState === 'complete') {
        try { onload(); } catch (e) { console.warn(e); }
        return () => { };
      }
      const listener = () => onload();
      existing.addEventListener('load', listener);
      return () => existing.removeEventListener('load', listener);
    }

    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => onload();
    document.head.appendChild(s);
    return () => { /* cannot reliably remove created script without more bookkeeping */ };
  };

  // Initialize Web3 and contract when Web3 library is loaded
  const initializeWeb3 = () => {
    // Use ref to prevent multiple initializations
    if (typeof window !== 'undefined' && window.Web3 && !isInitializing.current && !web3) {
      isInitializing.current = true;
      const web3Instance = new window.Web3('https://bsc-dataseed.binance.org/');
      setWeb3(web3Instance);

      const contractABI = [
        { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
        { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'spender', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' },
        { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, { indexed: true, internalType: 'address', name: 'to', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' },
        { inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
        { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' },
        { inputs: [{ internalType: 'address', name: 'owner', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
        { inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balances', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
        { inputs: [], name: 'decimals', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
        { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
        { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
        { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
        { inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' },
        { inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }
      ];

      const contractAddress = '0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c';
      const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
      setContract(contractInstance);
      setIsWeb3Ready(true);
      isInitializing.current = false; // Reset after successful initialization
    }
  };

  // Watch for Web3 library to become available and initialize
  useEffect(() => {
    // Try to initialize immediately if Web3 is already loaded
    if (typeof window !== 'undefined' && window.Web3 && !web3 && !isInitializing.current) {
      initializeWeb3();
      return;
    }

    // If Web3 is not available yet, poll for it (fallback in case onLoad doesn't fire)
    if (typeof window !== 'undefined' && !window.Web3) {
      const checkInterval = setInterval(() => {
        if (window.Web3 && !web3 && !isInitializing.current) {
          initializeWeb3();
          clearInterval(checkInterval);
        }
      }, 100);

      // Clean up after 10 seconds to avoid infinite polling
      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
      }, 10000);

      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
      };
    }
  }, [web3]);

  // Ensure Web3 and reCAPTCHA scripts are present and initialized on client-side navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web3 script ensure
    const web3Src = 'https://cdn.jsdelivr.net/npm/web3@1.8.2/dist/web3.min.js';
    const web3Cleanup = ensureScriptLoaded(web3Src, () => {
      if (!web3 && window.Web3) {
        initializeWeb3();
      }
    });

    // reCAPTCHA script ensure
    const recaptchaSrc = 'https://www.google.com/recaptcha/api.js';
    const recaptchaCleanup = ensureScriptLoaded(recaptchaSrc, () => {
      try {
        if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
          window.grecaptcha.ready(() => setIsRecaptchaReady(true));
        } else if (window.grecaptcha) {
          setIsRecaptchaReady(true);
        }
      } catch (e) {
        console.warn('grecaptcha.ready call failed in ensureScriptLoaded', e);
      }
    });

    // As a fallback, poll in case script doesn't emit load for some reason
    const pollTimeout = setTimeout(() => {
      clearInterval(pollInterval);
    }, 10000);
    const pollInterval = setInterval(() => {
      if (window.Web3 && !web3) {
        initializeWeb3();
      }
      if (window.grecaptcha && !isRecaptchaReady) {
        try {
          window.grecaptcha.ready(() => setIsRecaptchaReady(true));
        } catch { setIsRecaptchaReady(true); }
      }
    }, 200);

    return () => {
      web3Cleanup();
      recaptchaCleanup();
      clearInterval(pollInterval);
      clearTimeout(pollTimeout);
    };
  }, []);

  // Initialize reCAPTCHA readiness check
  useEffect(() => {
    if (typeof window === 'undefined' || isRecaptchaReady) return;

    const tryInit = () => {
      if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
        try {
          window.grecaptcha.ready(() => {
            setIsRecaptchaReady(true);
          });
          return true;
        } catch (e) {
          console.warn('grecaptcha.ready failed', e);
        }
      }
      return false;
    };

    // Try immediately
    if (tryInit()) return;

    // Poll as a fallback in case the script loads after the component
    const interval = setInterval(() => {
      if (tryInit()) {
        clearInterval(interval);
      }
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRecaptchaReady]);

  useEffect(() => {
    fetchSessionToken();
  }, []);

  // Prefill balance input when the claim wallet address is provided
  useEffect(() => {
    if (!balanceAddress && walletAddress) {
      setBalanceAddress(walletAddress);
    }
  }, [walletAddress]);

  const fetchSessionToken = async (): Promise<string | null> => {
    try {
      const res = await fetch('https://abay-gerd-backend.onrender.com/auth/session');
      if (!res.ok) {
        throw new Error(`Failed to fetch session token: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      const token = data.session_token;
      setSessionToken(token);
      return token;
    } catch (err) {
      console.error('Failed to get session token:', err);
      return null;
    }
  };

  const checkBalance = async () => {
    if (!isWeb3Ready || !web3 || !contract) {
      setBalance(t('claim_form.messages.web3_not_initialized'));
      return;
    }
    // If no explicit balance address is provided, fall back to the wallet address input
    const effectiveAddress = (balanceAddress || walletAddress || '').trim();

    if (!effectiveAddress) {
      setBalance(t('claim_form.messages.enter_wallet_address'));
      return;
    }

    if (!web3.utils.isAddress(effectiveAddress)) {
      setBalance(t('claim_form.messages.invalid_wallet_address'));
      return;
    }

    try {
      const balanceResult = await contract.methods.balanceOf(effectiveAddress).call();
      const formattedBalance = (Number(balanceResult) / 10 ** 2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setBalance(t('claim_form.messages.balance', { amount: formattedBalance }));
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance(t('claim_form.messages.error_fetch_balance'));
    }
  };

  const claimTokens = async () => {
    if (!isWeb3Ready) {
      setResponse({ type: 'danger', message: t('claim_form.messages.wait_web3') });
      return;
    }
    if (!isRecaptchaReady) {
      setResponse({ type: 'warning', message: t('claim_form.messages.wait_recaptcha') });
      return;
    }
    const recipient = walletAddress.trim();
    // Use widget ID if available, otherwise fallback to default (though explicit generic is better)
    const recaptchaToken = typeof recaptchaWidgetId.current === 'number'
      ? window.grecaptcha?.getResponse(recaptchaWidgetId.current)
      : window.grecaptcha?.getResponse();

    if (!web3?.utils.isAddress(recipient)) {
      setResponse({ type: 'danger', message: t('claim_form.messages.invalid_wallet_address') });
      return;
    }

    if (!recaptchaToken) {
      setResponse({ type: 'warning', message: t('claim_form.messages.complete_recaptcha') });
      return;
    }

    let currentSessionToken: string | null = sessionToken;
    if (!currentSessionToken) {
      currentSessionToken = await fetchSessionToken();
      if (!currentSessionToken) {
        setResponse({ type: 'danger', message: t('claim_form.messages.session_not_initialized') });
        return;
      }
    }

    setLoading(true);
    setResponse({ type: 'info', message: 'Checking your location...' });

    try {
      const locResponse = await fetch('https://ipapi.co/json/');
      if (!locResponse.ok) {
        throw new Error(`Failed to fetch location: ${locResponse.status} ${locResponse.statusText}`);
      }
      const locData = await locResponse.json();
      const estimatedAmount = locData.country_code === 'ET' ? 75000 : 10000;

      setResponse({
        type: 'info',
        message: t('claim_form.messages.detected_country', { country: locData.country_name, amount: estimatedAmount })
      });

      const res = await fetch('https://abay-gerd-backend.onrender.com/send-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient,
          recaptchaToken,
          session_token: currentSessionToken! // Non-null assertion: we've already checked it's not null above
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        let errorMessage = `Server error: ${res.status} ${res.statusText}`;
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch {
          // If error response isn't JSON, use the text or default message
          errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const data = await res.json();
      if (data.status === 'success') {
        setResponse({
          type: 'success',
          message: t('claim_form.messages.success_tx', { tx: `0x${data.tx_hash}` })
        });
      } else {
        setResponse({ type: 'danger', message: `Error: ${data.message}` });
      }
    } catch (err: any) {
      const message = err?.message || String(err) || 'Unexpected error occurred';
      console.error('Claim tokens error:', err);
      setResponse({ type: 'danger', message });
    } finally {
      setLoading(false);
      if (window.grecaptcha) {
        if (typeof recaptchaWidgetId.current === 'number') {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        } else {
          window.grecaptcha.reset();
        }
      }
    }
  };

  // Render reCAPTCHA explicitly when ready
  useEffect(() => {
    if (isRecaptchaReady && recaptchaRef.current && window.grecaptcha) {
      // Clean up any existing instance if we can (though difficult with just innerHTML check)
      if (recaptchaRef.current.innerHTML.trim() !== '') {
        return; // Already rendered
      }

      try {
        const id = window.grecaptcha.render(recaptchaRef.current, {
          'sitekey': '6LdQyRkrAAAAANv5siZlVghMFzQ2AEPIg8501G9P',
        });
        recaptchaWidgetId.current = id;
      } catch (e) {
        console.warn('reCAPTCHA render failed:', e);
      }
    }
  }, [isRecaptchaReady]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/web3@1.8.2/dist/web3.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          initializeWeb3();
        }}
      />
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
        async
        defer
        onLoad={() => {
          if (typeof window !== 'undefined' && window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
            try {
              window.grecaptcha.ready(() => setIsRecaptchaReady(true));
            } catch (e) {
              console.warn('grecaptcha.ready failed on onLoad', e);
            }
          }
        }}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-gift me-3"></i>
                  <LocalizedText id="claim_form.hero.title" tag="span" />
                </h1>
                <p className="lead fs-5 mb-4 opacity-90">
                  <LocalizedText id="claim_form.hero.lead" tag="span" />
                </p>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#changeModal"
                >
                  <i className="fas fa-bullhorn me-2"></i>
                  <LocalizedText id="claim_form.see_update" tag="span" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClaimUpdateModal />

      {/* Info Section */}
      <section className="content-section">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card feature-card h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="ms-3">
                      <h3 className="h5 fw-bold mb-0"><LocalizedText id="claim_form.features.no_wallet.title" tag="span" /></h3>
                      <p className="text-muted small mb-0"><LocalizedText id="claim_form.features.no_wallet.subtitle" tag="span" /></p>
                    </div>
                  </div>
                  <p className="text-muted mb-0">
                    We never ask users to connect or sign transactions. Simply submit your wallet address and receive your tokens securely.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card feature-card h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-search"></i>
                    </div>
                    <div className="ms-3">
                      <h3 className="h5 fw-bold mb-0"><LocalizedText id="claim_form.features.before.title" tag="span" /></h3>
                      <p className="text-muted small mb-0"><LocalizedText id="claim_form.features.before.subtitle" tag="span" /></p>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      <LocalizedText id="claim_form.features.before.item1" tag="span" />
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check text-success me-2"></i>
                      <LocalizedText id="claim_form.features.before.item2" tag="span" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <ContractAddress
                address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                label="GERD Contract Address (Import this into your wallet)"
              />
            </div>
          </div>

          {/* Eligibility Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card border-danger h-100">
                <div className="card-body p-4 text-center">
                  <div
                    className="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px', fontSize: '36px' }}
                  >
                    🇪🇹
                  </div>
                  <h3 className="h5 fw-bold mb-2"><LocalizedText id="claim_form.eligibility.ethiopia_title" tag="span" /></h3>
                  <div className="display-6 fw-bold text-danger mb-2"><LocalizedText id="claim_form.eligibility.ethiopia_amount" tag="span" /></div>
                  <p className="text-muted mb-0"><LocalizedText id="claim_form.eligibility.ethiopia_label" tag="span" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-primary h-100">
                <div className="card-body p-4 text-center">
                  <div
                    className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px', fontSize: '36px' }}
                  >
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-2"><LocalizedText id="claim_form.eligibility.global_title" tag="span" /></h3>
                  <div className="display-6 fw-bold text-primary mb-2"><LocalizedText id="claim_form.eligibility.global_amount" tag="span" /></div>
                  <p className="text-muted mb-0"><LocalizedText id="claim_form.eligibility.global_label" tag="span" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Claim Form Section */}
      <section className="content-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="claim-card">
                <h2 className="h3 fw-bold mb-4 text-center">
                  <i className="fas fa-wallet text-success me-2"></i>
                  <LocalizedText id="claim_form.form.title" tag="span" />
                </h2>
                <div className="mb-4">
                  <label htmlFor="recipient" className="form-label fw-semibold"><LocalizedText id="claim_form.form.wallet_label" tag="span" /></label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    id="recipient"
                    placeholder="Enter your GERD wallet address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <div
                    ref={recaptchaRef}
                    className="d-flex justify-content-center"
                  ></div>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-success btn-lg btn-claim"
                    onClick={claimTokens}
                    disabled={!isWeb3Ready || !isRecaptchaReady || loading}
                  >
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        <LocalizedText id="claim_form.form.processing" tag="span" />
                      </>
                    ) : (
                      <>
                        <i className="fas fa-gift me-2"></i>
                        <LocalizedText id="claim_form.form.button" tag="span" />
                      </>
                    )} 
                  </button>
                </div>
                {response && (
                  <div className={`mt-4 alert alert-${response.type}`}>
                    <i className={`fas ${response.type === 'success' ? 'fa-check-circle' :
                      response.type === 'danger' ? 'fa-times-circle' :
                        response.type === 'warning' ? 'fa-exclamation-triangle' :
                          'fa-info-circle'
                      } me-2`}></i>
                    {response.message}
                  </div>
                )}
                {!response && (!isWeb3Ready || !isRecaptchaReady) && (
                  <div className="mt-3 text-center text-muted small">
                    {!isWeb3Ready && <span className="me-2">Initializing Web3...</span>}
                    {!isRecaptchaReady && <span>Initializing reCAPTCHA...</span>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Balance Check Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card feature-card">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-4 text-center">
                    <i className="fas fa-balance-scale text-info me-2"></i>
                    <LocalizedText id="claim_form.balance.title" tag="span" />
                  </h2>
                  <div className="mb-4">
                    <label htmlFor="bwallet-address" className="form-label fw-semibold"><LocalizedText id="claim_form.balance.wallet_label" tag="span" /></label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter wallet address to check balance"
                      id="bwallet-address"
                      value={balanceAddress}
                      onChange={(e) => setBalanceAddress(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-success btn-lg"
                      type="button"
                      onClick={checkBalance}
                      disabled={!isWeb3Ready}
                    >
                      <i className="fas fa-search me-2"></i>
                      <LocalizedText id="claim_form.balance.button" tag="span" />
                    </button>
                  </div>
                  {balance && (
                    <div className={`mt-4 text-center fw-bold fs-5 ${balance.includes('Error') ? 'text-danger' : 'text-success'
                      }`}>
                      {balance.includes('Error') ? (
                        <>
                          <i className="fas fa-exclamation-circle me-2"></i>{balance}
                        </>
                      ) : (
                        <>
                          <i className="fas fa-check-circle me-2"></i>{balance}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-success-subtle py-5 mb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <LocalizedText id="site.promo" tag="h2" className="h5 mb-3" />
            </div>
            <div className="col-md-4 text-center">
              <Image
                src="/image/abay_bluesky.png"
                alt="AbayGERDToken"
                className="img-fluid img-hero"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

