import Image from 'next/image';

export default function Dev() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-code me-3"></i>Join the GERD Developer Initiative
                </h1>
                <p className="lead fs-5 opacity-90">
                  Develop the future with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container">
          <div className="row g-4">
            {/* Left Column */}
            <div className="col-lg-8">
              <h2 className="h1 mb-4">
                <i className="fas fa-code text-success me-2"></i>Develop the Future with Us
              </h2>
              <p className="lead mb-5">
                We are calling on developers, testers, and designers to join the <strong>GERD Mobile App Development Initiative</strong>. Together, we&apos;ll empower users with secure, user-friendly tools to interact with the Abay GERD Token ecosystem.
              </p>

              {/* GitHub Link */}
              <div className="text-center py-4 mb-4">
                <a
                  href="https://github.com/AbayGERDToken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg"
                >
                  <i className="fab fa-github me-2"></i>View & Contribute on GitHub
                  <i className="fas fa-external-link-alt ms-1"></i>
                </a>
              </div>

              <div className="card mb-4 shadow-sm feature-card">
                <div className="card-body">
                  <h3 className="h5 mb-3">
                    <i className="fas fa-bullseye text-success me-2"></i>Project Goals
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Build a mobile app to view balances and interact with GERD tokens
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Enable QR scanning of GERD wallet addresses
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Support token claiming, tracking, and sending
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Keep it simple, secure, and community-owned
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm feature-card">
                <div className="card-body">
                  <h3 className="h5 mb-3">
                    <i className="fas fa-hands-helping text-success me-2"></i>How You Can Help
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Contribute to frontend or backend mobile development (React Native, Flutter, etc.)
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Design user interfaces and improve user experience
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Help test the app across devices and environments
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Share feedback and ideas on GitHub or Telegram
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm feature-card">
                <div className="card-body">
                  <h3 className="h5 mb-3">
                    <i className="fas fa-gift text-success me-2"></i>Incentives
                  </h3>
                  <p className="mb-0">
                    We will reward contributors with <strong>GERD tokens</strong> based on their impact and commitment. Active developers will also be recognized on our public contributor page.
                  </p>
                </div>
              </div>

              <div className="text-center mt-5">
                <a
                  href="mailto:contact@abaygerdtoken.com"
                  className="btn btn-primary btn-lg"
                >
                  <i className="fas fa-envelope me-2"></i>Email us Now – Let&apos;s Build Together
                </a>
              </div>
            </div>

            {/* Right Column with Image */}
            <div className="col-lg-4 d-flex justify-content-center align-items-start">
              <div className="position-relative" style={{ maxHeight: '850px', width: '100%' }}>
                <Image
                  src="/dev/image0.png"
                  alt="Join GERD App Project"
                  width={600}
                  height={850}
                  className="img-fluid rounded shadow-lg"
                  style={{ maxHeight: '850px', objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
