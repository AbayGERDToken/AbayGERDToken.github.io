'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CONTRACT_ADDRESS = '0xC3C2b095C3aA55ACecc7fBA44C6B9D3f56dC43Da';
const GERD_TOKEN_ADDRESS = '0x85a4850d0c2bdd6202c919c481bf0f186222fa89';
const TESTNET_RPC = 'https://data-seed-prebsc-1-s1.binance.org:8545/';

interface WalletBalance {
  name: string;
  address: string;
  balance: string | null;
  loading: boolean;
}

const WALLETS = [
  { name: 'Airdrop Wallet', address: '0x87CC9e804B4A840297b18536D5d0E7A4835B0e3c' },
  { name: 'Staking Wallet', address: '0x3B84a366a2f25BbB48f34b2b8D587c02237E6a13' },
  { name: 'Liquidity Wallet', address: '0xdA96DBeDD6eF3f4f2b503565A7c6a5a65fbabf17' },
  { name: 'Vesting Contract', address: '0xC3C2b095C3aA55ACecc7fBA44C6B9D3f56dC43Da' },
  { name: 'GERD Test Wallet', address: '0xd84DB57e0d89cF6487b426e6BBbAb235b1139445' },
];

interface ReleaseStatus {
  value: boolean;
  label: string;
}

interface ReleaseHistoryItem {
  hasRelease: boolean;
  releaseDate?: string;
}

