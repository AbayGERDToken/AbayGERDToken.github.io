import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ContractAddress from '@/components/ContractAddress';
import MigrationModal from '@/components/MigrationModal';
import FeatureCard from '@/components/FeatureCard';
import StatCard from '@/components/StatCard';
import CopyButton from '@/components/CopyButton';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Amharic Intro Section (Feature Card Frame) */}
      <section className="content-section py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <FeatureCard
                iconBg="bg-success-subtle"
                iconColor="text-success"
                center={true}
              >
                <div>
                  <p className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    GERD ቶክን የጋራ ዲጂታል ንብረት ነው፣ ለሕዝብ የተሰራ፣ ፍትሃዊ እና ግልፅ መዝገብ።
                  </p>
                  <p className="mb-0 text-muted">
                    ድርሻዎን በነፃ ይዉሰዱ።  ከኢትዮጵያ ለሚወስዱ 75ሺ GERD ቶክን ፣ ከቀሪዉ ዐለም 10ሺ ቶክን ይደርሳቹሀል።
                  </p>
                </div>
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Addresses */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6">
              <ContractAddress
                address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                label="GERD Contract Address"
              />
            </div>
            <div className="col-md-6">
              <ContractAddress
                address="0x660941bb4AA9FcBED00375673D21088A9d0C5019"
                label="Legacy CA (Do not use)"
                borderColor="#ffc107"
                isLegacy={true}
              />
            </div>
          </div>
        </div>
      </section>

      <MigrationModal />

      {/* Abstract Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">A Community-Powered Digital Legacy</h2>
              <p className="lead text-muted">
                Abay GERD Token (GERD) is a decentralized cryptocurrency inspired by Ethiopia&apos;s Grand Renaissance Dam and the Abay River. Built for the world but rooted in Ethiopia, GERD Token honors the people who made the dam possible.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <FeatureCard
                icon="fas fa-users"
                iconBg="bg-success-subtle"
                iconColor="text-success"
                title="Community-Powered"
              >
                While many crypto projects launch with seed investors or private sales, GERD takes a different path—one that is entirely community-powered. With no presales or insider allocations, the focus is on ensuring transparent and fair access for everyone from the start.
              </FeatureCard>
            </div>
            <div className="col-md-6">
              <FeatureCard
                icon="fas fa-lock"
                iconBg="bg-primary-subtle"
                iconColor="text-primary"
                title="Generational Impact"
              >
                With 120 billion total tokens and 115 billion locked under a 115-year release schedule, GERD Token is engineered for generational impact. Its smart contract is open-source and deployed on the Binance Smart Chain (BSC), ensuring full verifiability.
              </FeatureCard>
            </div>
          </div>
          <div className="text-center mt-5">
            <p className="text-muted mb-4">
              We especially invite participation from unbanked communities with internet access. Help us expand awareness and empower more people to claim their share of this national digital legacy.
            </p>
            <Link href="/claim-form" className="btn btn-success btn-lg cta-button">
              <i className="fas fa-gift me-2"></i>Claim your 10,000 GERD Tokens
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Tokenomics Section */}
      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                <i className="fas fa-chart-pie text-success me-2"></i>Tokenomics
              </h2>
              <p className="lead text-muted">A sustainable model designed for long-term value and community growth</p>
            </div>
          </div>
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <StatCard number="120B" label="Total Supply" sublabel="GERD Tokens" />
            </div>
            <div className="col-md-4">
              <StatCard number="115B" label="Locked Reserve" sublabel="Vesting over 115 years" />
            </div>
            <div className="col-md-4">
              <StatCard number="1B" label="Annual Release" sublabel="Per year until 2140" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-4">Annual Release Mechanism</h3>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="d-flex align-items-start">
                        <div
                          className="feature-icon bg-success-subtle text-success me-3"
                          style={{ width: '48px', height: '48px', fontSize: '20px' }}
                        >
                          <i className="fas fa-parachute-box"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">500M GERD</h4>
                          <p className="small text-muted mb-0">Airdropped evenly to all holders</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-start">
                        <div
                          className="feature-icon bg-warning-subtle text-warning me-3"
                          style={{ width: '48px', height: '48px', fontSize: '20px' }}
                        >
                          <i className="fas fa-coins"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">250M GERD</h4>
                          <p className="small text-muted mb-0">Allocated to staking rewards</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-start">
                        <div
                          className="feature-icon bg-info-subtle text-info me-3"
                          style={{ width: '48px', height: '48px', fontSize: '20px' }}
                        >
                          <i className="fas fa-fire"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">250M GERD</h4>
                          <p className="small text-muted mb-0">To liquidity or burned if pool is full</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Airdrop Frequency:</strong> Once per year, every year, for 115 years
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Eligibility:</strong> All wallets holding GERD at the time of distribution automatically qualify
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Adopter Advantage:</strong>The sooner you join, the bigger your airdrop share. Early adopters split the yearly airdrop with fewer wallets 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Token Distribution Section */}
      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                <i className="fas fa-globe text-primary me-2"></i>Token Distribution
              </h2>
              <p className="lead text-muted">
                100% community-driven with no presales, no early investor advantages, and no centralized ownership
              </p>
            </div>
          </div>
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <FeatureCard
                icon="fas fa-globe-americas"
                iconBg="bg-primary-subtle"
                iconColor="text-primary"
                title="Global Claim Offer"
                borderColor="primary"
                center={true}
              >
                <div className="text-center">
                  <div className="stat-number mb-2" style={{ fontSize: '2rem' }}>10,000</div>
                  <p className="text-muted mb-3">GERD tokens per wallet</p>
                  <div className="badge bg-primary-subtle text-primary px-3 py-2">
                    <i className="fas fa-lock me-1"></i>Capped at 50,000 wallets
                  </div>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6">
              <FeatureCard
                icon="fas fa-flag"
                iconBg="bg-danger-subtle"
                iconColor="text-danger"
                title="Ethiopia-Specific Claim"
                borderColor="danger"
                center={true}
              >
                <div className="text-center">
                  <div className="stat-number mb-2" style={{ fontSize: '2rem', color: '#dc3545' }}>75,000</div>
                  <p className="text-muted mb-3">GERD tokens per wallet</p>
                  <div className="badge bg-danger-subtle text-danger px-3 py-2">
                    <i className="fas fa-lock me-1"></i>Capped at 25,000 wallets
                  </div>
                </div>
              </FeatureCard>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="alert alert-info border-0 shadow-sm">
                <p className="mb-0">
                  This hybrid model promotes <strong>global inclusion</strong> while giving special priority to users in Ethiopia—especially <strong>unbanked communities</strong> with access to mobile devices and internet. It&apos;s our way of honoring the people behind the GERD project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Smart Contracts Section */}
      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                <i className="fas fa-file-contract text-primary me-2"></i>Smart Contracts
              </h2>
              <p className="lead text-muted">Built on Binance Smart Chain with full transparency and verifiability</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <FeatureCard
                icon="fas fa-lock"
                iconBg="bg-success-subtle"
                iconColor="text-success"
                title="Vesting Contract"
              >
                Locks 115 billion tokens and releases 1 billion per year over 115 years
              </FeatureCard>
            </div>
            <div className="col-md-4">
              <FeatureCard
                icon="fas fa-coins"
                iconBg="bg-warning-subtle"
                iconColor="text-warning"
                title="Staking Contract"
              >
                Enables users to lock GERD and earn rewards proportionally
              </FeatureCard>
            </div>
            <div className="col-md-4">
              <FeatureCard
                icon="fas fa-parachute-box"
                iconBg="bg-info-subtle"
                iconColor="text-info"
                title="Airdrop Tracker"
              >
                Determines reward eligibility via snapshot data
              </FeatureCard>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto text-center">
              <p className="text-muted">
                The Abay GERD Token is deployed on the <strong>Binance Smart Chain (BSC)</strong> using <strong>Solidity</strong>. All contracts will be <strong>open-source</strong>, publicly auditable via{' '}
                <a href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  BSCScan<i className="fas fa-external-link-alt ms-1 small"></i>
                </a>
                {' '}and{' '}
                <a href="https://github.com/AbayGERDToken" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <i className="fab fa-github me-1"></i>GitHub<i className="fas fa-external-link-alt ms-1 small"></i>
                </a>
                , reinforcing our core values of transparency and community trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Use Cases Section */}
      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                <i className="fas fa-lightbulb text-warning me-2"></i>Use Cases
              </h2>
              <p className="lead text-muted">Empowering communities through practical blockchain applications</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <FeatureCard
                icon="fas fa-store"
                iconBg="bg-success-subtle"
                iconColor="text-success"
                title="Digital Economy"
              >
                <div className="text-center">
                  <p className="small text-muted mb-0">Enables businesses to accept crypto</p>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard
                icon="fas fa-paper-plane"
                iconBg="bg-info-subtle"
                iconColor="text-info"
                title="Remittance Gateway"
              >
                <div className="text-center">
                  <p className="small text-muted mb-0">Low-cost transfers from the diaspora</p>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard
                icon="fas fa-universal-access"
                iconBg="bg-primary-subtle"
                iconColor="text-primary"
                title="Financial Inclusion"
              >
                <div className="text-center">
                  <p className="small text-muted mb-0">Access to digital money for the unbanked</p>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard
                icon="fas fa-hands-helping"
                iconBg="bg-warning-subtle"
                iconColor="text-warning"
                title="Community Development"
              >
                <div className="text-center">
                  <p className="small text-muted mb-0">Funding local projects via decentralized grants</p>
                </div>
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Special Token Distribution Section */}
      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">
                <i className="fas fa-medal text-warning me-2"></i>Special Token Distribution – Honoring the Pioneers of GERD
              </h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <p className="lead mb-4">
                    The construction of the <strong>Grand Ethiopian Renaissance Dam (GERD)</strong> is a defining achievement in Ethiopia&apos;s modern history—powered by the collective will of its people and the leadership of remarkable individuals.
                  </p>
                  <p className="mb-4">
                    To recognize those who played a pivotal role in this national effort, the Abay GERD Token team is awarding <strong>symbolic grants of 10 million GERD tokens</strong> to key pioneers. These tokens are not taken from the 115 billion locked national reserve but instead allocated from a separate pool set aside for special recognition and future development.
                  </p>

                  <div className="row g-4 mt-4">
                    <div className="col-md-6">
                      <div className="card border-primary h-100">
                        <div className="card-body p-4">
                          <h3 className="h5 fw-bold mb-3">🇪🇹 Engineer Simegnew Bekele</h3>
                          <p className="text-muted mb-3">
                            As the Chief Project Manager of GERD, Engineer Simegnew embodied resilience and conviction. His tireless leadership under pressure earned him widespread admiration. Though his life was tragically cut short, his contributions live on through the dam—and now through this digital tribute.
                          </p>
                          <p className="mb-2 small"><strong>10 million GERD tokens</strong> reserved at:</p>
                          <ContractAddress
                            address="0x75F5f7d68AD14f467c935d6B375D350614F9cF68"
                            label="Reserved Address"
                            isLegacy={true}
                            tokenAddress="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                            borderColor="#ffc107"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card border-primary h-100">
                        <div className="card-body p-4">
                          <h3 className="h5 fw-bold mb-3">🇪🇹 Prime Minister Meles Zenawi</h3>
                          <p className="text-muted mb-3">
                            As the visionary who championed the GERD from its inception, the late Prime Minister Meles Zenawi laid the groundwork for this generational project. His leadership and unwavering belief in Ethiopia&apos;s potential continue to inspire millions.
                          </p>
                          <p className="mb-2 small"><strong>10 million GERD tokens</strong> reserved at:</p>
                          <ContractAddress
                            address="0x75F5f7d68AD14f467c935d6B375D350614F9cF68"
                            label="Reserved Address"
                            isLegacy={true}
                            tokenAddress="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                            borderColor="#ffc107"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-light border mt-4 mb-0">
                    <p className="mb-0">
                      These gestures are a humble yet lasting tribute to their efforts. More leaders will be recognized in due time, as we continue to honor those whose actions have shaped not only GERD—but Ethiopia&apos;s future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Forward-Looking Statement Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">
                <i className="fas fa-eye text-info me-2"></i>Forward-Looking Statement
              </h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <p className="mb-4">
                    The <strong>Abay GERD Token</strong> is more than a digital asset—it&apos;s a national vision realized through blockchain. Inspired by the unity and ambition of the <strong>Grand Ethiopian Renaissance Dam (GERD)</strong>, this project aims to help build a <strong>decentralized digital economy</strong> that empowers Ethiopians and includes the world.
                  </p>
                  <p className="mb-4">
                    Currently, GERD tokens do not carry a monetary value in traditional fiat currencies. That&apos;s because their true worth isn&apos;t measured in dollars, but in what they represent: <strong>shared ownership</strong>, <strong>community pride</strong>, and <strong>long-term digital equity</strong>.
                  </p>
                  <p className="mb-4">
                    These tokens are distributed fairly and widely, with special access for the <strong>unbanked citizens</strong> who have been overlooked by global finance. Every GERD token issued is a symbol of national inclusion—an equitable stake in a generational project that reflects the people&apos;s contribution to GERD.
                  </p>
                  <p className="mb-4">
                    The real strength of GERD Tokens lies in their <strong>generational potential</strong>. They&apos;re designed to outlast market cycles—serving not just today&apos;s holders, but also future generations. A token claimed today could hold greater utility, cultural significance, or value tomorrow.
                  </p>
                  <p className="mb-4">
                    As the GERD project evolves and delivers national benefits like energy access, development funding, and economic opportunity, the token&apos;s symbolic and real-world value may grow—alongside a thriving holder community.
                  </p>
                  <p className="mb-0">
                    At its core, the Abay GERD Token is not a speculative venture. It&apos;s a <strong>movement of unity, transparency, and empowerment</strong>. With a fixed, predictable supply and a fair global distribution model, it is built to endure—just like the dam that inspired it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Claim Section */}
      <section className="content-section bg-success-subtle">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">
                <i className="fas fa-hand-holding-usd text-success me-2"></i>Claim Your Share
              </h2>
              <p className="lead mb-4">
                The <strong>Abay GERD Token team</strong> invites everyone to take part in this historic movement by <strong>claiming your free tokens</strong> and joining our mission-driven distribution process.
              </p>
              <p className="mb-5">
                Whether you&apos;re in Ethiopia or abroad, your participation helps expand a fair, people-powered digital economy that honors the GERD legacy.
              </p>
              <Link href="/claim-form" className="btn btn-success btn-lg cta-button">
                <i className="fas fa-gift me-2"></i>Claim Your Tokens Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CEX Listing Roadmap Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">
                <i className="fas fa-route text-primary me-2"></i>CEX Listing Roadmap
              </h2>
              <div className="card border-primary shadow-sm">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <div className="stat-number mb-2" style={{ fontSize: '2.5rem' }}>10,000</div>
                    <p className="lead text-muted">Unique Wallet Holders Milestone</p>
                  </div>
                  <p className="mb-4 text-center">
                    As part of our long-term strategy for accessibility and liquidity, <strong>Abay GERD Token</strong> will pursue a listing on a <strong>Centralized Exchange (CEX)</strong> once we reach this goal. This reflects <strong>organic adoption</strong> and <strong>grassroots support</strong>—the foundation of our people-powered mission.
                  </p>
                  <div className="row g-3 mt-4">
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <i className="fas fa-globe fa-2x text-primary mb-3"></i>
                        <h4 className="h6 fw-bold">Global Accessibility</h4>
                        <p className="small text-muted mb-0">Make GERD more accessible to a global audience</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <i className="fas fa-chart-line fa-2x text-success mb-3"></i>
                        <h4 className="h6 fw-bold">Boost Visibility</h4>
                        <p className="small text-muted mb-0">Increase trading opportunities and market presence</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <i className="fas fa-shield-alt fa-2x text-warning mb-3"></i>
                        <h4 className="h6 fw-bold">Strengthen Credibility</h4>
                        <p className="small text-muted mb-0">Enhance token utility and trust</p>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-light border mt-4 mb-0">
                    <p className="mb-0">
                      We believe this approach ensures a <strong>robust and active holder base</strong> is in place before strategic expansion—reinforcing our commitment to sustainable, community-led growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Fun Fact Section */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">
                <i className="fas fa-pizza-slice text-warning me-2"></i>Fun Fact: Bitcoin&apos;s $250 Million Pizza
              </h2>
              <div className="card border-warning shadow-sm">
                <div className="card-body p-5">
                  <p className="mb-4">
                    On <strong>May 22, 2010</strong>, programmer <strong>Laszlo Hanyecz</strong> made history by spending <strong>10,000 Bitcoins</strong> on two pizzas—valued at just <strong>$41</strong> at the time. This marked the <em>first real-world transaction</em> using cryptocurrency. The day is now celebrated globally as <strong>Bitcoin Pizza Day</strong>—a milestone that helped validate Bitcoin as a functional medium of exchange.
                  </p>
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="stat-card text-center">
                        <div className="stat-number" style={{ fontSize: '2rem' }}>1 BTC</div>
                        <p className="text-muted mb-0">= $25,000 (May 2023)</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="stat-card text-center">
                        <div className="stat-number" style={{ fontSize: '2rem', color: '#ffc107' }}>$250M</div>
                        <p className="text-muted mb-0">Value of those 10,000 BTC</p>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-warning border-warning mb-0">
                    <p className="mb-0">
                      <strong>A timeless reminder:</strong> today&apos;s small crypto steps could become tomorrow&apos;s monumental milestones.
                    </p>
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
              <h2 className="h4 mb-3">
                DISCOVER ABAY GERD TOKEN, THE ETHIOPIAN-BORN CRYPTOCURRENCY EMPOWERING OUR COMMUNITY.
                JOIN US IN CREATING A BRIGHTER FUTURE! #ABAYGERDTOKEN #ETHIOPIA #CRYPTO #GERD
              </h2>
            </div>
            <div className="col-md-4 text-center">
              <Image
                alt="AbayGERDToken"
                src="/image/abay_bluesky.png"
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


