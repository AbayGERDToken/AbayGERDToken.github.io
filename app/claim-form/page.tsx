'use client';

import { useState, useEffect, useRef, Suspense, useCallback } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import ContractAddress from '@/components/ContractAddress';
import { useWeb3Auth } from '@/lib/Web3AuthContext';
import { useETNAuth } from '@/lib/ETNAuthContext';

declare global {
  interface InjectedEthereumProvider {
    isMetaMask?: boolean;
    isCoinbaseWallet?: boolean;
    isBraveWallet?: boolean;
    isTrust?: boolean;
    isRabby?: boolean;
    isOkxWallet?: boolean;
    providers?: InjectedEthereumProvider[];
    request: (args: { method: string; params?: any[] }) => Promise<any>;
  }

  interface Window {
    Web3: any;
    grecaptcha: any;
    ethereum?: InjectedEthereumProvider;
  }
}

type WalletOption = {
  id: string;
  label: string;
  provider: InjectedEthereumProvider;
};

function ClaimFormContent() {
  const BACKEND_URL = 'https://abay-gerd-backend.onrender.com';
  const { isLogged: isWeb3AuthLogged, address: web3AuthAddress, logout: logoutWeb3Auth, getIdToken: getWeb3AuthIdToken, provider: web3AuthProvider } = useWeb3Auth();
  const { isLogged: isETNLogged, walletAddress: etnWalletAddress, logout: logoutETN } = useETNAuth();
  const searchParams = useSearchParams();
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
  const web3Ref = useRef<any>(null);
  const recaptchaReadyRef = useRef(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);
  const [isFromAuth, setIsFromAuth] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  const [captchaToken, setCaptchaToken] = useState('');
  const [showWeb3AuthModal, setShowWeb3AuthModal] = useState(false);
  const claimFormRef = useRef<HTMLDivElement>(null);
  const captchaTokenRef = useRef('');
  const [walletOptions, setWalletOptions] = useState<WalletOption[]>([]);
  const [selectedWalletId, setSelectedWalletId] = useState('');
  const selectedWalletLabel = walletOptions.find(option => option.id === selectedWalletId)?.label || '';
  const authenticatedWalletAddress = (isETNLogged && etnWalletAddress)
    ? etnWalletAddress
    : (isWeb3AuthLogged && web3AuthAddress)
      ? web3AuthAddress
      : '';
  const authenticatedProvider = (isETNLogged && etnWalletAddress)
    ? 'etn'
    : (isWeb3AuthLogged && web3AuthAddress)
      ? 'web3auth'
      : '';
  const isAuthenticatedClaimMode = Boolean(authenticatedWalletAddress);

  const getProviderLabel = (provider: InjectedEthereumProvider): string => {
    if (provider.isCoinbaseWallet) return 'Base / Coinbase Wallet';
    if (provider.isMetaMask) return 'MetaMask';
    if (provider.isTrust) return 'Trust Wallet';
    if (provider.isRabby) return 'Rabby Wallet';
    if (provider.isOkxWallet) return 'OKX Wallet';
    if (provider.isBraveWallet) return 'Brave Wallet';
    return 'Injected Wallet';
  };

  const detectWalletProviders = useCallback((): WalletOption[] => {
    if (typeof window === 'undefined' || !window.ethereum) return [];

    const rootProvider = window.ethereum;
    const providerList = Array.isArray(rootProvider.providers) && rootProvider.providers.length > 0
      ? rootProvider.providers
      : [rootProvider];

    const options: WalletOption[] = [];
    const seen = new Set<string>();

    providerList.forEach((provider, index) => {
      if (!provider || typeof provider.request !== 'function') return;
      const label = getProviderLabel(provider);
      const id = `${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
      if (seen.has(id)) return;
      seen.add(id);
      options.push({ id, label, provider });
    });

    return options;
  }, []);

  const getSelectedWalletProvider = (): InjectedEthereumProvider | null => {
    if (walletOptions.length === 0) return null;
    const selected = walletOptions.find(option => option.id === selectedWalletId);
    return selected?.provider || walletOptions[0].provider || null;
  };

  const handleDisconnectForDirectClaim = async () => {
    try {
      if (isETNLogged) {
        await logoutETN();
      }
      if (isWeb3AuthLogged) {
        await logoutWeb3Auth();
      }
      setResponse({ type: 'info', message: 'Disconnected. You can now use direct wallet claim with signature verification.' });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to disconnect authentication session.';
      setResponse({ type: 'danger', message });
    }
  };

  useEffect(() => {
    web3Ref.current = web3;
  }, [web3]);

  useEffect(() => {
    recaptchaReadyRef.current = isRecaptchaReady;
  }, [isRecaptchaReady]);

  useEffect(() => {
    captchaTokenRef.current = captchaToken;
  }, [captchaToken]);

  const invalidateCaptcha = useCallback(() => {
    setCaptchaToken('');
    if (typeof window === 'undefined' || !window.grecaptcha) return;

    try {
      if (typeof recaptchaWidgetId.current === 'number') {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      } else {
        window.grecaptcha.reset();
      }
    } catch (e) {
      console.warn('Captcha reset failed during invalidation:', e);
      recaptchaWidgetId.current = null;
      setCaptchaResetTrigger(prev => prev + 1);
    }
  }, []);

  // Populate wallet address from URL parameter and detect auth navigation
  useEffect(() => {
    const addressFromUrl = searchParams.get('address');
    if (addressFromUrl && !walletAddress) {
      setWalletAddress(addressFromUrl);
      setBalanceAddress(addressFromUrl);
      // Mark that this is a navigation from auth page
      setIsFromAuth(true);
    }
  }, [searchParams, walletAddress]);

  useEffect(() => {
    if (isAuthenticatedClaimMode && authenticatedWalletAddress) {
      setWalletAddress(authenticatedWalletAddress);
      setBalanceAddress(authenticatedWalletAddress);
    }
  }, [isAuthenticatedClaimMode, authenticatedWalletAddress]);

  useEffect(() => {
    if (isAuthenticatedClaimMode) {
      setWalletOptions([]);
      setSelectedWalletId('');
      return;
    }

    const refreshProviders = () => {
      const options = detectWalletProviders();
      setWalletOptions(options);
      if (options.length === 0) {
        setSelectedWalletId('');
        return;
      }
      setSelectedWalletId((current) => {
        const exists = options.some(option => option.id === current);
        return exists ? current : options[0].id;
      });
    };

    refreshProviders();
    const interval = setInterval(refreshProviders, 1500);
    return () => clearInterval(interval);
  }, [isAuthenticatedClaimMode, detectWalletProviders]);

  // Utility to load script if absent, or attach load handler if present
  const ensureScriptLoaded = useCallback((src: string, onload: () => void) => {
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
  }, []);

  // Initialize Web3 and contract when Web3 library is loaded
  const initializeWeb3 = useCallback(() => {
    // Use ref to prevent multiple initializations
    if (typeof window !== 'undefined' && window.Web3 && !isInitializing.current && !web3Ref.current) {
      isInitializing.current = true;
      const web3Instance = new window.Web3('https://bsc-dataseed.binance.org/');
      web3Ref.current = web3Instance;
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
  }, []);

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
  }, [web3, initializeWeb3]);

  // Ensure Web3 and reCAPTCHA scripts are present and initialized on client-side navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Web3 script ensure
    const web3Src = 'https://cdn.jsdelivr.net/npm/web3@1.8.2/dist/web3.min.js';
    const web3Cleanup = ensureScriptLoaded(web3Src, () => {
      if (!web3Ref.current && window.Web3) {
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
      if (window.Web3 && !web3Ref.current) {
        initializeWeb3();
      }
      if (window.grecaptcha && !recaptchaReadyRef.current) {
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
  }, [ensureScriptLoaded, initializeWeb3]);

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

  // Force captcha re-initialization after Web3Auth navigation
  useEffect(() => {
    if (isFromAuth && isRecaptchaReady) {
      // Add delay to let Web3Auth scripts settle
      const timer = setTimeout(() => {
        invalidateCaptcha();
        setIsFromAuth(false); // Reset flag after handling
      }, 500); // 500ms delay to let Web3Auth settle

      return () => clearTimeout(timer);
    }
  }, [isFromAuth, isRecaptchaReady, invalidateCaptcha]);

  // Scroll to claim form when redirected from auth page
  useEffect(() => {
    if (isFromAuth && claimFormRef.current) {
      // Add a small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        claimFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isFromAuth]);

  // Prefill balance input when the claim wallet address is provided
  useEffect(() => {
    if (!balanceAddress && walletAddress) {
      setBalanceAddress(walletAddress);
    }
  }, [balanceAddress, walletAddress]);

  const fetchSessionToken = async (): Promise<string | null> => {
    try {
      const res = await fetch(`${BACKEND_URL}/auth/session`, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store'
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch session token: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      const token = typeof data?.session_token === 'string' ? data.session_token.trim() : '';
      if (!token) {
        throw new Error('Session token response was empty.');
      }
      setSessionToken(token);
      return token;
    } catch (err) {
      console.error('Failed to get session token:', err);
      return null;
    }
  };

  const checkBalance = async () => {
    if (!isWeb3Ready || !web3 || !contract) {
      setBalance('Error: Web3 not initialized. Please wait for the page to finish loading.');
      return;
    }
    // If no explicit balance address is provided, fall back to the wallet address input
    const effectiveAddress = (balanceAddress || walletAddress || '').trim();

    if (!effectiveAddress) {
      setBalance('Error: Please enter a wallet address to check');
      return;
    }

    if (!web3.utils.isAddress(effectiveAddress)) {
      setBalance('Error: Please enter a valid wallet address');
      return;
    }

    try {
      const balanceResult = await contract.methods.balanceOf(effectiveAddress).call();
      const formattedBalance = (Number(balanceResult) / 10 ** 2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setBalance(`Balance: ${formattedBalance} GERD`);
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance('Error fetching balance. Please try again.');
    }
  };

  const claimTokens = async () => {
    if (!isWeb3Ready) {
      setResponse({ type: 'danger', message: 'Please wait for Web3 to finish initializing.' });
      return;
    }
    if (!isRecaptchaReady) {
      setResponse({ type: 'warning', message: 'Please wait for reCAPTCHA to finish initializing.' });
      return;
    }
    const recipient = (isAuthenticatedClaimMode ? authenticatedWalletAddress : walletAddress).trim();
    const recaptchaToken = captchaTokenRef.current.trim();

    if (!web3?.utils.isAddress(recipient)) {
      setResponse({ type: 'danger', message: 'Please enter a valid wallet address.' });
      return;
    }

    if (!recaptchaToken) {
      setResponse({ type: 'warning', message: 'Please complete the reCAPTCHA.' });
      return;
    }

    invalidateCaptcha();

    let currentSessionToken: string | null = sessionToken;
    if (!currentSessionToken) {
      currentSessionToken = await fetchSessionToken();
      if (!currentSessionToken) {
        setResponse({ type: 'danger', message: 'Error: Session not initialized. Please wait a few seconds and try again.' });
        return;
      }
    }

    let claimExtras: Record<string, any> = {};
    if (isAuthenticatedClaimMode) {
      let web3AuthIdToken = '';
      let web3AuthNonceId = '';
      let web3AuthSignature = '';
      if (authenticatedProvider === 'web3auth') {
        web3AuthIdToken = (await getWeb3AuthIdToken()) || '';

        if (!web3AuthIdToken) {
          if (!web3AuthProvider || typeof (web3AuthProvider as any).request !== 'function') {
            setResponse({ type: 'danger', message: 'Web3Auth session verification failed. Please log out and log in again.' });
            return;
          }

          setResponse({ type: 'info', message: 'Preparing secure Web3Auth ownership challenge...' });
          const challengeResponse = await fetch(`${BACKEND_URL}/claim/challenge`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipient })
          });

          const challengeBody = await challengeResponse.json().catch(() => null);
          if (!challengeResponse.ok || challengeBody?.status !== 'success') {
            const message = challengeBody?.message || 'Failed to create Web3Auth challenge.';
            setResponse({ type: 'danger', message });
            return;
          }

          setResponse({ type: 'info', message: 'Confirming wallet ownership with your Web3Auth account...' });
          web3AuthSignature = await (web3AuthProvider as any).request({
            method: 'personal_sign',
            params: [challengeBody.message, recipient],
          });
          web3AuthNonceId = challengeBody.nonce_id;
        }
      }

      claimExtras = {
        auth_provider: authenticatedProvider,
        authenticated_wallet: recipient,
        web3auth_id_token: web3AuthIdToken,
        nonce_id: web3AuthNonceId,
        signature: web3AuthSignature,
      };
    } else {
      const directProvider = getSelectedWalletProvider();
      if (!directProvider || typeof directProvider.request !== 'function') {
        setResponse({
          type: 'danger',
          message: 'Direct wallet claim requires a browser wallet extension. Please install/open Base Wallet, MetaMask, or another compatible wallet and try again.'
        });
        return;
      }

      setResponse({ type: 'info', message: 'Preparing wallet ownership challenge...' });
      const challengeResponse = await fetch(`${BACKEND_URL}/claim/challenge`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient })
      });

      const challengeBody = await challengeResponse.json().catch(() => null);
      if (!challengeResponse.ok || challengeBody?.status !== 'success') {
        const message = challengeBody?.message || 'Failed to create wallet signature challenge.';
        setResponse({ type: 'danger', message });
        return;
      }

      const accounts = await directProvider.request({ method: 'eth_requestAccounts' });
      const signer = Array.isArray(accounts) && accounts.length > 0 ? String(accounts[0]) : '';
      if (!signer || !web3?.utils.isAddress(signer)) {
        setResponse({ type: 'danger', message: 'No wallet account available for signature. Please unlock your wallet and retry.' });
        return;
      }

      const signerChecksum = web3.utils.toChecksumAddress(signer);
      const recipientChecksum = web3.utils.toChecksumAddress(recipient);
      if (signerChecksum !== recipientChecksum) {
        setResponse({
          type: 'warning',
          message: 'Wallet mismatch: switch your wallet account to match the entered recipient address, then try again.'
        });
        return;
      }

      setResponse({ type: 'info', message: 'Please approve the wallet signature request to verify ownership...' });
      const signature = await directProvider.request({
        method: 'personal_sign',
        params: [challengeBody.message, signerChecksum],
      });

      claimExtras = {
        nonce_id: challengeBody.nonce_id,
        signature,
      };
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
        message: `Detected Country: ${locData.country_name}. Preparing to send approximately ${estimatedAmount} GERD Tokens...`
      });

      const sendClaim = async (token: string) => {
        const response = await fetch(`${BACKEND_URL}/send-token`, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            recipient,
            recaptchaToken,
            session_token: token,
            ...claimExtras,
          })
        });

        const bodyText = await response.text();
        let parsedBody: any = null;
        try {
          parsedBody = bodyText ? JSON.parse(bodyText) : null;
        } catch {
          parsedBody = null;
        }

        return { response, bodyText, parsedBody };
      };

      let claimResult = await sendClaim(currentSessionToken);
      const firstErrorMessage = claimResult.parsedBody?.message || claimResult.bodyText || '';

      if (!claimResult.response.ok && /missing or invalid session token/i.test(firstErrorMessage)) {
        const refreshedToken = await fetchSessionToken();
        if (!refreshedToken) {
          throw new Error('Session expired. Please wait a few seconds and try again.');
        }
        currentSessionToken = refreshedToken;
        claimResult = await sendClaim(refreshedToken);
      }

      if (!claimResult.response.ok) {
        const fallbackError = `Server error: ${claimResult.response.status} ${claimResult.response.statusText}`;
        const errorMessage = claimResult.parsedBody?.message || claimResult.bodyText || fallbackError;
        throw new Error(errorMessage);
      }

      const data = claimResult.parsedBody;
      if (!data) {
        throw new Error('Server returned an empty response. Please try again.');
      }
      if (data.status === 'success') {
        setResponse({
          type: 'success',
          message: `Success! Tokens sent. Tx Hash: 0x${data.tx_hash}`
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
      invalidateCaptcha();
    }
  };

  // Render reCAPTCHA explicitly when ready
  useEffect(() => {
    if (isRecaptchaReady && recaptchaRef.current && window.grecaptcha) {
      // Clean up existing widget if present
      if (recaptchaWidgetId.current !== null) {
        try {
          // Reset existing widget instead of creating new one
          window.grecaptcha.reset(recaptchaWidgetId.current);
          return;
        } catch (e) {
          // If reset fails, widget might not exist, proceed to create new one
          console.warn('Captcha reset failed, creating new widget:', e);
          recaptchaWidgetId.current = null;
        }
      }

      // Check if container already has content (widget might be rendered)
      if (recaptchaRef.current.innerHTML.trim() !== '') {
        // Try to find and use existing widget
        try {
          // Clear container and re-render
          recaptchaRef.current.innerHTML = '';
        } catch (e) {
          console.warn('Failed to clear captcha container:', e);
        }
      }

      try {
        const id = window.grecaptcha.render(recaptchaRef.current, {
          'sitekey': '6LdQyRkrAAAAANv5siZlVghMFzQ2AEPIg8501G9P',
          'callback': (token: string) => {
            setCaptchaToken(token || '');
          },
          'expired-callback': () => {
            setCaptchaToken('');
          },
          'error-callback': () => {
            setCaptchaToken('');
          },
        });
        recaptchaWidgetId.current = id;
        console.log('reCAPTCHA widget rendered successfully, ID:', id);
      } catch (e) {
        console.warn('reCAPTCHA render failed:', e);
      }
    }

    // Cleanup on unmount
    return () => {
      if (recaptchaWidgetId.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, [isRecaptchaReady, captchaResetTrigger]);

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
                  <i className="fas fa-gift me-3"></i>Claim Your GERD Tokens
                </h1>
                <p className="lead fs-5 mb-4 opacity-90">
                  Get your free GERD tokens in seconds. No wallet connection required—just submit your address and receive your tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    For direct wallet claims, we request a one-time wallet signature to prove ownership. If you use Built-in Login, signature is not required.
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
                      <i className="fas fa-check text-success me-2"></i>Use a supported wallet (Trust Wallet, MetaMask, Base Wallet, etc.)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="row mb-3">
            <div className="col-lg-8 mx-auto">
              <ContractAddress
                address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                label="GERD Contract Address (Import this into your wallet)"
              />
            </div>
          </div>
        </div>
      </section>

    {/* <div className="section-divider"></div> */}

      {/* Built-in Login Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-info h-100">
                <div className="card-body p-5 text-center">
                  <div
                    className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px', fontSize: '36px' }}
                  >
                    <i className="fas fa-user-plus"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Don&apos;t Have a Wallet?</h3>
                  <p className="text-muted mb-4">
                    If you don&apos;t have an existing wallet and would like to create one automatically using <a href="https://account.etnecosystem.org/" target="_blank" rel="noopener noreferrer">ETN Identity</a>, Google, or email, click on Built-in Login.
                  </p>
                  <div className="d-flex gap-2 justify-content-center mb-3 flex-wrap">
                    <a href="/auth/" className="btn btn-info btn-lg">
                      <i className="fas fa-sign-in-alt me-2"></i>Built-in Login
                    </a>
                    <button
                      className="btn btn-outline-info btn-lg"
                      onClick={() => setShowWeb3AuthModal(true)}
                      title="Learn how Web3Auth works"
                    >
                      <i className="fas fa-circle-question me-2"></i>How it works?
                    </button>
                  </div>
                  <p className="text-muted mt-4 mb-0">
                    Otherwise, paste your wallet address below and click on &quot;Claim Tokens&quot; to receive your GERD tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web3Auth Explanation Modal */}
      {showWeb3AuthModal && (
        <div
          className="modal fade show"
          style={{ display: 'block' }}
          tabIndex={-1}
          aria-labelledby="web3AuthModalLabel"
          aria-hidden="false"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowWeb3AuthModal(false);
            }
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header border-bottom-0 pb-0">
                <h5 className="modal-title" id="web3AuthModalLabel">
                  <i className="fas fa-key text-primary me-2"></i>How Web3Auth Works
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowWeb3AuthModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body pt-0">
                <div className="mb-4">
                  <h6 className="fw-bold text-primary mb-2">What&apos;s the Tech?</h6>
                  <p className="text-muted">
                    Web3Auth uses social login (Google, X, Email, Phone OTP, Discord, etc.) to prove your identity, then securely reconstructs a crypto private key using Web3Auth&apos;s key infrastructure (often described as MPC/threshold key reconstruction). Your wallet address is derived from that private key.
                  </p>
                  <p className="text-muted mb-0">
                    <i className="fas fa-check-circle text-success me-2"></i><strong>This makes it easy for everyone, even first-time users, to safely claim GERD tokens.</strong>
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold text-primary mb-3">Step-by-Step Process</h6>
                  <div className="timeline">
                    <div className="timeline-item mb-3">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: '36px', height: '36px', fontSize: '16px' }}
                        >
                          1
                        </div>
                        <div className="ms-3">
                          <p className="mb-0"><strong>Choose Login Method</strong></p>
                          <p className="text-muted small mb-0">Pick from Google, Email, Phone OTP, X, Discord, etc.</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item mb-3">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: '36px', height: '36px', fontSize: '16px' }}
                        >
                          2
                        </div>
                        <div className="ms-3">
                          <p className="mb-0"><strong>Complete Login</strong></p>
                          <p className="text-muted small mb-0">Follow the normal login popup or OTP process.</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item mb-3">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: '36px', height: '36px', fontSize: '16px' }}
                        >
                          3
                        </div>
                        <div className="ms-3">
                          <p className="mb-0"><strong>Get Auth Token</strong></p>
                          <p className="text-muted small mb-0">Web3Auth returns a token proving you logged in successfully.</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item mb-3">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: '36px', height: '36px', fontSize: '16px' }}
                        >
                          4
                        </div>
                        <div className="ms-3">
                          <p className="mb-0"><strong>Wallet Key Created</strong></p>
                          <p className="text-muted small mb-0">Web3Auth securely creates or restores your wallet key using the auth proof (happens behind the scenes).</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item mb-3">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: '36px', height: '36px', fontSize: '16px' }}
                        >
                          5
                        </div>
                        <div className="ms-3">
                          <p className="mb-0"><strong>Get Wallet Address</strong></p>
                          <p className="text-muted small mb-0">Our app requests your public wallet address (example: 0x...) from Web3Auth.</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: '36px', height: '36px', fontSize: '16px' }}
                        >
                          6
                        </div>
                        <div className="ms-3">
                          <p className="mb-0"><strong>Claim GERD Tokens</strong></p>
                          <p className="text-muted small mb-0">Our app uses that address in the GERD claim flow.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="alert alert-info mb-3">
                  <i className="fas fa-lightbulb me-2"></i>
                  <strong>Why the same login works every time:</strong> The same Google/email/phone login can bring you back to the same wallet address because the same identity always → same wallet key restored.
                </div>

                <div className="alert alert-success mb-0">
                  <i className="fas fa-arrow-right text-success me-2"></i>
                  <strong>Future Options:</strong> In the future, you can export your key or transfer your GERD tokens to other wallets when ready. Your Web3Auth wallet gives you full control and flexibility.
                </div>
              </div>
              <div className="modal-footer border-top-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowWeb3AuthModal(false)}
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showWeb3AuthModal && <div className="modal-backdrop fade show"></div>}

      <div className="section-divider"></div>

      {/* Unified Claim & Check Balance Section */}
      <section className="content-section bg-light" ref={claimFormRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="claim-card">
                <h2 className="h3 fw-bold mb-1 text-center">
                  <i className="fas fa-wallet text-success me-2"></i>Claim & Check Your Tokens
                </h2>
                <p className="text-center text-muted mb-4">Enter your wallet address to claim tokens and check your balance</p>

                {isAuthenticatedClaimMode && (
                  <div className="alert alert-info mb-4">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div>
                        <strong>Authenticated claim mode active</strong>
                        <div className="small mt-1">
                          Your claim wallet is locked to your logged-in {authenticatedProvider === 'etn' ? 'ETN' : 'Web3Auth'} account address.
                          Disconnect your auth session to use direct wallet claim.
                        </div>
                      </div>
                      <button className="btn btn-outline-secondary btn-sm" onClick={handleDisconnectForDirectClaim}>
                        Disconnect to use direct claim
                      </button>
                    </div>
                  </div>
                )}

                {/* Wallet Address Input */}
                <div className="mb-4">
                  <label htmlFor="wallet-address" className="form-label fw-semibold">Wallet Address:</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    id="wallet-address"
                    placeholder="Enter your GERD wallet address"
                    value={walletAddress}
                    onChange={(e) => {
                      const addr = e.target.value;
                      setWalletAddress(addr);
                      setBalanceAddress(addr); // Keep both in sync
                      invalidateCaptcha();
                    }}
                    disabled={isAuthenticatedClaimMode}
                  />
                </div>

                {!isAuthenticatedClaimMode && (
                  <div className="mb-4">
                    <label htmlFor="wallet-provider" className="form-label fw-semibold">Signing Wallet:</label>
                    {walletOptions.length > 0 ? (
                      <select
                        id="wallet-provider"
                        className="form-select"
                        value={selectedWalletId}
                        onChange={(e) => setSelectedWalletId(e.target.value)}
                      >
                        {walletOptions.map((option) => (
                          <option key={option.id} value={option.id}>{option.label}</option>
                        ))}
                      </select>
                    ) : (
                      <div className="alert alert-warning mb-0 py-2">
                        No wallet extension detected. Install/open Base Wallet, MetaMask, or another compatible wallet.
                      </div>
                    )}
                    <div className="form-text">
                      Select the wallet extension you want to use for signature verification.
                    </div>
                  </div>
                )}

                {/* reCAPTCHA */}
                <div className="mb-4">
                  <div
                    ref={recaptchaRef}
                    className="d-flex justify-content-center"
                  ></div>
                </div>

                {!isAuthenticatedClaimMode && selectedWalletLabel && (
                  <div className="mb-3 text-center">
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">
                      Selected signer: {selectedWalletLabel}
                    </span>
                  </div>
                )}

                {/* Claim Button */}
                <div className="d-grid">
                  <button
                    className="btn btn-success btn-lg btn-claim"
                    onClick={claimTokens}
                    disabled={!isWeb3Ready || !isRecaptchaReady || !captchaToken || loading}
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

                {/* Quick Balance Check Button */}
                <div className="mt-4">
                  <button
                    className="btn btn-outline-info btn-lg w-100"
                    type="button"
                    onClick={checkBalance}
                    disabled={!isWeb3Ready}
                  >
                    <i className="fas fa-search me-2"></i>Check Balance
                  </button>
                  {balance && (
                    <div className={`mt-3 text-center fw-bold fs-6 p-3 rounded ${balance.includes('Error') ? 'bg-danger-subtle text-danger' : 'bg-success-subtle text-success'
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

                {/* Response Messages */}
                {response && (
                  <div className={`mt-4 alert alert-${response.type}`}>
                    <i className={`fas ${response.type === 'success' ? 'fa-check-circle' :
                      response.type === 'danger' ? 'fa-times-circle' :
                        response.type === 'warning' ? 'fa-exclamation-triangle' :
                          'fa-info-circle'
                      } me-2`}></i>
                    {response.type === 'success' && response.message.includes('Tx Hash: 0x') ? (
                      <>
                        {`Success! Tokens sent. Tx Hash: `}
                        <a
                          href={`https://bscscan.com/tx/${response.message.split('Tx Hash: ')[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fw-bold text-decoration-none"
                        >
                          {response.message.split('Tx Hash: ')[1]}
                        </a>
                      </>
                    ) : (
                      response.message
                    )}
                  </div>
                )}

                {/* Loading Status */}
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

      {/* Eligibility Cards */}
      <section className="content-section">
        <div className="container">
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

      <section className="bg-success-subtle py-5 mb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="h5 mb-3">
                DISCOVER ABAY GERD TOKEN, THE ETHIOPIAN-BORN DIGITAL ASSET EMPOWERING OUR COMMUNITY.
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

export default function ClaimForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClaimFormContent />
    </Suspense>
  );
}
