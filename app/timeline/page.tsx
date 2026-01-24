import Image from 'next/image';
import FooterCTA from '@/components/FooterCTA';

export default function Timeline() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-history me-3"></i>Abay GERD Token - Project Timeline
                </h1>
                <p className="lead fs-5 opacity-90">
                  A comprehensive journey through the development and milestones of the GERD Token project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              
              {/* White Paper Development */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">White Paper Development</h2>
                  </div>
                  <p className="mb-3">Comprehensive white paper written and updated through multiple iterations.</p>
                  <p className="fw-semibold mb-2">Key sections include:</p>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>Vision and mission</li>
                        <li><i className="fas fa-check text-success me-2"></i>Tokenomics (supply, allocation, vesting)</li>
                        <li><i className="fas fa-check text-success me-2"></i>Airdrop and staking logic</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>Long-term sustainability plan</li>
                        <li><i className="fas fa-check text-success me-2"></i>ETH migration readiness if needed</li>
                        <li><i className="fas fa-check text-success me-2"></i>Open source and transparency commitment</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted">
                    Adjustments reflected real-time project decisions (e.g., updated vesting mechanics, and developer outreach).
                  </p>
                </div>
              </div>

              {/* GERD Token Smart Contract */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-file-contract"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">GERD Token Smart Contract</h2>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-4">
                      <p className="mb-0"><strong>Network:</strong> Binance Smart Chain (BSC)</p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-0"><strong>Total Supply:</strong> 120,000,000,000 (120 billion)</p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-0"><strong>Decimals:</strong> 2 (to support micro-distributions)</p>
                    </div>
                  </div>
                  <p className="fw-semibold mb-2">Key features:</p>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>transfer, transferFrom, approve, balanceOf (standard ERC-20 style)
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>No minting beyond total supply
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle text-success me-2"></i>Manually created and removed initial liquidity on PancakeSwap for testing
                    </li>
                  </ul>
                </div>
              </div>

              {/* Vesting Smart Contract */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-lock"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">Vesting Smart Contract</h2>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <p className="mb-0"><strong>Purpose:</strong> Lock and gradually release 115B tokens</p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-0"><strong>Release Schedule:</strong> 1 billion GERD tokens per year (modified to weekly for testnet)</p>
                    </div>
                  </div>
                  <p className="fw-semibold mb-2">Final Distribution Logic:</p>
                  <div className="row g-2 mb-3">
                    <div className="col-md-4">
                      <div className="bg-success-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">500M GERD</p>
                        <small className="text-muted">to airdrop holders</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-warning-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">250M GERD</p>
                        <small className="text-muted">to staking rewards</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-info-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">250M GERD</p>
                        <small className="text-muted">to liquidity or burned</small>
                      </div>
                    </div>
                  </div>
                  <p className="mb-2">
                    <strong>Testnet Address:</strong> <code>0xC3C2b095C3aA55ACecc7fBA44C6B9D3f56dC43Da</code>
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <i className="fas fa-check text-success me-2"></i>Deployed immutably (no transferOwnership() in final version)
                    </li>
                    <li className="mb-1">
                      <i className="fas fa-check text-success me-2"></i>releaseToken() emits event & distributes to 3 wallets
                    </li>
                    <li className="mb-1">
                      <i className="fas fa-check text-success me-2"></i>Added getNextReleaseDate() to support UI
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check text-success me-2"></i>Release frequency changed to weekly (every Wednesday) for test runs
                    </li>
                  </ul>
                </div>
              </div>

              {/* Frontend Web UI */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-desktop"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">Frontend Web UI</h2>
                  </div>
                  <ul className="list-unstyled mb-3">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Claim Page</strong> — secure, backend-verified token claiming
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Dashboard</strong> — real-time vesting updates, countdown, release history, next eligible release date
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Developer Landing Page</strong> — call to action for open-source contributions
                    </li>
                  </ul>
                  <p className="fw-semibold mb-2">Implemented:</p>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>Bootstrap 5 styling</li>
                        <li><i className="fas fa-check text-success me-2"></i>Mobile-responsive designs</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>QR scanner (planned for mobile app)</li>
                        <li><i className="fas fa-check text-success me-2"></i>Countdown timer to next vesting release</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Development */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-server"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">Backend Development</h2>
                  </div>
                  <p className="mb-3">
                    Moved sensitive logic (like claiming & releaseToken() calls) from client-side JS to secure backend (Python Flask on Render)
                  </p>
                  <p className="mb-2">Now in two separate Render services:</p>
                  <ul className="list-unstyled mb-3">
                    <li className="mb-1">
                      <i className="fas fa-check text-success me-2"></i>Mainnet backend for claims
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check text-success me-2"></i>Testnet backend for vesting functions
                    </li>
                  </ul>
                  <p className="fw-semibold mb-2">Added:</p>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>CAPTCHA verification (Google reCAPTCHA)</li>
                        <li><i className="fas fa-check text-success me-2"></i>IP throttling and session token validation</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>CORS control for security</li>
                        <li><i className="fas fa-check text-success me-2"></i>Built can-release and release-token APIs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fair Distribution Strategy */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">Fair Distribution Strategy</h2>
                  </div>
                  <p className="fw-semibold mb-2"><strong>Token claim limits:</strong></p>
                  <ul className="list-unstyled mb-3">
                    <li className="mb-2">
                      <i className="fas fa-arrow-right text-primary me-2"></i>
                      Initially 1,000 global / 7,500 Ethiopia → Later raised to 10,000 global / 75,000 Ethiopia
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-arrow-right text-primary me-2"></i>
                      Retroactive airdrops to early claimants to ensure fairness
                    </li>
                  </ul>
                  <p className="fw-semibold mb-2">Claims validated via:</p>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>IP region checks</li>
                        <li><i className="fas fa-check text-success me-2"></i>Firebase database</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>ReCaptcha validation</li>
                        <li><i className="fas fa-check text-success me-2"></i>Tableau dashboard visualization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile App Vision */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">Mobile App Vision</h2>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Wallet app for Android/iOS (QR scanner, GERD token display, balance fetch)
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Plans for: Direct claiming, sending, receiving, Built-in GERD transfer tools
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Developer incentives offered (GERD tokens for tested contributions)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Governance & Transparency */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">Governance & Transparency</h2>
                  </div>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>3-of-5 Gnosis Safe multisig deployed</li>
                        <li><i className="fas fa-check text-success me-2"></i>Open source GitHub repository</li>
                        <li><i className="fas fa-check text-success me-2"></i>Telegram, TikTok, and X (Twitter) communication</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>All token flows verifiable on chain</li>
                        <li><i className="fas fa-check text-success me-2"></i>Community stakeholders, not paid influencers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Allocation */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-coins"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">Token Allocation</h2>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>5B tokens</strong> immediately available — used for global distribution, initial liquidity provision, early community rewards, and project development efforts
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>115B tokens</strong> will be locked under vesting contract
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>No team or founder allocation hidden</strong> — all transparent on blockchain and website
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technical Highlights */}
              <div className="card timeline-card">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '64px', height: '64px', fontSize: '28px' }}
                    >
                      <i className="fas fa-code"></i>
                    </div>
                    <h2 className="h3 fw-bold mb-0">Technical Highlights</h2>
                  </div>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <h4 className="h6 fw-bold mb-3">
                        <i className="fab fa-js text-warning me-2"></i>JavaScript
                      </h4>
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>Dynamic UTC countdown</li>
                        <li><i className="fas fa-check text-success me-2"></i>API calls and DOM updates</li>
                        <li><i className="fas fa-check text-success me-2"></i>Error handling</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h4 className="h6 fw-bold mb-3">
                        <i className="fab fa-html5 text-danger me-2"></i>HTML
                      </h4>
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>Clean Bootstrap layouts</li>
                        <li><i className="fas fa-check text-success me-2"></i>Green accent branding</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h4 className="h6 fw-bold mb-3">
                        <i className="fab fa-python text-primary me-2"></i>Python
                      </h4>
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>Flask app with CORS</li>
                        <li><i className="fas fa-check text-success me-2"></i>JWT/session tracking</li>
                        <li><i className="fas fa-check text-success me-2"></i>Signed transaction functionality</li>
                      </ul>
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
