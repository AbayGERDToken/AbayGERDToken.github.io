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
                  Everything you need to know about GERD Token: distribution logic, vesting model, transparency, and long-term vision.
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
                    GERD Token is a <strong>community-powered digital asset</strong> inspired by the Abay River and the Grand Ethiopian Renaissance Dam. It follows a no-presale, no-private-allocation distribution model focused on open participation.
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
                    Anyone can participate where legally permitted. The current claim structure uses a tribute-based allocation: <strong>75,000 GERD</strong> for Ethiopia and <strong>10,000 GERD</strong> globally.
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
                    Total supply is <strong>120 billion GERD</strong>. <strong>115 billion</strong> are assigned to a 115-year vesting model with <strong>1 billion released annually</strong>. The remaining 5 billion support distribution, liquidity, ecosystem operations, and growth.
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
                    Public blockchain records provide transparent visibility of token activity. Contract addresses, distribution rules, and release checkpoints are published for independent verification.
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
                  <p className="mb-0">All annual checkpoints are trackable through public on-chain records and project dashboards.</p>
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
                    <strong>GERD Token is deployed on Binance Smart Chain (BSC)</strong>, selected for broad wallet support and relatively low transaction costs.
                  </p>
                  <p className="mb-2">This provides:</p>
                  <ul className="mb-0">
                    <li>Accessible wallet compatibility for first-time users</li>
                    <li>Lower transaction friction for participation and transfers</li>
                    <li>Scalable infrastructure for long-term community growth</li>
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
                    We aim to support digital value creation for communities with limited access to traditional finance. GERD is designed with a long-term schedule and transparent release model.
                  </p>
                  <p className="mb-0">
                    This project is participation-oriented, not return-guaranteed. Users should evaluate risk, verify on-chain data, and follow applicable regulations in their jurisdiction.
                  </p>
                </div>
              </div>

              <div className="card qa-card border-success bg-success-subtle">
                <div className="card-body p-5 text-center">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="fas fa-rocket text-success me-2"></i>Final Words?
                  </h2>
                  <p className="lead mb-4">GERD is a long-term community asset model. Claim where eligible, verify on-chain, and participate responsibly.</p>
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
