'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import CopyButton from '@/components/CopyButton';
import ClaimUpdateModal from '@/components/ClaimUpdateModal';

declare global {
  interface Window {
    Web3: any;
    grecaptcha: any;
  }
}

export default function ClaimForm() {
  const [walletAddress, setWalletAddress] = useState('');
  const [balanceAddress, setBalanceAddress] = useState('');
  const [balance, setBalance] = useState<string | null>(null);
  const [response, setResponse] = useState<{ type: string; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [sessionToken, setSessionToken] = useState('');
  const [web3, setWeb3] = useState<any>(null);
  const [contract, setContract] = useState<any>(null);

  useEffect(() => {
    // Initialize Web3
    if (typeof window !== 'undefined' && window.Web3) {
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
    }
  }, []);

  useEffect(() => {
    fetchSessionToken();
  }, []);

  const fetchSessionToken = async () => {
    try {
      const res = await fetch('https://abay-gerd-backend.onrender.com/auth/session');
      const data = await res.json();
      setSessionToken(data.session_token);
    } catch (err) {
      console.error('Failed to get session token:', err);
    }
  };

  const checkBalance = async () => {
    if (!web3 || !contract) {
      setBalance('Error: Web3 not initialized');
      return;
    }

    if (!web3.utils.isAddress(balanceAddress)) {
      setBalance('Error: Please enter a valid address');
      return;
    }

    try {
      const balanceResult = await contract.methods.balanceOf(balanceAddress).call();
      const formattedBalance = (Number(balanceResult) / 10 ** 2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setBalance(`Balance: ${formattedBalance} GERD`);
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance('Error fetching balance. Please try again.');
    }
  };

  const claimTokens = async () => {
    const recipient = walletAddress.trim();
    const recaptchaToken = window.grecaptcha?.getResponse();

    if (!web3?.utils.isAddress(recipient)) {
      setResponse({ type: 'danger', message: 'Please enter a valid wallet address.' });
      return;
    }

    if (!recaptchaToken) {
      setResponse({ type: 'warning', message: 'Please complete the reCAPTCHA.' });
      return;
    }

    if (!sessionToken) {
      await fetchSessionToken();
      if (!sessionToken) {
        setResponse({ type: 'danger', message: 'Error: Session not initialized. Please wait a few seconds and try again.' });
        return;
      }
    }

    setLoading(true);
    setResponse({ type: 'info', message: 'Checking your location...' });

    try {
      const locResponse = await fetch('https://ipapi.co/json/');
      const locData = await locResponse.json();
      const estimatedAmount = locData.country_code === 'ET' ? 75000 : 10000;

      setResponse({ 
        type: 'info', 
        message: `Detected Country: ${locData.country_name}. Preparing to send approximately ${estimatedAmount} GERD Tokens...` 
      });

      const res = await fetch('https://abay-gerd-backend.onrender.com/send-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient,
          recaptchaToken,
          session_token: sessionToken
        })
      });

      const data = await res.json();
      if (data.status === 'success') {
        setResponse({ 
          type: 'success', 
          message: `Success! Tokens sent. Tx Hash: 0x${data.tx_hash}` 
        });
      } else {
        setResponse({ type: 'danger', message: `Error: ${data.message}` });
      }
    } catch (err: any) {
      setResponse({ type: 'danger', message: `Error: ${err.message}` });
    } finally {
      setLoading(false);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    }
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/web3@1.8.2/dist/web3.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.Web3) {
            const web3Instance = new window.Web3('https://bsc-dataseed.binance.org/');
            setWeb3(web3Instance);
          }
        }}
      />
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
        async
        defer
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-gift me-3"></i>Claim Your GERD Tokens
                </h1>
                <p className="lead fs-5 mb-4 opacity-90">
                  Get your free GERD tokens in seconds. No wallet connection required—just submit your address and receive your tokens.
                </p>
                <button 
                  type="button" 
                  className="btn btn-outline-light btn-lg" 
                  data-bs-toggle="modal" 
                  data-bs-target="#changeModal"
                >
                  <i className="fas fa-bullhorn me-2"></i>See Claim Update
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
                      <h3 className="h5 fw-bold mb-0">No Wallet Connection</h3>
                      <p className="text-muted small mb-0">Privacy and safety first</p>
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
                      <h3 className="h5 fw-bold mb-0">Before You Claim</h3>
                      <p className="text-muted small mb-0">Important preparation steps</p>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Import the GERD contract into your wallet
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check text-success me-2"></i>Use a supported wallet (Trust Wallet, MetaMask, etc.)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="contract-box">
                <p className="mb-2 small text-muted">
                  <i className="fas fa-info-circle me-2"></i>GERD Contract Address (Import this into your wallet):
                </p>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <code className="text-success fw-bold fs-6 text-break" style={{ wordBreak: 'break-all', minWidth: 0 }}>0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c</code>
                  <CopyButton address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c" />
                </div>
              </div>
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
                  <h3 className="h5 fw-bold mb-2">Ethiopia-Based Wallets</h3>
                  <div className="display-6 fw-bold text-danger mb-2">75,000</div>
                  <p className="text-muted mb-0">GERD tokens per wallet</p>
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
                  <h3 className="h5 fw-bold mb-2">Global Wallets</h3>
                  <div className="display-6 fw-bold text-primary mb-2">10,000</div>
                  <p className="text-muted mb-0">GERD tokens per wallet</p>
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
                  <i className="fas fa-wallet text-success me-2"></i>Claim Your Tokens
                </h2>
                <div className="mb-4">
                  <label htmlFor="recipient" className="form-label fw-semibold">Wallet Address:</label>
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
                    className="g-recaptcha d-flex justify-content-center" 
                    data-sitekey="6LdQyRkrAAAAANv5siZlVghMFzQ2AEPIg8501G9P"
                  ></div>
                </div>
                <div className="d-grid">
                  <button 
                    className="btn btn-success btn-lg btn-claim" 
                    onClick={claimTokens}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-gift me-2"></i>Claim Tokens
                      </>
                    )}
                  </button>
                </div>
                {response && (
                  <div className={`mt-4 alert alert-${response.type}`}>
                    <i className={`fas ${
                      response.type === 'success' ? 'fa-check-circle' :
                      response.type === 'danger' ? 'fa-times-circle' :
                      response.type === 'warning' ? 'fa-exclamation-triangle' :
                      'fa-info-circle'
                    } me-2`}></i>
                    {response.message}
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
                    <i className="fas fa-balance-scale text-info me-2"></i>Check Your Balance
                  </h2>
                  <div className="mb-4">
                    <label htmlFor="bwallet-address" className="form-label fw-semibold">Wallet Address:</label>
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
                    >
                      <i className="fas fa-search me-2"></i>Check Balance
                    </button>
                  </div>
                  {balance && (
                    <div className={`mt-4 text-center fw-bold fs-5 ${
                      balance.includes('Error') ? 'text-danger' : 'text-success'
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
              <h2 className="h5 mb-3">
                DISCOVER ABAY GERD TOKEN, THE ETHIOPIAN-BORN CRYPTOCURRENCY EMPOWERING OUR COMMUNITY AND SUPPORTING THE GRAND ETHIOPIAN RENAISSANCE DAM PROJECT.
                JOIN US IN CREATING A BRIGHTER FUTURE! <i className="fas fa-earth-americas text-primary"></i> <i className="fas fa-coins text-warning"></i> #ABAYGERDTOKEN #ETHIOPIA #CRYPTO #GERD
              </h2>
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