export default function TestnetVestingDashboard() {
  const [releaseCountdown, setReleaseCountdown] = useState<string>('Calculating...');
  const [canRelease, setCanRelease] = useState<ReleaseStatus>({ value: false, label: 'Loading...' });
  const [lastRelease, setLastRelease] = useState<string>('Loading...');
  const [isWednesday, setIsWednesday] = useState<ReleaseStatus>({ value: false, label: 'Loading...' });
  const [nextReleaseDate, setNextReleaseDate] = useState<string>('Loading...');
  const [releaseHistory, setReleaseHistory] = useState<ReleaseHistoryItem>({ hasRelease: false });
  const [walletBalances, setWalletBalances] = useState<WalletBalance[]>(
    WALLETS.map(w => ({ ...w, balance: null, loading: true }))
  );

  const getNextWednesdayTimestamp = (fromTimestamp: number): number => {
    const SECONDS_IN_DAY = 86400;
    const day = Math.floor(fromTimestamp / SECONDS_IN_DAY + 4) % 7;
    const daysUntilNextWednesday = (7 + 3 - day) % 7 || 7;
    return (Math.floor(fromTimestamp / SECONDS_IN_DAY) + daysUntilNextWednesday) * SECONDS_IN_DAY;
  };

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const Web3 = (await import('web3')).default;
        const web3 = new Web3(TESTNET_RPC);
        
        const contractABI = [
          {
            inputs: [],
            name: 'lastReleaseTime',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
          },
        ];
        
        const contract = new web3.eth.Contract(contractABI as any, CONTRACT_ADDRESS);
        const lastRelease = await contract.methods.lastReleaseTime().call();
        const isNeverReleased = String(lastRelease) === '0' || Number(lastRelease) === 0;
        const now = Math.floor(Date.now() / 1000);

        setLastRelease(
          isNeverReleased
            ? 'No token release has occurred yet'
            : new Date(Number(lastRelease) * 1000).toUTCString()
        );

        const jsDay = new Date().getUTCDay();
        const isWed = jsDay === 3;
        setIsWednesday({
          value: isWed,
          label: isWed ? 'Yes' : 'No'
        });

        const nextReleaseTime = isNeverReleased
          ? getNextWednesdayTimestamp(now)
          : Number(lastRelease) + 7 * 86400;
        setNextReleaseDate(new Date(nextReleaseTime * 1000).toUTCString());

        // Countdown
        const secondsLeft = nextReleaseTime - now;
        const days = Math.floor(secondsLeft / 86400);
        const hours = Math.floor((secondsLeft % 86400) / 3600);
        const minutes = Math.floor((secondsLeft % 3600) / 60);
        setReleaseCountdown(
          secondsLeft > 0 ? `${days}d ${hours}h ${minutes}m` : 'Ready to release'
        );

        // Can Release
        const releaseReady = now >= nextReleaseTime && isWed;
        setCanRelease({
          value: releaseReady,
          label: releaseReady ? 'Yes' : 'No'
        });

        // Release History
        if (isNeverReleased) {
          setReleaseHistory({ hasRelease: false });
        } else {
          setReleaseHistory({
            hasRelease: true,
            releaseDate: new Date(Number(lastRelease) * 1000).toUTCString()
          });
        }
      } catch (err) {
        console.error('Error loading dashboard:', err);
        setReleaseCountdown('Error loading');
        setCanRelease({ value: false, label: 'Error' });
      }
    };

    const loadBalances = async () => {
      try {
        const Web3 = (await import('web3')).default;
        const web3 = new Web3(TESTNET_RPC);
        
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
        
        const token = new web3.eth.Contract(tokenABI as any, GERD_TOKEN_ADDRESS);
        const decimals = await token.methods.decimals().call();

        const balancePromises = WALLETS.map(async (wallet) => {
          try {
            const balance = await token.methods.balanceOf(wallet.address).call();
            const formatted = (Number(balance) / 10 ** Number(decimals)).toLocaleString('en-US');
            return { ...wallet, balance: formatted, loading: false };
          } catch (err) {
            console.error(`Error loading balance for ${wallet.name}:`, err);
            return { ...wallet, balance: 'Error', loading: false };
          }
        });

        const results = await Promise.all(balancePromises);
        setWalletBalances(results);
      } catch (err) {
        console.error('Error loading balances:', err);
        setWalletBalances(prev =>
          prev.map(w => ({ ...w, balance: 'Error', loading: false }))
        );
      }
    };

    loadDashboard();
    loadBalances();
    const interval = setInterval(loadDashboard, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-chart-line me-3"></i>Vesting Release Dashboard on Testnet
                </h1>
                <p className="lead fs-5 opacity-90">
                  Real-time tracking of the GERD Token Vesting contract testing on BSC Testnet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              
              {/* Info Alert */}
              <div className="alert alert-info border-info mb-5">
                <div className="d-flex align-items-start">
                  <div 
                    className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center me-3" 
                    style={{ width: '48px', height: '48px', fontSize: '24px', flexShrink: 0 }}
                  >
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div>
                    <h4 className="h6 fw-bold mb-2">Testnet Testing Information</h4>
                    <p className="mb-0 small">
                      This dashboard is for community members to follow the progress of the GERD Token Vesting contract testing on the BSC Testnet. To simulate a long-term token release (1 billion GERD tokens per year for 115 years), the vesting contract on testnet is configured to release 1 billion tokens every Wednesday. This allows for faster testing of what would normally happen over years in production. The data below is read directly from the blockchain and updates in real-time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Release Control Card */}
              <div className="card feature-card mb-5">
                <div className="card-body p-5">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-rocket text-success me-2"></i>Release Control
                  </h2>
                  <div className="text-center mb-4">
                    <Link href="/dev/release-token" className="btn btn-success btn-lg">
                      <i className="fas fa-rocket me-2"></i>Release Tokens
                    </Link>
                  </div>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="stat-card">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                          style={{ width: '64px', height: '64px', fontSize: '28px' }}
                        >
                          <i className="fas fa-clock"></i>
                        </div>
                        <h3 className="h6 fw-bold mb-2">Countdown to Next Release</h3>
                        <p className="countdown-text mb-0">{releaseCountdown}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="stat-card">
                        <div 
                          className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                          style={{ width: '64px', height: '64px', fontSize: '28px' }}
                        >
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <h3 className="h6 fw-bold mb-2">Can Release Now</h3>
                        <span className={`badge ${canRelease.value ? 'bg-success' : 'bg-danger'} fs-6`}>
                          <i className={`fas ${canRelease.value ? 'fa-check-circle' : 'fa-times-circle'} me-1`}></i>
                          {canRelease.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contract Details Card */}
              <div className="card feature-card mb-5">
                <div className="card-body p-5">
                  <h2 className="h4 fw-bold mb-4">
                    <i className="fas fa-file-contract text-primary me-2"></i>Contract Details
                  </h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="contract-box">
                        <p className="mb-2 small text-muted"><strong>Testnet CA:</strong></p>
                        <a 
                          href="https://testnet.bscscan.com/token/0x85a4850d0c2bdd6202c919c481bf0f186222fa89" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <code className="text-success fw-bold text-break" style={{ wordBreak: 'break-all' }}>
                            0x85a4850d0c2bdd6202c919c481bf0f186222fa89
                          </code>
                          <i className="fas fa-external-link-alt ms-2 text-success"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contract-box">
                        <p className="mb-2 small text-muted"><strong>Testnet VC:</strong></p>
                        <a 
                          href="https://testnet.bscscan.com/address/0xC3C2b095C3aA55ACecc7fBA44C6B9D3f56dC43Da" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <code className="text-success fw-bold text-break" style={{ wordBreak: 'break-all' }}>
                            0xC3C2b095C3aA55ACecc7fBA44C6B9D3f56dC43Da
                          </code>
                          <i className="fas fa-external-link-alt ms-2 text-success"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contract-box">
                        <p className="mb-2 small text-muted"><strong>Testnet VC2:</strong></p>
                        <a 
                          href="https://testnet.bscscan.com/address/0x2005408916003b37555D5A9B539867b387534e34" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <code className="text-success fw-bold text-break" style={{ wordBreak: 'break-all' }}>
                            0x2005408916003b37555D5A9B539867b387534e34
                          </code>
                          <i className="fas fa-external-link-alt ms-2 text-success"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contract-box">
                        <p className="mb-2 small text-muted"><strong>Network:</strong></p>
                        <p className="mb-0 fw-bold text-primary">BSC Testnet</p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row g-3">
                    <div className="col-md-4">
                      <p className="mb-2 small text-muted"><strong>Last Release Time:</strong></p>
                      <p className="fw-bold text-primary mb-0">{lastRelease}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-2 small text-muted"><strong>Is Today Wednesday:</strong></p>
                      <span className={`badge ${isWednesday.value ? 'bg-success' : 'bg-danger'}`}>
                        <i className={`fas ${isWednesday.value ? 'fa-check-circle' : 'fa-times-circle'} me-1`}></i>
                        {isWednesday.label}
                      </span>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-2 small text-muted"><strong>Next Scheduled Release:</strong></p>
                      <p className="fw-bold text-primary mb-0">{nextReleaseDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallet Balances Card */}
              <div className="card feature-card mb-5">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-wallet text-success me-2"></i>Wallet Balances
                  </h2>
                  <div className="table-responsive">
                    <table id="wallet-table" className="table table-striped table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Balance (GERD)</th>
                          <th>Wallet Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {walletBalances.some(w => w.loading) ? (
                          <tr>
                            <td colSpan={3} className="text-center py-5">
                              <i className="fas fa-spinner fa-spin fa-2x text-muted mb-3 d-block"></i>
                              <p className="text-muted mb-0">Loading balances...</p>
                            </td>
                          </tr>
                        ) : (
                          walletBalances.map((wallet, index) => (
                            <tr key={index}>
                              <td><strong>{wallet.name}</strong></td>
                              <td className="fw-bold text-success">{wallet.balance}</td>
                              <td className="font-monospace small">
                                <a 
                                  href={`https://testnet.bscscan.com/address/${wallet.address}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-decoration-none"
                                >
                                  {wallet.address} <i className="fas fa-external-link-alt ms-1"></i>
                                </a>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Release History Card */}
              <div className="card feature-card">
                <div className="card-body p-5">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-history text-info me-2"></i>Release History
                  </h2>
                  <ul className="list-unstyled mb-0">
                    {!releaseHistory.hasRelease ? (
                      <li className="text-center text-muted">
                        <i className="fas fa-info-circle me-2"></i>No releases yet
                      </li>
                    ) : (
                      <li className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-clock text-primary me-2"></i>
                        <span>Last release: <strong>{releaseHistory.releaseDate}</strong></span>
                      </li>
                    )}
                  </ul>
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
                JOIN US IN CREATING A BRIGHTER FUTURE! #ABAYGERDTOKEN #ETHIOPIA #CRYPTO #GERD
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
