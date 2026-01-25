import Link from 'next/link';

const pillars = [
  {
    icon: 'fas fa-code-branch',
    title: 'Open-Source Development',
    description:
      'All major components live inside the AbayGERDToken GitHub organization for public review.',
    bullets: [
      'Smart contracts and vesting logic',
      'Frontend dashboards and claim flows',
      'Backend services for validation and rate limiting',
    ],
  },
  {
    icon: 'fas fa-clock-rotate-left',
    title: 'Active & Ongoing Work',
    description: 'Continuous improvements ship through visible Git commits and releases.',
    bullets: [
      'Feature additions tied to live site updates',
      'Bug fixes and UI refinements tracked in history',
      'Documentation updates alongside product changes',
    ],
  },
  {
    icon: 'fas fa-bullseye',
    title: 'Testnet-First Philosophy',
    description: 'Major changes prove themselves on testnet before mainnet rollout.',
    bullets: [
      'Logic deployed and exercised on testnet',
      'Public dashboards enable independent verification',
      'Issues resolved prior to production release',
    ],
  },
];

const architecture = [
  {
    title: 'Frontend',
    subtitle: 'Website, claim forms, vesting dashboards',
    icon: 'fas fa-laptop-code',
  },
  {
    title: 'Smart Contracts',
    subtitle: 'Token contract and vesting (testnet & mainnet)',
    icon: 'fas fa-shield-halved',
  },
  {
    title: 'Backend',
    subtitle: 'Claim validation, rate limiting, vesting execution',
    icon: 'fas fa-server',
  },
];

const immutability = [
  'Core contracts are immutable with no hidden admin controls',
  'Time-locked over a 115-year vesting schedule',
  'No ownership transfers in production deployments',
  'Predictable rules protect holders from manipulation',
];

const tokenFlow = [
  'Official project wallets are publicly listed',
  'Locked supply, released tokens, and remaining balance are trackable',
  'Distribution activity is verifiable on-chain',
  'Every movement of tokens can be followed transparently',
];

const community = [
  'No presale and no private allocation advantages',
  'Fair claim and distribution rules for all participants',
  'Decisions communicated via documentation and AMA pages',
];

const meaning = [
  'Inspect the code and its history',
  'Verify contracts and vesting parameters',
  'Follow token flows and wallet activity',
  'Expect nothing critical to be hidden',
];

export default function DeveloperTransparencyPage() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <span className="badge bg-success-subtle text-success mb-3">Developer Transparency</span>
            <h1 className="display-5 fw-bold mb-3">Built for Openness, Verifiability, and Long-Term Trust</h1>
            <p className="lead text-muted mb-4">
              Every critical component of Abay GERD Token is intentionally public, auditable, and designed so the
              community can verify how the project operates—today and decades from now.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="https://github.com/AbayGERDToken" className="btn btn-success btn-lg cta-button" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github me-2"></i>View GitHub Organization
              </Link>
              <a
                className="btn btn-outline-success btn-lg"
                href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-network-wired me-2"></i>View On-Chain Activity
              </a>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {pillars.map((pillar) => (
            <div className="col-md-4" key={pillar.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="feature-icon bg-success-subtle text-success d-flex align-items-center justify-content-center me-3"
                      style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '1.25rem' }}
                    >
                      <i className={pillar.icon}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">{pillar.title}</h3>
                  </div>
                  <p className="text-muted mb-3">{pillar.description}</p>
                  <ul className="list-unstyled mb-0">
                    {pillar.bullets.map((item) => (
                      <li className="d-flex align-items-start mb-2" key={item}>
                        <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-5">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="feature-icon bg-primary-subtle text-primary d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '1.25rem' }}
                  >
                    <i className="fas fa-diagram-project"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-0">Structured &amp; Secure Architecture</h3>
                </div>
                <p className="text-muted">Separation of concerns keeps each surface secure, auditable, and testable.</p>
                <div className="row g-3">
                  {architecture.map((item) => (
                    <div className="col-12" key={item.title}>
                      <div className="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                        <div className="me-3 text-success" style={{ fontSize: '1.25rem' }}>
                          <i className={item.icon}></i>
                        </div>
                        <div>
                          <div className="fw-bold">{item.title}</div>
                          <div className="text-muted small">{item.subtitle}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="feature-icon bg-warning-subtle text-warning d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '1.25rem' }}
                  >
                    <i className="fas fa-flask"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-0">Testnet-First Execution</h3>
                </div>
                <p className="text-muted">
                  New logic proves itself on testnet before it can affect mainnet holders, with public dashboards for
                  anyone to review.
                </p>
                <ol className="mb-0 ps-3">
                  <li className="mb-2 text-muted">Deploy new logic to testnet and open dashboards</li>
                  <li className="mb-2 text-muted">Invite community verification and fix surfaced issues</li>
                  <li className="text-muted">Promote to mainnet only after testnet stability</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="feature-icon bg-danger-subtle text-danger d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '1.25rem' }}
                  >
                    <i className="fas fa-lock"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-0">Immutable &amp; Time-Locked Rules</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  {immutability.map((item) => (
                    <li className="d-flex align-items-start mb-2" key={item}>
                      <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="feature-icon bg-info-subtle text-info d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '1.25rem' }}
                  >
                    <i className="fas fa-route"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-0">Transparent Token Flow</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  {tokenFlow.map((item) => (
                    <li className="d-flex align-items-start mb-2" key={item}>
                      <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="feature-icon bg-secondary-subtle text-secondary d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '1.25rem' }}
                  >
                    <i className="fas fa-people-group"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-0">Community-First Design</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  {community.map((item) => (
                    <li className="d-flex align-items-start mb-2" key={item}>
                      <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="feature-icon bg-success-subtle text-success d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '1.25rem' }}
                  >
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-0">What Transparency Means Here</h3>
                </div>
                <ul className="list-unstyled mb-3">
                  {meaning.map((item) => (
                    <li className="d-flex align-items-start mb-2" key={item}>
                      <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="alert alert-success mb-0" role="alert">
                  Nothing critical is hidden—review the code, the commits, and the chain history anytime.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
