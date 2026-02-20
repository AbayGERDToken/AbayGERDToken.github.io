import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ContractAddress from '@/components/ContractAddress';
import MigrationModal from '@/components/MigrationModal';
import FeatureCard from '@/components/FeatureCard';
import StatCard from '@/components/StatCard';

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="content-section py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <FeatureCard iconBg="bg-success-subtle" iconColor="text-success" center={true}>
                <div>
                  <p className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    GERD ቶክን የጋራ ዲጂታል ንብረት ነው፣ ለሕዝብ የተሰራ፣ ፍትሃዊ እና ግልፅ መዝገብ።
                  </p>
                  <p className="mb-0 text-muted">
                    ድርሻዎን በነፃ ይዉሰዱ። ከኢትዮጵያ 75ሺ GERD ቶክን ፣ ከቀሪዉ ዓለም 10ሺ GERD ቶክን ይደርሳችኋል።
                  </p>
                </div>
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>

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

      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">Ownership First. Value Formation Later.</h2>
              <p className="lead text-muted">
                Abay GERD Token (GERD) is a digital asset inspired by Ethiopia&apos;s Grand Renaissance Dam and the Abay River. It was created to spread ownership early, openly, and fairly.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <FeatureCard icon="fas fa-users" iconBg="bg-success-subtle" iconColor="text-success" title="People-First Distribution">
                No presale. No private allocation. No insider advantage. GERD is claimed by the community, not sold to early investors.
              </FeatureCard>
            </div>
            <div className="col-md-6">
              <FeatureCard icon="fas fa-hourglass-half" iconBg="bg-primary-subtle" iconColor="text-primary" title="Long-Term Design">
                GERD is built for patience and transparency: fixed supply, predictable annual release, and public on-chain verification.
              </FeatureCard>
            </div>
          </div>
          <div className="text-center mt-5">
            <p className="text-muted mb-4">
              The idea is simple: start with broad ownership today, then let long-term participation shape the future.
            </p>
            <Link href="/claim-form" className="btn btn-success btn-lg cta-button">
              <i className="fas fa-gift me-2"></i>Claim Your Free GERD
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                <i className="fas fa-chart-pie text-success me-2"></i>Tokenomics Made Simple
              </h2>
              <p className="lead text-muted">A clear supply model designed for long-term community participation</p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <StatCard number="120B" label="Total Supply" sublabel="Fixed maximum" />
            </div>
            <div className="col-md-4">
              <StatCard number="115B" label="Locked Reserve" sublabel="Released gradually over 115 years" />
            </div>
            <div className="col-md-4">
              <StatCard number="1B" label="Annual Release" sublabel="Every year until 2140" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-4">What Happens Each Year</h3>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="d-flex align-items-start">
                        <div className="feature-icon bg-success-subtle text-success me-3" style={{ width: '48px', height: '48px', fontSize: '20px' }}>
                          <i className="fas fa-parachute-box"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">500M GERD</h4>
                          <p className="small text-muted mb-0">Shared evenly across eligible holders</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-start">
                        <div className="feature-icon bg-warning-subtle text-warning me-3" style={{ width: '48px', height: '48px', fontSize: '20px' }}>
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
                        <div className="feature-icon bg-info-subtle text-info me-3" style={{ width: '48px', height: '48px', fontSize: '20px' }}>
                          <i className="fas fa-fire"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">250M GERD</h4>
                          <p className="small text-muted mb-0">Added to liquidity only if needed, otherwise burned</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="alert alert-light border mb-3">
                    <p className="mb-0 small">
                      Simple example: if fewer wallets hold GERD, each wallet gets a larger share of the yearly distribution. As more people join, each share becomes smaller. Early participation matters.
                    </p>
                  </div>

                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Snapshot Rule:</strong> Wallets holding GERD at the yearly snapshot can qualify
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Frequency:</strong> Once per year, every year, for 115 years
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <strong>Predictability:</strong> The release model is public and verifiable
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                <i className="fas fa-globe text-primary me-2"></i>Community Distribution
              </h2>
              <p className="lead text-muted">Built for inclusion, with special tribute access for Ethiopia</p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <FeatureCard icon="fas fa-globe-americas" iconBg="bg-primary-subtle" iconColor="text-primary" title="Global Claim" borderColor="primary" center={true}>
                <div className="text-center">
                  <div className="stat-number mb-2" style={{ fontSize: '2rem' }}>10,000</div>
                  <p className="text-muted mb-3">GERD per wallet</p>
                  <div className="badge bg-primary-subtle text-primary px-3 py-2">
                    <i className="fas fa-lock me-1"></i>Capped at 50,000 wallets
                  </div>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6">
              <FeatureCard icon="fas fa-flag" iconBg="bg-danger-subtle" iconColor="text-danger" title="Ethiopia-Specific Claim" borderColor="danger" center={true}>
                <div className="text-center">
                  <div className="stat-number mb-2" style={{ fontSize: '2rem', color: '#dc3545' }}>75,000</div>
                  <p className="text-muted mb-3">GERD per wallet</p>
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
                  GERD is claimed, not purchased. The goal is broad ownership distribution, not fundraising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">
                <i className="fas fa-balance-scale text-info me-2"></i>Store of Value (Conceptual)
              </h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <p className="mb-4">
                    As national money supplies expand over time, some people choose to diversify savings into scarce, transparent digital assets with predictable issuance.
                  </p>
                  <p className="mb-4">
                    GERD is designed with a fixed maximum supply and a publicly verifiable annual release schedule, creating a long-term digital ownership model.
                  </p>
                  <p className="mb-0">
                    GERD is a digital token, not legal tender, not a currency, and not intended to replace the Ethiopian birr. Users are responsible for complying with local laws and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                <i className="fas fa-file-contract text-primary me-2"></i>Transparency by Design
              </h2>
              <p className="lead text-muted">Built on Binance Smart Chain with open and verifiable contract logic</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <FeatureCard icon="fas fa-lock" iconBg="bg-success-subtle" iconColor="text-success" title="Long-Term Vesting">
                115 billion GERD are locked and released gradually over 115 years
              </FeatureCard>
            </div>
            <div className="col-md-4">
              <FeatureCard icon="fas fa-eye" iconBg="bg-warning-subtle" iconColor="text-warning" title="Public Verification">
                Supply and allocations are visible on-chain through public explorer data
              </FeatureCard>
            </div>
            <div className="col-md-4">
              <FeatureCard icon="fas fa-shield-alt" iconBg="bg-info-subtle" iconColor="text-info" title="No Hidden Minting">
                Token mechanics are fixed by smart contracts and designed for transparency
              </FeatureCard>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto text-center">
              <p className="text-muted">
                The Abay GERD Token contracts are publicly auditable on{' '}
                <a href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c#code" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  BSCScan<i className="fas fa-external-link-alt ms-1 small"></i>
                </a>
                {' '}and shared via{' '}
                <a href="https://github.com/AbayGERDToken" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <i className="fab fa-github me-1"></i>GitHub<i className="fas fa-external-link-alt ms-1 small"></i>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">
                <i className="fas fa-lightbulb text-warning me-2"></i>How GERD Can Be Used
              </h2>
              <p className="lead text-muted">Practical, community-focused participation use cases</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <FeatureCard icon="fas fa-user-check" iconBg="bg-success-subtle" iconColor="text-success" title="Digital Ownership">
                <div className="text-center">
                  <p className="small text-muted mb-0">Hold a transparent on-chain digital asset</p>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard icon="fas fa-graduation-cap" iconBg="bg-info-subtle" iconColor="text-info" title="Learning Tool">
                <div className="text-center">
                  <p className="small text-muted mb-0">Explore blockchain basics through real participation</p>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard icon="fas fa-users" iconBg="bg-primary-subtle" iconColor="text-primary" title="Community Access">
                <div className="text-center">
                  <p className="small text-muted mb-0">Join a global holder network rooted in Ethiopian heritage</p>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard icon="fas fa-seedling" iconBg="bg-warning-subtle" iconColor="text-warning" title="Voluntary Staking">
                <div className="text-center">
                  <p className="small text-muted mb-0">Participate in long-term reward mechanisms</p>
                </div>
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">
                <i className="fas fa-medal text-warning me-2"></i>Honoring GERD Pioneers
              </h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <p className="lead mb-4">
                    The Grand Ethiopian Renaissance Dam is a historic people-powered achievement. GERD token includes symbolic recognition for key contributors.
                  </p>
                  <p className="mb-4">
                    Symbolic grants of <strong>10 million GERD</strong> are reserved for pioneers and are allocated from a separate recognition pool.
                  </p>

                  <div className="row g-4 mt-4">
                    <div className="col-md-6">
                      <div className="card border-primary h-100">
                        <div className="card-body p-4">
                          <h3 className="h5 fw-bold mb-3">🇪🇹 Engineer Simegnew Bekele</h3>
                          <p className="text-muted mb-3">
                            Remembered for courageous leadership and service during one of Ethiopia&apos;s most important infrastructure projects.
                          </p>
                          <button
                            type="button"
                            className="btn btn-link text-decoration-none p-0 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#simegnewDetailModal"
                          >
                            <i className="fas fa-circle-info me-1"></i>Read full details
                          </button>
                          <p className="mb-2 small"><strong>10 million GERD</strong> reserved at:</p>
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
                            Recognized for the long-term national vision that helped launch and sustain the GERD project.
                          </p>
                          <button
                            type="button"
                            className="btn btn-link text-decoration-none p-0 mb-3"
                            data-bs-toggle="modal"
                            data-bs-target="#melesDetailModal"
                          >
                            <i className="fas fa-circle-info me-1"></i>Read full details
                          </button>
                          <p className="mb-2 small"><strong>10 million GERD</strong> reserved at:</p>
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
                      This is a tribute to service and legacy, and part of the broader community-first narrative behind GERD token.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section bg-success-subtle">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">
                <i className="fas fa-hand-holding-heart text-success me-2"></i>Claim Your Share
              </h2>
              <p className="lead mb-4">
                Participation is open. Claim your free GERD and become part of a long-term digital ownership community.
              </p>
              <p className="mb-4 text-muted">
                GERD is a digital asset for participation and transparency. It is not legal tender and not affiliated with any government institution.
              </p>
              <Link href="/claim-form" className="btn btn-success btn-lg cta-button">
                <i className="fas fa-gift me-2"></i>Start Free Claim
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">
                <i className="fas fa-route text-primary me-2"></i>Community Milestone Roadmap
              </h2>
              <div className="card border-primary shadow-sm">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <div className="stat-number mb-2" style={{ fontSize: '2.5rem' }}>10,000</div>
                    <p className="lead text-muted">Unique Wallet Holders Target</p>
                  </div>
                  <p className="mb-4 text-center">
                    As holder participation grows, GERD can pursue broader accessibility milestones. The priority is healthy grassroots adoption before expansion.
                  </p>
                  <div className="row g-3 mt-4">
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <i className="fas fa-users fa-2x text-primary mb-3"></i>
                        <h4 className="h6 fw-bold">Stronger Community Base</h4>
                        <p className="small text-muted mb-0">Build with real holders first</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <i className="fas fa-globe fa-2x text-success mb-3"></i>
                        <h4 className="h6 fw-bold">Wider Access</h4>
                        <p className="small text-muted mb-0">Expand discovery for global participants</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3">
                        <i className="fas fa-shield-alt fa-2x text-warning mb-3"></i>
                        <h4 className="h6 fw-bold">Trust Through Transparency</h4>
                        <p className="small text-muted mb-0">Keep all progress public and verifiable</p>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-light border mt-4 mb-0">
                    <p className="mb-0">
                      The roadmap remains community-first: participation and transparency come before aggressive growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">
                <i className="fas fa-scale-balanced text-warning me-2"></i>Supply Perspective: BTC, DOGE, GERD
              </h2>
              <div className="card border-warning shadow-sm">
                <div className="card-body p-5">
                  <p className="mb-4">
                    Bitcoin is known for fixed supply and predictable issuance. Dogecoin is known for broad adoption but adds new supply every year without a hard cap.
                  </p>
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="stat-card text-center">
                        <div className="stat-number" style={{ fontSize: '2rem' }}>DOGE</div>
                        <p className="text-muted mb-0">~5B new tokens per year, no max supply cap</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="stat-card text-center">
                        <div className="stat-number" style={{ fontSize: '2rem', color: '#198754' }}>GERD</div>
                        <p className="text-muted mb-0">1B per year from a fixed 120B maximum supply</p>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-warning border-warning mb-0">
                    <p className="mb-0">
                      Simple takeaway: GERD focuses on low annual dilution with a hard cap and long-term release discipline.
                    </p>
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none p-0 mt-2"
                      data-bs-toggle="modal"
                      data-bs-target="#supplyPerspectiveModal"
                    >
                      <i className="fas fa-circle-info me-1"></i>Read full supply comparison
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="supplyPerspectiveModal" tabIndex={-1} aria-labelledby="supplyPerspectiveModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="supplyPerspectiveModalLabel">Supply Perspective: BTC, DOGE, GERD</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Bitcoin introduced hard supply limits and predictable issuance. Dogecoin demonstrated strong community participation, but it keeps adding approximately 5 billion tokens per year and has no maximum supply cap.
              </p>
              <p>
                GERD follows a different structure: 1 billion tokens released per year, fixed maximum supply of 120 billion, and the majority of supply locked under a long-term vesting model.
              </p>
              <div className="alert alert-light border">
                <p className="mb-2"><strong>Inflation perspective (structure only):</strong></p>
                <ul className="mb-0">
                  <li>DOGE: ongoing yearly issuance with no hard cap</li>
                  <li>GERD: 1B/year from a capped supply (about 0.83% of max supply annually)</li>
                </ul>
              </div>
              <p className="mb-0">
                This section is about token supply structure, not a promise of financial returns or future price outcomes.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="simegnewDetailModal" tabIndex={-1} aria-labelledby="simegnewDetailModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="simegnewDetailModalLabel">🇪🇹 Engineer Simegnew Bekele — Full Tribute Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                As Chief Project Manager of the Grand Ethiopian Renaissance Dam, Engineer Simegnew Bekele represented resilience, discipline, and long-term national commitment.
              </p>
              <p>
                He led through intense technical and operational pressure, and his contribution remains a defining part of GERD&apos;s legacy. This symbolic allocation honors that service and keeps his contribution visible in the digital era.
              </p>
              <div className="alert alert-light border mb-0">
                <p className="mb-0">
                  Reserved symbolic grant: <strong>10 million GERD</strong> from the recognition pool, separate from the long-term locked reserve.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="melesDetailModal" tabIndex={-1} aria-labelledby="melesDetailModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="melesDetailModalLabel">🇪🇹 Prime Minister Meles Zenawi — Full Tribute Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Prime Minister Meles Zenawi is recognized for the strategic vision and leadership that helped launch one of Ethiopia&apos;s most significant infrastructure projects.
              </p>
              <p>
                His role in establishing a generational development direction continues to shape the GERD narrative. This symbolic grant is a digital tribute to that long-term national vision.
              </p>
              <div className="alert alert-light border mb-0">
                <p className="mb-0">
                  Reserved symbolic grant: <strong>10 million GERD</strong> from the recognition pool, separate from the long-term locked reserve.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-success-subtle py-5 mb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="h4 mb-3">
                A DIGITAL OWNERSHIP PROJECT ROOTED IN ETHIOPIA, OPEN TO THE WORLD. CLAIM YOUR SHARE, LEARN THE MODEL, AND GROW WITH THE COMMUNITY.
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
