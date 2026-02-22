import Link from 'next/link';
import Image from 'next/image';
import FooterCTA from '@/components/FooterCTA';

export default function GerdAma() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-comments me-3"></i>Abay GERD Token - Community AMA
                </h1>
                <p className="lead fs-5 opacity-90">
                  Everything you need to know about GERD Token — straight from the team. Learn more about the mission, technology, and vision behind this unique community project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMA Questions */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              
              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q1</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">What exactly is the Abay GERD Token?</h2>
                  </div>
                  <p className="mb-0">
                    GERD Token is a <strong>community-powered digital asset</strong> created to honor the spirit of the Grand Ethiopian Renaissance Dam. It symbolizes unity, resilience, and forward-thinking. There are no insiders, no presales — just fair access for everyone.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q2</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">Who can claim GERD tokens?</h2>
                  </div>
                  <p className="mb-0">
                    Anyone, anywhere! Special priority is given to users in Ethiopia. Originally, users could claim 1,000 GERD globally or 7,500 in Ethiopia — later increased to 10,000 and 75,000 respectively.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q3</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">How many tokens exist, and how are they distributed?</h2>
                  </div>
                  <p className="mb-0">
                    Total supply is <strong>120 billion GERD</strong> tokens. 115B are locked in a smart contract with 1B released annually over 115 years. The remaining 5B are used for <strong>distribution, liquidity, rewards, and development</strong>.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q4</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">What ensures fairness and transparency?</h2>
                  </div>
                  <p className="mb-0">
                    All token flows are verifiable on the blockchain. Governance is via a <strong>3-of-5 Gnosis Safe multisig</strong>. Smart contracts are <strong>immutable</strong> and open-source - public, verifiable on GitHub and Binance Smart Chain.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q5</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">How does the vesting system work?</h2>
                  </div>
                  <p className="mb-3">Each year, 1B tokens are released and distributed as:</p>
                  <div className="row g-3 mb-3">
                    <div className="col-md-4">
                      <div className="bg-success-subtle p-3 rounded text-center">
                        <p className="mb-0 fw-bold">500M GERD</p>
                        <small className="text-muted">to airdrops</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-warning-subtle p-3 rounded text-center">
                        <p className="mb-0 fw-bold">250M GERD</p>
                        <small className="text-muted">to staking</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-info-subtle p-3 rounded text-center">
                        <p className="mb-0 fw-bold">250M GERD</p>
                        <small className="text-muted">to liquidity or burned</small>
                      </div>
                    </div>
                  </div>
                  <p className="mb-0">Trackable via our public <strong>vesting dashboard</strong>.</p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q6</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">What platforms support GERD Token?</h2>
                  </div>
                  <p className="mb-3">
                    <strong>GERD Token is currently deployed on the Binance Smart Chain (BSC)</strong>, chosen for its low transaction fees and widespread wallet compatibility.
                  </p>
                  <p className="mb-3">
                    <strong>Ethereum Network Readiness (if ever needed)</strong><br />
                    While there are <strong>no current plans to migrate to Ethereum</strong>, GERD Token is technically prepared in case the community ever decides a migration is necessary in the future. Wallet addresses on BSC and Ethereum are identical due to shared key derivation, so holders would automatically receive their migrated tokens on Ethereum — simply by importing the new ETH contract address into their existing wallet.
                  </p>
                  <p className="mb-2">This provides:</p>
                  <ul className="mb-0">
                    <li>A seamless option for future cross-chain support if ever required</li>
                    <li>Zero friction for token holders in case of migration</li>
                    <li>Community flexibility and future-proof design</li>
                  </ul>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q7</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">Is this project open-source? Can I contribute?</h2>
                  </div>
                  <p className="mb-0">
                    Yes! The project welcomes developers and contributors. We offer <strong>GERD token rewards</strong> for completed work — mobile apps, frontend, backend, smart contracts, you name it.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q8</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">What about mobile access?</h2>
                  </div>
                  <p className="mb-0">
                    A mobile wallet is in development. It will support QR scanning, balance checking, future claiming, and transfers. Both Android and iOS versions are planned.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q9</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">Can users trust the claim process?</h2>
                  </div>
                  <p className="mb-0">
                    Yes. Claims go through a secure Python backend with <strong>IP checks</strong>, <strong>session tokens</strong>, <strong>Firebase validation</strong>, and <strong>Google reCAPTCHA</strong>. Everything is transparent.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                    >
                      <strong>Q10</strong>
                    </div>
                    <h2 className="h5 fw-bold mb-0">What&apos;s the long-term vision?</h2>
                  </div>
                  <p className="mb-3">
                    We aim to <strong>digitize the unbanked community finance</strong> and build a <strong>sustainable, community-powered economy</strong>. GERD Token is designed to last 115 years — with every step fully decentralized, auditable, and fair.
                  </p>
                  <p className="mb-0">
                    Our broader goal is <strong>digital value creation within the GERD community</strong>, especially for the unbanked population who already have the most important tools: <strong>internet access and a mobile device</strong>. By lowering the barriers to entry, we are creating a system where anyone can participate, own, and benefit from a decentralized digital future.
                  </p>
                </div>
              </div>

              <div className="card qa-card border-success bg-success-subtle">
                <div className="card-body p-5 text-center">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="fas fa-rocket text-success me-2"></i>Final Words?
                  </h2>
                  <p className="lead mb-4">GERD is more than a token. It&apos;s a movement. Claim your share. Contribute. Grow with us.</p>
                  <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                    <Link href="/" className="text-decoration-none">
                      <i className="fas fa-link me-2"></i>www.abaygerdtoken.com
                    </Link>
                    <a 
                      href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c" 
                      className="text-decoration-none" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-chart-line me-2"></i>View on BscScan <i className="fas fa-external-link-alt ms-1 small"></i>
                    </a>
                    <a 
                      href="https://x.com/abaygerdtoken" 
                      className="text-decoration-none" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-comments me-2"></i>Follow us on X, TikTok, and Telegram <i className="fas fa-external-link-alt ms-1 small"></i>
                    </a>
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
