import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">Abay GERD Token</h1>
              <p className="lead fs-4 mb-4 opacity-90">
                Abay GERD Token distribution is LIVE! Get your hands on 10,000 free GERD tokens and join the financial revolution.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <Link href="/claim-form" className="btn btn-light btn-lg cta-button">
                  <i className="fas fa-gift me-2"></i>Claim Your Tokens
                </Link>
                <button 
                  type="button" 
                  className="btn btn-outline-light btn-lg" 
                  data-bs-toggle="modal" 
                  data-bs-target="#changeModal"
                >
                  <i className="fas fa-bullhorn me-2"></i>Migration Announcement
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <Image 
                alt="AbayGERDToken" 
                className="hero-logo" 
                src="/image/gerdlogo.png"
                width={200}
                height={200}
                style={{ borderRadius: '50%', border: '5px solid rgba(255,255,255,0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





