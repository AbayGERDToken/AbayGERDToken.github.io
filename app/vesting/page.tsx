import Image from 'next/image';
import FooterCTA from '@/components/FooterCTA';

export default function Vesting() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-lock me-3"></i>Abay GERD Token Vesting Strategy
                </h1>
                <p className="lead fs-5 opacity-90">Reinforcing Transparency and Sustainable Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              
              {/* Overview Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-4">
                    <i className="fas fa-chart-line text-success me-2"></i>Overview of the Vesting Plan
                  </h2>
                  <p className="lead mb-4">
                    The <strong>Abay GERD Token (GERD)</strong> has a transformative vesting strategy designed to enhance long-term value,
                    promote stability, and build trust through full transparency. This development marks a major milestone in the token&apos;s evolution.
                  </p>
                  <p className="mb-3">
                    In addition to the milestone airdrop distributed to all existing wallet addresses on May 5, 2025, to commemorate its
                    <strong>2-year anniversary</strong>, GERD Token has introduced a long-term vesting framework to further demonstrate its
                    commitment to sustainability and ongoing community rewards.
                  </p>
                  <p className="mb-3">
                    A total of <strong>115 billion tokens</strong> will be locked in a secure, immutable smart contract, with a scheduled release
                    of <strong>1 billion tokens per year</strong> over the next 115 years. This approach ensures a consistent and predictable
                    distribution model that incentivizes long-term holding and active participation.
                  </p>
                  <div className="alert alert-info border-info">
                    <p className="mb-0">
                      <i className="fas fa-info-circle me-2"></i>
                      The smart contract is fully autonomous and irreversible. Once deployed, its rules cannot be modified or bypassed—neither by the original developers nor any external party. The vesting schedule and token release conditions will be permanently embedded in the blockchain and remain verifiable by anyone at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Details Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-4">
                    <i className="fas fa-key text-primary me-2"></i>Key Details
                  </h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-lock"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">115 Billion Tokens Locked</h4>
                          <p className="small text-muted mb-0">Secured in an irreversible smart contract on Binance Smart Chain (BSC)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">Annual Release of 1 Billion</h4>
                          <p className="small text-muted mb-0">Starting April 23, 2026, 1 billion tokens released annually</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-parachute-box"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">500 Million Airdropped</h4>
                          <p className="small text-muted mb-0">Distributed evenly to all active GERD holders—no action needed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-coins"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">250 Million for Staking</h4>
                          <p className="small text-muted mb-0">For users who stake GERD tokens, encouraging engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-fire"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">250 Million for Liquidity or Burn</h4>
                          <p className="small text-muted mb-0">Added to liquidity if under 500M; otherwise burned</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-eye"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">Publicly Verifiable</h4>
                          <p className="small text-muted mb-0">All activity is traceable and transparent on-chain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why It Matters Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-4">
                    <i className="fas fa-star text-warning me-2"></i>Why It Matters
                  </h2>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="stat-box h-100">
                        <div 
                          className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                          style={{ width: '64px', height: '64px', fontSize: '28px' }}
                        >
                          <i className="fas fa-users"></i>
                        </div>
                        <h4 className="h6 fw-bold mb-2">Long-Term Participation</h4>
                        <p className="small text-muted mb-0">Encourages long-term participation with annual rewards</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stat-box h-100">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                          style={{ width: '64px', height: '64px', fontSize: '28px' }}
                        >
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4 className="h6 fw-bold mb-2">Sustainable Growth</h4>
                        <p className="small text-muted mb-0">Promotes sustainable and predictable growth</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stat-box h-100">
                        <div 
                          className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                          style={{ width: '64px', height: '64px', fontSize: '28px' }}
                        >
                          <i className="fas fa-network-wired"></i>
                        </div>
                        <h4 className="h6 fw-bold mb-2">Decentralized Model</h4>
                        <p className="small text-muted mb-0">Aligns with a decentralized financial model for the GERD community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community-Driven Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-3">
                    <i className="fas fa-users text-success me-2"></i>A Community-Driven Digital Asset
                  </h2>
                  <p className="mb-0">
                    GERD Token&apos;s value comes from its community, not institutions. Its adoption and utility define its worth—like Bitcoin, it&apos;s a decentralized people-powered asset.
                  </p>
                </div>
              </div>

              {/* Generational Asset Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-3">
                    <i className="fas fa-infinity text-primary me-2"></i>A Generational Asset
                  </h2>
                  <p className="mb-0">
                    Designed to last over a century, GERD Token is a long-term digital inheritance. Early holders benefit most from the annual airdrop structure, and as the number of wallets increases, each share becomes smaller—rewarding early adopters significantly.
                  </p>
                </div>
              </div>

              {/* Looking Ahead Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-3">
                    <i className="fas fa-eye text-info me-2"></i>Looking Ahead
                  </h2>
                  <p className="mb-0">
                    GERD Token continues to grow on principles of fairness, transparency, and generational wealth. Its vesting mechanism offers a rare chance to build digital legacy for years to come.
                  </p>
                </div>
              </div>

              {/* Final Message Card */}
              <div className="card feature-card border-success bg-success-subtle">
                <div className="card-body p-5 text-center">
                  <div 
                    className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" 
                    style={{ width: '80px', height: '80px', fontSize: '36px' }}
                  >
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h2 className="h3 fw-bold mb-0">The journey has just begun. GERD is built to last.</h2>
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
