import Image from 'next/image';
import LocalizedText from '@/components/LocalizedText';

export default function QnA() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-question-circle me-3"></i><LocalizedText id="qna.hero.title" tag="span" />
                </h1>
                <p className="lead fs-5 opacity-90">
                  <LocalizedText id="qna.hero.lead" tag="span" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Rewards Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="h3 fw-bold mb-5 text-center">
                <i className="fas fa-gift text-success me-2"></i><LocalizedText id="qna.rewards_title" tag="span" />
              </h2>
              
              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-flag text-danger me-2"></i><LocalizedText id="qna.rewards.q1.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.rewards.q1.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-globe text-primary me-2"></i><LocalizedText id="qna.rewards.q2.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.rewards.q2.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-balance-scale text-warning me-2"></i><LocalizedText id="qna.rewards.q3.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.rewards.q3.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-exchange-alt text-success me-2"></i><LocalizedText id="qna.rewards.q4.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.rewards.q4.body" tag="span" />
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Vesting Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="h3 fw-bold mb-5 text-center">
                <i className="fas fa-book text-success me-2"></i><LocalizedText id="qna.vesting_title" tag="span" />
              </h2>
              
              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-lock text-primary me-2"></i><LocalizedText id="qna.vesting.q1.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.vesting.q1.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-user-shield text-info me-2"></i><LocalizedText id="qna.vesting.q2.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.vesting.q2.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-robot text-success me-2"></i><LocalizedText id="qna.vesting.q3.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.vesting.q3.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-chart-pie text-warning me-2"></i><LocalizedText id="qna.vesting.how_used.title" tag="span" />
                  </h3>
                  <LocalizedText id="qna.vesting.how_used.lead" tag="p" className="mb-3" />
                  <div className="row g-3 mb-3">
                    <div className="col-md-4">
                      <div className="bg-success-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-parachute-box text-success me-2"></i><LocalizedText id="qna.vesting.allocation1_amount" tag="span" />
                        </p>
                        <LocalizedText id="qna.vesting.allocation1_caption" tag="small" className="text-muted" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-warning-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-coins text-warning me-2"></i><LocalizedText id="qna.vesting.allocation2_amount" tag="span" />
                        </p>
                        <LocalizedText id="qna.vesting.allocation2_caption" tag="small" className="text-muted" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-info-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-fire text-info me-2"></i><LocalizedText id="qna.vesting.allocation3_amount" tag="span" />
                        </p>
                        <LocalizedText id="qna.vesting.allocation3_caption" tag="small" className="text-muted" />
                      </div>
                    </div>
                  </div>
                  <p className="mb-0"><LocalizedText id="qna.vesting.support" tag="span" /></p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-equals text-primary me-2"></i><LocalizedText id="qna.vesting.q5.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.vesting.q5.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-ban text-danger me-2"></i><LocalizedText id="qna.vesting.q6.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.vesting.q6.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-users text-success me-2"></i><LocalizedText id="qna.vesting.q7.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.vesting.q7.body" tag="span" />
                  </p>
                </div>
              </div>

              <div className="card qa-card border-success">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-lightbulb text-warning me-2"></i><LocalizedText id="qna.vesting.q8.title" tag="span" />
                  </h3>
                  <p className="mb-0">
                    <LocalizedText id="qna.vesting.q8.body" tag="span" />
                  </p>
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
