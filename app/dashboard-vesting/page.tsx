'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ContractAddress from '@/components/ContractAddress';

const CONTRACT_ADDRESS = '0x932fa749A04750284794eF55B4436Bf9Cb4AfF15';
const LOCKED_TOTAL = 115_000_000_000;
const RELEASE_PER_YEAR = 1_000_000_000;
const START_DATE = new Date('2025-04-24T00:00:00Z');
const GERD_TOKEN_ADDRESS = '0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c';
const BSC_RPC = 'https://bsc-dataseed.binance.org/';

export default function DashboardVesting() {
  const [countdown, setCountdown] = useState<string>('...');
  const [locked, setLocked] = useState<string>('...');
  const [released, setReleased] = useState<string>('...');
  const [remaining, setRemaining] = useState<string>('...');
  const [releaseDate, setReleaseDate] = useState<string>('...');
  const [walletBalances, setWalletBalances] = useState<Array<{ name: string; address: string; balance: string }>>([]);

  const walletData = [
    { name: 'GERD Vesting Smart Contract', address: '0x932fa749A04750284794eF55B4436Bf9Cb4AfF15' },
    { name: 'Airdrop Reserve', address: '0x990eC8272ECfDE6B00c37E56E50cC2BeE1734236' },
    { name: 'Liquidity Reserve', address: '0xdEA3dc7F2ea7A185aa8A6323f04164a9C9c67700' },
    { name: 'Staking Reserve', address: '0x559C7a315067F39ad4a19887135C6aDd779B2c8E' },
  ];

  useEffect(() => {
    const updateStats = () => {
      const now = new Date();
      const yearsElapsed = Math.floor((now.getTime() - START_DATE.getTime()) / (365.25 * 24 * 3600 * 1000));
      const releasedAmount = Math.min(yearsElapsed, 115) * RELEASE_PER_YEAR;
      const remainingAmount = LOCKED_TOTAL - releasedAmount;

      setLocked(LOCKED_TOTAL.toLocaleString());
      setReleased(releasedAmount.toLocaleString());
      setRemaining(remainingAmount.toLocaleString());

      // Calculate next release date dynamically (recalculates each time to handle year transitions)
      const nextRelease = new Date(START_DATE.getTime());
      nextRelease.setUTCFullYear(START_DATE.getUTCFullYear() + yearsElapsed + 1);
      setReleaseDate(nextRelease.toDateString());

      return nextRelease;
    };

    const updateCountdown = () => {
      // Recalculate next release date each time to ensure accuracy after year transitions
      const nextRelease = updateStats();
      const diff = nextRelease.getTime() - new Date().getTime();
      if (diff <= 0) {
        setCountdown('Available Now!');
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchAllBalances = async () => {
      try {
        const Web3 = (await import('web3')).default;
        const web3 = new Web3(BSC_RPC);

        const tokenABI = [
          { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }], type: 'function' },
          { constant: true, inputs: [{ name: 'account', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], type: 'function' },
        ];

        const contract = new web3.eth.Contract(tokenABI as any, GERD_TOKEN_ADDRESS);
        const decimals = await contract.methods.decimals().call();

        const balances = await Promise.all(
          walletData.map(async (wallet) => {
            try {
              const raw = await contract.methods.balanceOf(wallet.address).call();
              const numericBalance = Number(raw) / (10 ** Number(decimals));
              const formatted = numericBalance.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              });
              return { ...wallet, balance: formatted };
            } catch (err) {
              console.error(`Failed to fetch balance for ${wallet.name}:`, err);
              return { ...wallet, balance: 'Error' };
            }
          })
        );

        setWalletBalances(balances);
      } catch (err) {
        console.error('Failed to fetch wallet balances:', err);
        setWalletBalances(walletData.map(w => ({ ...w, balance: 'Error' })));
      }
    };

    fetchAllBalances();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="display-3 fw-bold mb-4">GERD Token Vesting Dashboard</h1>
            <p className="lead fs-4 mb-4 opacity-90">
              Track the locked tokens and upcoming release schedule
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section py-5">
        <div className="container">
          {/* Countdown Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="countdown-box text-center p-4 rounded">
                <h2 className="h4 mb-3">Next Release Countdown</h2>
                <p className="h3 fw-bold text-primary mb-0">{countdown}</p>
                <p className="text-muted mt-2 mb-0">Scheduled for: {releaseDate}</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="stat-box text-center p-4 rounded">
                <h3 className="h5 text-muted mb-2">Total Locked</h3>
                <p className="h3 fw-bold text-success mb-0">{locked}</p>
                <p className="text-muted small mb-0">GERD Tokens</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box text-center p-4 rounded">
                <h3 className="h5 text-muted mb-2">Released</h3>
                <p className="h3 fw-bold text-primary mb-0">{released}</p>
                <p className="text-muted small mb-0">GERD Tokens</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box text-center p-4 rounded">
                <h3 className="h5 text-muted mb-2">Remaining</h3>
                <p className="h3 fw-bold text-warning mb-0">{remaining}</p>
                <p className="text-muted small mb-0">GERD Tokens</p>
              </div>
            </div>
          </div>

          {/* Wallet Balances Table */}
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="h4 fw-bold mb-4">Project Wallet Balances</h3>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Wallet Address</th>
                      <th className="text-end">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {walletBalances.length > 0 ? (
                      walletBalances.map((wallet) => (
                        <tr key={wallet.address}>
                          <td>
                            <div className="mb-2 fw-semibold">{wallet.name}</div>
                            <a
                              href={`https://bscscan.com/token/${GERD_TOKEN_ADDRESS}?a=${wallet.address}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-success"
                            >
                              <code className="text-success" style={{ wordBreak: 'break-all' }}>
                                {wallet.address}
                              </code>
                              <i className="fas fa-external-link-alt ms-2 small"></i>
                            </a>
                          </td>
                          <td className="text-end fw-bold text-success align-middle">
                            {wallet.balance}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="text-center text-muted">
                          Loading balances...
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Distribution Breakdown */}
          <div className="row">
            <div className="col-12">
              <h3 className="h4 mb-4">Annual Release Breakdown</h3>
              <div className="graph">
                <div className="bar" style={{ width: '100%', height: '40px', backgroundColor: '#198754', marginBottom: '10px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100 text-white fw-bold">
                    Year 1: 1 Billion GERD
                  </div>
                </div>
                <div className="bar" style={{ width: '100%', height: '40px', backgroundColor: '#0d6efd', marginBottom: '10px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100 text-white fw-bold">
                    Year 2: 1 Billion GERD
                  </div>
                </div>
                <div className="bar" style={{ width: '100%', height: '40px', backgroundColor: '#ffc107', marginBottom: '10px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100 text-dark fw-bold">
                    Year 3: 1 Billion GERD
                  </div>
                </div>
                <p className="text-muted mt-3">
                  <i className="fas fa-info-circle me-2"></i>
                  Each year, 1 billion GERD tokens are released from the vesting contract, continuing for 115 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
