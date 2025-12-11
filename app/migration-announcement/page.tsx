import Link from 'next/link';
import Image from 'next/image';
import ContractAddress from '@/components/ContractAddress';

export default function MigrationAnnouncement() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-exchange-alt me-3"></i>Official GERD Token Migration Announcement
                </h1>
                <p className="lead fs-5 opacity-90">Date: May 31, 2025</p>
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
              
              {/* Why Migration Section */}
              <div className="card feature-card mb-5">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold text-success mb-4">
                    <i className="fas fa-question-circle me-2"></i>Why was this migration necessary?
                  </h2>
                  <p className="mb-4">
                    The original GERD Token contract, deployed on April 23, 2023, was designed to support a long-term,
                    community-first initiative for digital value creation in underserved regions. During a routine
                    security audit, we identified a minor vulnerability in the allowance logic. No funds were lost,
                    but to maintain trust and transparency, we migrated to a new, immutable contract.
                  </p>
                  <div className="alert alert-warning border-warning">
                    <p className="mb-0">
                      <strong>99.99% of the legacy contract&apos;s supply has been burned to a dead address.</strong>{' '}
                      <a 
                        href="https://bscscan.com/token/0x660941bb4AA9FcBED00375673D21088A9d0C5019?a=0x000000000000000000000000000000000000dead" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none fw-bold"
                      >
                        View Burned Supply <i className="fas fa-external-link-alt ms-1"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* What's New Section */}
              <div className="card feature-card mb-5">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold text-success mb-4">
                    <i className="fas fa-star me-2"></i>What&apos;s new in the upgraded GERD contract?
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
                          <h4 className="h6 fw-bold mb-1">Immutable</h4>
                          <p className="small text-muted mb-0">No admin, no upgrade mechanism</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-ban"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">No Minting</h4>
                          <p className="small text-muted mb-0">Fixed supply, hard-capped forever</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-user-slash"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">Ownerless</h4>
                          <p className="small text-muted mb-0">No centralized privileges</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1">Hardened Security</h4>
                          <p className="small text-muted mb-0">Improved transferFrom() logic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <p className="mb-0">
                    <strong>Total Supply:</strong> 120,000,000,000 GERD (2 decimals) | <strong>ERC-20 Compliant:</strong> Fully standard and compatible
                  </p>
                </div>
              </div>

              {/* Contract Details Section */}
              <div className="card feature-card mb-5">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold text-success mb-4">
                    <i className="fas fa-file-contract me-2"></i>Contract Details
                  </h2>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <ContractAddress
                        address="0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                        label="New GERD Token Contract"
                      />
                    </div>
                    <div className="col-md-6">
                      <ContractAddress
                        address="0x660941bb4AA9FcBED00375673D21088A9d0C5019"
                        label="Legacy Contract (archived)"
                        borderColor="#ffc107"
                        isLegacy={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Airdrop Completed Section */}
              <div className="card feature-card border-success mb-5">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <div 
                      className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                      style={{ width: '80px', height: '80px', fontSize: '36px' }}
                    >
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h2 className="h3 fw-bold text-success mb-3">Airdrop Completed — What You Need to Know</h2>
                  </div>
                  <p className="text-center lead mb-4">
                    The token migration and airdrop process has successfully completed ahead of schedule.
                    All balances have been updated under the new contract.
                  </p>
                  <div className="alert alert-success text-center mb-0">
                    <p className="mb-0 fw-bold">
                      <i className="fas fa-info-circle me-2"></i>No action is required — if you held GERD before the migration, your new token balance is already in your wallet.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to View Section */}
              <div className="card feature-card mb-5">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold text-success mb-4">
                    <i className="fas fa-eye me-2"></i>How to View Your GERD Tokens
                  </h2>
                  <p className="mb-4">To view your new GERD token balance:</p>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '40px', height: '40px', fontSize: '18px', flexShrink: 0 }}
                        >
                          <span className="fw-bold">1</span>
                        </div>
                        <div>
                          <p className="mb-0">Open your wallet app (e.g., MetaMask, Trust Wallet)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '40px', height: '40px', fontSize: '18px', flexShrink: 0 }}
                        >
                          <span className="fw-bold">2</span>
                        </div>
                        <div>
                          <p className="mb-0">Select &quot;Import Token&quot; or &quot;Add Custom Token&quot;</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '40px', height: '40px', fontSize: '18px', flexShrink: 0 }}
                        >
                          <span className="fw-bold">3</span>
                        </div>
                        <div>
                          <p className="mb-0">Enter the contract details below</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '40px', height: '40px', fontSize: '18px', flexShrink: 0 }}
                        >
                          <span className="fw-bold">4</span>
                        </div>
                        <div>
                          <p className="mb-0">Save and refresh your wallet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contract-box mt-4">
                    <p className="mb-2 small text-muted">Contract Details:</p>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1">
                        <strong>Contract Address:</strong> <code className="text-break" style={{ wordBreak: 'break-all' }}>0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c</code>
                      </li>
                      <li className="mb-1">
                        <strong>Symbol:</strong> <code>GERD</code>
                      </li>
                      <li className="mb-0">
                        <strong>Decimals:</strong> <code>2</code>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Thank You Section */}
              <div className="card feature-card border-success mb-5">
                <div className="card-body p-5 text-center">
                  <h2 className="h3 fw-bold text-success mb-4">
                    <i className="fas fa-heart me-2"></i>Thank You
                  </h2>
                  <p className="lead mb-0">
                    Thank you for your continued trust in the GERD Token project. This migration strengthens our foundation
                    for the next phase of growth and guarantees a secure, transparent, and decentralized future.
                  </p>
                </div>
              </div>

              {/* Stay Connected Section */}
              <div className="card feature-card">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold text-success mb-4">
                    <i className="fas fa-link me-2"></i>Stay Connected
                  </h2>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <Link href="/" className="text-decoration-none d-block p-3 border rounded text-center feature-card">
                        <i className="fas fa-globe fa-2x text-success mb-2"></i>
                        <p className="mb-0 fw-bold">Website</p>
                      </Link>
                    </div>
                    <div className="col-md-4">
                      <a 
                        href="https://t.me/gerdtoken" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none d-block p-3 border rounded text-center feature-card"
                      >
                        <i className="fab fa-telegram fa-2x text-primary mb-2"></i>
                        <p className="mb-0 fw-bold">@gerdtoken <i className="fas fa-external-link-alt ms-1 small"></i></p>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a 
                        href="https://x.com/abaygerdtoken" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none d-block p-3 border rounded text-center feature-card"
                      >
                        <i className="fab fa-x-twitter fa-2x text-dark mb-2"></i>
                        <p className="mb-0 fw-bold">@abaygerdtoken <i className="fas fa-external-link-alt ms-1 small"></i></p>
                      </a>
                    </div>
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
              <h2 className="h5 mb-3">
                DISCOVER ABAY GERD TOKEN, THE ETHIOPIAN-BORN CRYPTOCURRENCY EMPOWERING OUR COMMUNITY AND SUPPORTING THE GRAND ETHIOPIAN RENAISSANCE DAM PROJECT.
                JOIN US IN CREATING A BRIGHTER FUTURE! #ABAYGERDTOKEN #ETHIOPIA #CRYPTO #GERD
              </h2>
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
