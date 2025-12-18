import Image from 'next/image';
import LocalizedText from '@/components/LocalizedText';

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
                  <i className="fas fa-lock me-3"></i>
                  <LocalizedText id="vesting.hero.title" tag="span" />
                </h1>
                <p className="lead fs-5 opacity-90"><LocalizedText id="vesting.hero.lead" tag="span" /></p>
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
                    <i className="fas fa-chart-line text-success me-2"></i>
                    <LocalizedText id="vesting.overview.title" tag="span" />
                  </h2>
                  <LocalizedText id="vesting.overview.lead1" tag="p" className="lead mb-4" />
                  <LocalizedText id="vesting.overview.lead2" tag="p" className="mb-3" />
                  <LocalizedText id="vesting.overview.lead3" tag="p" className="mb-3" />
                  <div className="alert alert-info border-info">
                    <p className="mb-0">
                      <i className="fas fa-info-circle me-2"></i>
                      <LocalizedText id="vesting.alert.info" tag="span" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Details Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-4">
                    <i className="fas fa-key text-primary me-2"></i><LocalizedText id="vesting.key_details.title" tag="span" />
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
                          <h4 className="h6 fw-bold mb-1"><LocalizedText id="vesting.key_details.locked.title" tag="span" /></h4>
                          <p className="small text-muted mb-0"><LocalizedText id="vesting.key_details.locked.lead" tag="span" /></p>
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
                          <h4 className="h6 fw-bold mb-1"><LocalizedText id="vesting.key_details.annual.title" tag="span" /></h4>
                          <p className="small text-muted mb-0"><LocalizedText id="vesting.key_details.annual.lead" tag="span" /></p>
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
                          <h4 className="h6 fw-bold mb-1"><LocalizedText id="vesting.key_details.airdropped.title" tag="span" /></h4>
                          <p className="small text-muted mb-0"><LocalizedText id="vesting.key_details.airdropped.lead" tag="span" /></p>
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
                          <h4 className="h6 fw-bold mb-1"><LocalizedText id="vesting.key_details.staking.title" tag="span" /></h4>
                          <p className="small text-muted mb-0"><LocalizedText id="vesting.key_details.staking.lead" tag="span" /></p>
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
                          <h4 className="h6 fw-bold mb-1"><LocalizedText id="vesting.key_details.liquidity.title" tag="span" /></h4>
                          <p className="small text-muted mb-0"><LocalizedText id="vesting.key_details.liquidity.lead" tag="span" /></p>
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
                          <h4 className="h6 fw-bold mb-1"><LocalizedText id="vesting.key_details.verifiable.title" tag="span" /></h4>
                          <p className="small text-muted mb-0"><LocalizedText id="vesting.key_details.verifiable.lead" tag="span" /></p>
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
                    <i className="fas fa-star text-warning me-2"></i><LocalizedText id="vesting.why.title" tag="span" />
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
                        <h4 className="h6 fw-bold mb-2"><LocalizedText id="vesting.why.participation.title" tag="span" /></h4>
                        <p className="small text-muted mb-0"><LocalizedText id="vesting.why.participation.lead" tag="span" /></p>
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
                        <h4 className="h6 fw-bold mb-2"><LocalizedText id="vesting.why.sustainable.title" tag="span" /></h4>
                        <p className="small text-muted mb-0"><LocalizedText id="vesting.why.sustainable.lead" tag="span" /></p>
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
                        <h4 className="h6 fw-bold mb-2"><LocalizedText id="vesting.why.decentralized.title" tag="span" /></h4>
                        <p className="small text-muted mb-0"><LocalizedText id="vesting.why.decentralized.lead" tag="span" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community-Driven Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-3">
                    <i className="fas fa-users text-success me-2"></i><LocalizedText id="vesting.community.title" tag="span" />
                  </h2>
                  <LocalizedText id="vesting.community.lead" tag="p" className="mb-0" />
                </div>
              </div>

              {/* Generational Asset Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-3">
                    <i className="fas fa-infinity text-primary me-2"></i><LocalizedText id="vesting.generational.title" tag="span" />
                  </h2>
                  <LocalizedText id="vesting.generational.lead" tag="p" className="mb-0" />
                </div>
              </div>

              {/* Looking Ahead Card */}
              <div className="card feature-card mb-4">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-3">
                    <i className="fas fa-eye text-info me-2"></i><LocalizedText id="vesting.ahead.title" tag="span" />
                  </h2>
                  <LocalizedText id="vesting.ahead.lead" tag="p" className="mb-0" />
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
                  <h2 className="h3 fw-bold mb-0"><LocalizedText id="vesting.final_message" tag="span" /></h2>
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
              <LocalizedText id="site.promo" tag="h2" className="h5 mb-3" />
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
