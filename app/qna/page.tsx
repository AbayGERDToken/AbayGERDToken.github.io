import Image from 'next/image';
import FooterCTA from '@/components/FooterCTA';

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
                  <i className="fas fa-question-circle me-3"></i>QnA: Frequently Asked Questions
                </h1>
                <p className="lead fs-5 opacity-90">
                  Get answers about distribution, long-term vesting, transparency, and risk disclosure
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
                <i className="fas fa-gift text-success me-2"></i>Why Are Token Rewards Different by Region?
              </h2>
              
              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-flag text-danger me-2"></i>Why do Ethiopia originated wallets receive 75,000 GERD while others get 10,000 GERD tokens?
                  </h3>
                  <p className="mb-0">
                    GERD is inspired by the Abay River and Ethiopia&apos;s Grand Ethiopian Renaissance Dam. Ethiopia receives a higher claim allocation as a tribute to the origin community of the project, while global participation remains open to everyone.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-globe text-primary me-2"></i>Why does the rest of the world receive 10,000 GERD?
                  </h3>
                  <p className="mb-0">
                    GERD is designed for broad participation across regions. The global 10,000 GERD claim keeps distribution open while maintaining a long-term supply framework.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-balance-scale text-warning me-2"></i>Isn&apos;t this unfair or discriminatory?
                  </h3>
                  <p className="mb-0">
                    The model is distribution-focused, not exclusion-focused. GERD has no presale, no private allocation, and no insider advantage. Every eligible user can participate; the regional distinction reflects tribute design, not restricted access.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-exchange-alt text-success me-2"></i>Will I still be able to trade or earn more GERD tokens?
                  </h3>
                  <p className="mb-0">
                    GERD is a digital asset that can participate in open-market activity where permitted. This is not a promise of returns. Participation outcomes depend on adoption, market conditions, and legal compliance.
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
                <i className="fas fa-book text-success me-2"></i>Understanding Vesting in Simple Terms
              </h2>
              
              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-lock text-primary me-2"></i>What is &quot;vesting&quot; and why should I care?
                  </h3>
                  <p className="mb-0">
                    Vesting means token release follows a fixed public schedule instead of one-time distribution. For GERD, <strong>1 billion tokens</strong> are released each year for <strong>115 years</strong>, which supports predictable supply expansion and long-term participation.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-user-shield text-info me-2"></i>Who controls the tokens right now?
                  </h3>
                  <p className="mb-0">
                    <strong>No single person controls the 115 billion GERD tokens anymore.</strong> They have been transferred to the vesting smart contract on the blockchain. Human control has been removed entirely — not even the original creator can move or spend those tokens outside the vesting schedule. The smart contract is now the sole custodian, and it will only release tokens automatically, once per year, as programmed.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-robot text-success me-2"></i>What happens now that the vesting contract is live?
                  </h3>
                  <p className="mb-0">
                    The 115 billion tokens are now safely locked away and no longer in anyone&apos;s hands. A self-running program — called a smart contract — is in charge. Every year it automatically releases 1 billion tokens, like clockwork. There are no passwords, no keys, and no one who can speed it up or slow it down. Once it was set in motion, it became unstoppable.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-chart-pie text-warning me-2"></i>How are those 1 billion tokens used every year?
                  </h3>
                  <p className="mb-3">Each year, when 1 billion GERD tokens are released:</p>
                  <div className="row g-3 mb-3">
                    <div className="col-md-4">
                      <div className="bg-success-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-parachute-box text-success me-2"></i>500 million GERD
                        </p>
                        <small className="text-muted">Divided and sent to all holders</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-warning-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-coins text-warning me-2"></i>250 million GERD
                        </p>
                        <small className="text-muted">Used for staking rewards</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-info-subtle p-3 rounded">
                        <p className="mb-0 fw-bold">
                          <i className="fas fa-fire text-info me-2"></i>250 million GERD
                        </p>
                        <small className="text-muted">To liquidity or burned</small>
                      </div>
                    </div>
                  </div>
                  <p className="mb-0">This structure supports long-term health, rewards active holders, and avoids inflation.</p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-equals text-primary me-2"></i>Will everyone get the same amount?
                  </h3>
                  <p className="mb-0">
                    The annual holder allocation is designed to be shared across eligible wallets captured at the yearly snapshot. Earlier participation can result in more years of eligibility over time.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-ban text-danger me-2"></i>Can anyone stop or change this system later?
                  </h3>
                  <p className="mb-0">
                    The vesting model is schedule-based and designed to limit discretionary intervention. Participants should still verify the current contract state and release conditions directly on-chain.
                  </p>
                </div>
              </div>

              <div className="card qa-card">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-users text-success me-2"></i>Why is this good for the community?
                  </h3>
                  <p className="mb-0">
                    This system is intended to improve transparency and reduce concentration risk by using predefined release rules. It supports a long-term framework for community participation across generations.
                  </p>
                </div>
              </div>

              <div className="card qa-card border-success">
                <div className="card-body p-5">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="fas fa-lightbulb text-warning me-2"></i>So what should I do now?
                  </h3>
                  <p className="mb-0">
                    Hold GERD in your own wallet and follow official project updates about yearly snapshot timing and distribution rules. Always verify on-chain information and comply with local laws.
                  </p>
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
