'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import FooterCTA from '@/components/FooterCTA';

interface WalletBalance {
  address: string;
  description: string;
  balance: string | null;
  numericBalance: number | null;
  loading: boolean;
  error: boolean;
}

const GERD_TOKEN_ADDRESS = '0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c';
const BSC_RPC = 'https://bsc-dataseed.binance.org/';
const TOTAL_SUPPLY = 120_000_000_000;
const NOT_IN_CIRCULATION_ADDRESSES = [
  '0x932fa749A04750284794eF55B4436Bf9Cb4AfF15',
  '0x000000000000000000000000000000000000dead',
];

const wallets = [
  { address: '0x02a2013C569c3cF7a8bf3DFE70D97c76B44993dc', description: 'Vesting Reserve' },
  { address: '0x8bF286A0135489832300e33F57ACc7ADA2Ca8133', description: 'Development Reserve Fund' },
  { address: '0xAfDAaDe5b0044993813b1f06cC3F3c6C025a1F1D', description: 'Distribution Reserve - for Claims' },
  { address: '0xB2d784C9DDFE33359D1Af13E9121D7bd94C28578', description: 'Backend Claim Dispenser' },
  { address: '0x990eC8272ECfDE6B00c37E56E50cC2BeE1734236', description: 'Airdrop Treasury (3-of-5 Gnosis Safe multisig)' },
  { address: '0x2C8FbB5E9b56050401C283a7bd22a8594b64c6d1', description: 'Airdrop Distributor Smart Contract' },
  { address: '0xdEA3dc7F2ea7A185aa8A6323f04164a9C9c67700', description: 'Liquidity Reserve' },
  { address: '0x75F5f7d68AD14f467c935d6B375D350614F9cF68', description: 'GERD Dignitary Reserve' },
  { address: '0x559C7a315067F39ad4a19887135C6aDd779B2c8E', description: 'Staking Rewards Reserve' },
];

const chartColors = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
];

