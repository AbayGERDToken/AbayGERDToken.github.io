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
                <p className="lead fs-5 opacity-90">Transparent Release Model for Long-Term Participation</p>
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
                    The <strong>Abay GERD Token (GERD)</strong> uses a fixed, transparent vesting model designed to support predictable supply growth and long-term ecosystem participation.
                  </p>
                  <p className="mb-3">
                    Out of 120 billion total supply, <strong>115 billion tokens</strong> are allocated to a long-horizon release schedule. Exactly <strong>1 billion tokens per year</strong> are released across 115 years under predefined public rules.
                  </p>
                  <p className="mb-3">
                    This schedule-first approach reduces discretionary control, improves visibility for participants, and aligns with a gradual adoption model rather than sudden supply shocks.
                  </p>
                  <div className="alert alert-info border-info">
                    <p className="mb-0">
                      <i className="fas fa-info-circle me-2"></i>
                      The vesting framework is designed to be transparent and publicly verifiable. Participants should always confirm current contract details and on-chain activity directly before making decisions.
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
                          <p className="small text-muted mb-0">1 billion tokens released annually under a fixed vesting model</p>
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
                          <p className="small text-muted mb-0">Annual holder allocation distributed by snapshot rules</p>
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
                          <p className="small text-muted mb-0">Allocated to staking and engagement mechanisms</p>
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
                          <p className="small text-muted mb-0">Allocated for liquidity operations or burn policy execution</p>
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
                          <p className="small text-muted mb-0">All releases are auditable through on-chain records</p>
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
                    GERD is community-driven and participation-based. Its relevance grows through adoption, utility, and transparent supply behavior over time.
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
                    Designed for multi-generational continuity, GERD uses a century-scale schedule intended to keep participation open while preserving predictable annual issuance.
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
                    GERD continues on principles of fairness, transparency, and long-term community alignment. Vesting is part of that framework, not a guarantee of future market performance.
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
                  <h2 className="h3 fw-bold mb-0">Long-term design, transparent schedule, community participation.</h2>
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
