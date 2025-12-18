import Image from 'next/image';
import LocalizedText from '@/components/LocalizedText';

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
                  <i className="fas fa-code me-3"></i><LocalizedText id="dev.hero.title" tag="span" />
                </h1>
                <LocalizedText id="dev.hero.lead" tag="p" className="lead fs-5 opacity-90" />
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
                <i className="fas fa-code text-success me-2"></i><LocalizedText id="dev.how.title" tag="span" />
              </h2>
              <LocalizedText id="dev.how.lead" tag="p" className="lead mb-5" />

              {/* GitHub Link */}
              <div className="text-center py-4 mb-4">
                <a
                  href="https://github.com/AbayGERDToken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg"
                >
                  <i className="fab fa-github me-2"></i><LocalizedText id="dev.cta.github" />
                  <i className="fas fa-external-link-alt ms-1"></i>
                </a>
              </div>

              <div className="card mb-4 shadow-sm feature-card">
                <div className="card-body">
                  <h3 className="h5 mb-3">
                    <i className="fas fa-bullseye text-success me-2"></i><LocalizedText id="dev.goals.title" tag="span" />
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <LocalizedText id="dev.goals.item1" />
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <LocalizedText id="dev.goals.item2" />
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <LocalizedText id="dev.goals.item3" />
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <LocalizedText id="dev.goals.item4" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm feature-card">
                <div className="card-body">
                  <h3 className="h5 mb-3">
                    <i className="fas fa-hands-helping text-success me-2"></i><LocalizedText id="dev.help.title" tag="span" />
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <LocalizedText id="dev.help.item1" />
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <LocalizedText id="dev.help.item2" />
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <LocalizedText id="dev.help.item3" />
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <LocalizedText id="dev.help.item4" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm feature-card">
                <div className="card-body">
                  <h3 className="h5 mb-3">
                    <i className="fas fa-gift text-success me-2"></i><LocalizedText id="dev.incentives.title" tag="span" />
                  </h3>
                  <LocalizedText id="dev.incentives.body" tag="p" className="mb-0" />
                </div>
              </div>

              <div className="text-center mt-5">
                <a
                  href="mailto:contact@abaygerdtoken.com"
                  className="btn btn-primary btn-lg"
                >
                  <i className="fas fa-envelope me-2"></i><LocalizedText id="dev.cta.email" />
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