export default function GerdWallets() {
  const [balances, setBalances] = useState<WalletBalance[]>(
    wallets.map(w => ({ ...w, balance: null, numericBalance: null, loading: true, error: false }))
  );
  const [notInCirculation, setNotInCirculation] = useState<{
    balance: string | null;
    numericBalance: number | null;
    loading: boolean;
    error: boolean;
  }>({ balance: null, numericBalance: null, loading: true, error: false });
  const [lockedBreakdown, setLockedBreakdown] = useState<{
    vesting: number | null;
    burn: number | null;
    loading: boolean;
  }>({ vesting: null, burn: null, loading: true });

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        // Dynamically import Web3
        const Web3 = (await import('web3')).default;
        const web3 = new Web3(BSC_RPC);

        const tokenABI = [
          { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }], type: 'function' },
          { constant: true, inputs: [{ name: 'account', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], type: 'function' },
        ];

        const contract = new web3.eth.Contract(tokenABI as any, GERD_TOKEN_ADDRESS);
        const decimals = await contract.methods.decimals().call();

        const balancePromises = wallets.map(async (wallet) => {
          try {
            const raw = await contract.methods.balanceOf(wallet.address).call();
            const numericBalance = Number(raw) / (10 ** Number(decimals));
            const formatted = numericBalance.toLocaleString();
            return { ...wallet, balance: formatted, numericBalance, loading: false, error: false };
          } catch (err) {
            console.error(`Failed to fetch for ${wallet.address}:`, err);
            return { ...wallet, balance: 'Error', numericBalance: null, loading: false, error: true };
          }
        });

        const [results, notInCirculationRaw] = await Promise.all([
          Promise.all(balancePromises),
          Promise.all(NOT_IN_CIRCULATION_ADDRESSES.map((address) => contract.methods.balanceOf(address).call())),
        ]);
        setBalances(results);

        // Calculate vesting and burn breakdown
        const vestingAddress = '0x02a2013C569c3cF7a8bf3DFE70D97c76B44993dc';
        const burnAddress = '0x000000000000000000000000000000000000dead';
        
        const vestingRaw = await contract.methods.balanceOf(vestingAddress).call();
        const burnRaw = await contract.methods.balanceOf(burnAddress).call();
        
        const vestingNumeric = Number(vestingRaw) / (10 ** Number(decimals));
        const burnNumeric = Number(burnRaw) / (10 ** Number(decimals));

        const notInCirculationNumeric = notInCirculationRaw
          .reduce((sum, raw) => sum + (Number(raw) / (10 ** Number(decimals))), 0);
        setNotInCirculation({
          balance: notInCirculationNumeric.toLocaleString(),
          numericBalance: notInCirculationNumeric,
          loading: false,
          error: false,
        });

        setLockedBreakdown({
          vesting: vestingNumeric,
          burn: burnNumeric,
          loading: false,
        });
      } catch (err) {
        console.error('Failed to initialize Web3:', err);
        setBalances(prev => prev.map(w => ({ ...w, loading: false, error: true, balance: 'Error', numericBalance: null })));
        setNotInCirculation({ balance: 'Error', numericBalance: null, loading: false, error: true });
        setLockedBreakdown({ vesting: null, burn: null, loading: false });
      }
    };

    fetchBalances();
  }, []);

  const totalBalance = balances.reduce((sum, wallet) => sum + (wallet.numericBalance ?? 0), 0);
  const notInCirculationBalance = notInCirculation.numericBalance ?? 0;
  const publicCirculation = Math.max(0, TOTAL_SUPPLY - notInCirculationBalance - totalBalance);

  const distributionData = [
    { label: 'Unrestricted Circulating Supply', value: publicCirculation },
    { label: 'Governance-Controlled Wallets', value: totalBalance },
    { label: 'Irrevocably Locked Supply (Vesting + Burn)', value: notInCirculationBalance },
  ];

  const distributionTotal = distributionData.reduce((sum, item) => sum + item.value, 0);

  let currentAngle = 0;
  const gradientStops = distributionData.map((item, index) => {
    const percentage = distributionTotal > 0 ? (item.value / distributionTotal) * 100 : 0;
    const start = currentAngle;
    const end = currentAngle + percentage;
    currentAngle = end;
    return `${chartColors[index % chartColors.length]} ${start}% ${end}%`;
  });

  const chartStyle = {
    background: distributionTotal > 0 ? `conic-gradient(${gradientStops.join(', ')})` : '#e9ecef',
    width: '260px',
    height: '260px',
    borderRadius: '50%',
    position: 'relative' as const,
    boxShadow: '0 0.25rem 1rem rgba(0,0,0,0.08)',
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-wallet me-3"></i>GERD Token Wallet Balances
                </h1>
                <p className="lead fs-5 opacity-90">
                  Real-time tracking of all wallets managed by the project on the Binance Smart Chain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card feature-card">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-table me-2"></i>These wallets are controlled by the project and are not locked by a smart contract.
                  </h2>
                  <div className="table-responsive">
                    <table id="wallet-table" className="table table-striped table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Balance (GERD)</th>
                          <th>Description</th>
                          <th>Wallet Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {balances.map((wallet) => (
                          <tr key={wallet.address}>
                            <td
                              className={`balance ${wallet.loading
                                ? 'balance-loading'
                                : wallet.error
                                  ? 'text-danger'
                                  : 'fw-bold text-success'
                                }`}
                            >
                              {wallet.loading ? 'Loading...' : wallet.balance}
                            </td>
                            <td>{wallet.description}</td>
                            <td>
                              <a
                                href={`https://bscscan.com/token/${GERD_TOKEN_ADDRESS}?a=${wallet.address}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                <code>{wallet.address}</code>{' '}
                                <i className="fas fa-external-link-alt ms-1"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5">
                    <div className="d-flex flex-column flex-lg-row align-items-center gap-4">
                      <div className="flex-shrink-0" aria-hidden={distributionTotal === 0}>
                        <div style={chartStyle} className="d-flex align-items-center justify-content-center">
                          <div className="text-center" style={{ position: 'absolute' }}>
                            <div className="fw-bold">Token Supply Status</div>
                            <small className="text-muted">circulation view</small>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1 w-100">
                        <h3 className="h5 fw-semibold mb-3">Distribution Breakdown</h3>
                        {distributionTotal === 0 ? (
                          <p className="text-muted mb-0">Chart will appear when balances finish loading.</p>
                        ) : (
                          <div className="row row-cols-1 row-cols-md-2 g-3">
                            {distributionData.map((item, index) => {
                              const percentage = distributionTotal > 0 ? ((item.value / distributionTotal) * 100).toFixed(2) : '0.00';
                              const isLoading =
                                (item.label === 'Governance-Controlled Wallets' && balances.some(w => w.loading)) ||
                                (item.label === 'Irrevocably Locked Supply (Vesting + Burn)' && notInCirculation.loading);
                              return (
                                <div key={item.label} className="col">
                                  <div className="d-flex align-items-start">
                                    <span
                                      className="me-2 mt-1"
                                      style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: chartColors[index % chartColors.length] }}
                                    ></span>
                                    <div className="w-100">
                                      <div className="fw-semibold">{item.label}</div>
                                      <div className="small text-muted">
                                        {isLoading
                                          ? 'Loading...'
                                          : `${item.value.toLocaleString()} GERD (${percentage}%)`}
                                      </div>
                                      {/* Show breakdown for Irrevocably Locked Supply */}
                                      {item.label === 'Irrevocably Locked Supply (Vesting + Burn)' && !lockedBreakdown.loading && (
                                        <div className="mt-2 ps-3 border-start border-2" style={{ borderColor: chartColors[index % chartColors.length] }}>
                                          <div className="small">
                                            <div className="text-muted">
                                              <span className="me-2">📊</span>
                                              <strong>Vesting Reserve:</strong> {(lockedBreakdown.vesting ?? 0).toLocaleString()} GERD
                                            </div>
                                            <div className="text-muted mt-1">
                                              <span className="me-2">🔥</span>
                                              <strong>Burn Address:</strong> {(lockedBreakdown.burn ?? 0).toLocaleString()} GERD
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      {item.label === 'Irrevocably Locked Supply (Vesting + Burn)' && lockedBreakdown.loading && (
                                        <div className="mt-2 ps-3 small text-muted">Loading breakdown...</div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
