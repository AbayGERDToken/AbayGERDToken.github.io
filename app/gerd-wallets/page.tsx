'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import LocalizedText from '@/components/LocalizedText';
import { useTranslations } from 'next-intl';

interface WalletBalance {
  address: string;
  descriptionId: string;
  balance: string | null;
  loading: boolean;
  error: boolean;
}

const GERD_TOKEN_ADDRESS = '0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c';
const BSC_RPC = 'https://bsc-dataseed.binance.org/';

const wallets = [
  { address: '0x02a2013C569c3cF7a8bf3DFE70D97c76B44993dc', descriptionId: 'wallets.descriptions.vesting_reserve' },
  { address: '0x000000000000000000000000000000000000dead', descriptionId: 'wallets.descriptions.token_burn_dead_address' },
  { address: '0x8bF286A0135489832300e33F57ACc7ADA2Ca8133', descriptionId: 'wallets.descriptions.development_reserve_fund' },
  { address: '0xAfDAaDe5b0044993813b1f06cC3F3c6C025a1F1D', descriptionId: 'wallets.descriptions.distribution_for_claims' },
  { address: '0x2C8FbB5E9b56050401C283a7bd22a8594b64c6d1', descriptionId: 'wallets.descriptions.airdrop_smart_contract' },
  { address: '0xdA96DBeDD6eF3f4f2b503565A7c6a5a65fbabf17', descriptionId: 'wallets.descriptions.liquidity_pool' },
  { address: '0x75F5f7d68AD14f467c935d6B375D350614F9cF68', descriptionId: 'wallets.descriptions.gerd_dignitary_reserve' },
  { address: '0x3B84a366a2f25BbB48f34b2b8D587c02237E6a13', descriptionId: 'wallets.descriptions.staking_rewards' },
];

export default function GerdWallets() {
  const t = useTranslations();
  const [balances, setBalances] = useState<WalletBalance[]>(
    wallets.map(w => ({ ...w, balance: null, loading: true, error: false }))
  );

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
            const formatted = (Number(raw) / (10 ** Number(decimals))).toLocaleString();
            return { ...wallet, balance: formatted, loading: false, error: false };
          } catch (err) {
            console.error(`Failed to fetch for ${wallet.address}:`, err);
            return { ...wallet, balance: t('wallets.messages.error_fetch_balance'), loading: false, error: true };
          }
        });

        const results = await Promise.all(balancePromises);
        setBalances(results);
      } catch (err) {
        console.error('Failed to initialize Web3:', err);
        setBalances(prev => prev.map(w => ({ ...w, loading: false, error: true, balance: t('wallets.messages.error_fetch_balance') })));
      }
    };

    fetchBalances();
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
                  <i className="fas fa-wallet me-3"></i><LocalizedText id="wallets.hero.title" />
                </h1>
                <p className="lead fs-5 opacity-90">
                  <LocalizedText id="wallets.hero.lead" />
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
                    <i className="fas fa-table me-2"></i><LocalizedText id="wallets.table.title" />
                  </h2>
                  <div className="table-responsive">
                    <table id="wallet-table" className="table table-striped table-hover mb-0">
                      <thead>
                        <tr>
                          <th><LocalizedText id="wallets.table.balance" /></th>
                          <th><LocalizedText id="wallets.table.description" /></th>
                          <th><LocalizedText id="wallets.table.address" /></th>
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
                              {wallet.loading ? <LocalizedText id="wallets.loading" /> : wallet.balance}
                            </td>
                            <td><LocalizedText id={wallet.descriptionId} /></td>
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
                <LocalizedText id="wallets.promo" />
              </h2>
            </div>
            <div className="col-md-4 text-center">
              <Image
                src="/image/abay_bluesky.png"
                alt={t('wallets.image.alt')}
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
