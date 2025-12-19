import Link from 'next/link';
import Image from 'next/image';
import LocalizedText from '@/components/LocalizedText';
import am from '../../locales/am.json';
import ContractAddress from '@/components/ContractAddress';
import FeatureCard from '@/components/FeatureCard';
import StatCard from '@/components/StatCard';
import MigrationModal from '@/components/MigrationModal';

export default function AmharicHome() {
  return (
    <>
      {/* Amharic Hero */}
      <section className="hero-section bg-success-subtle">
        <div className="container">
          <div className="hero-content">
            <div className="row align-items-center py-5">
              <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                <LocalizedText id="hero.title" tag="h1" className="display-4 fw-bold mb-3" />
                <LocalizedText id="hero.lead" tag="p" className="lead fs-5 mb-4 opacity-90" />
                <div className="d-flex flex-column flex-sm-row gap-3 mb-4 justify-content-center justify-content-lg-start">
                  <Link href="/am/claim-form" className="btn btn-success btn-lg cta-button">
                    <i className="fas fa-gift me-2"></i><LocalizedText id="hero.claim" />
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline-success btn-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#changeModal"
                  >
                    <i className="fas fa-bullhorn me-2"></i>ስለ ስለእስትንፋሹ
                  </button>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <Image
                  alt="AbayGERDToken"
                  src="/image/gerdlogo.png"
                  className="hero-logo"
                  width={200}
                  height={200}
                  style={{ borderRadius: '50%', border: '5px solid rgba(255,255,255,0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MigrationModal />

      {/* Intro */}
      <section className="content-section py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <FeatureCard iconBg="bg-success-subtle" iconColor="text-success" center={true}>
                <div>
                  <LocalizedText id="intro.feature_p2" tag="p" className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '0.5rem' }} />
                  <LocalizedText id="intro.feature_p1" tag="p" className="mb-0 text-muted" />
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
                label="የGERD ውል አድራሻ"
              />
            </div>
            <div className="col-md-6">
              <ContractAddress
                address="0x660941bb4AA9FcBED00375673D21088A9d0C5019"
                label="የቀደሙ አድራሻ (አትጠቀሙ)"
                borderColor="#ffc107"
                isLegacy={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">የቶክኖሚክስ (Tokenomics)</h2>
              <p className="lead text-muted">ለረጅም ጊዜ የእሴት ማስቆጣጠር እና ማሻሻያ የተነደፈ አሰራር</p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <StatCard number="120B" label="አጠቃላይ አቅርቦት" sublabel="GERD ቶክኖች" />
            </div>
            <div className="col-md-4">
              <StatCard number="115B" label="የቆማ ምንዛሪ" sublabel="በ115 ዓመት ውስጥ ይፈጥራል" />
            </div>
            <div className="col-md-4">
              <StatCard number="1B" label="የአመት መወጣጠሪያ" sublabel="እያንዳንዱ ዓመት" />
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="text-muted mb-4">
              በልዩ ልዩ ቦታዎች ያሉ ሰዎች በቀላሉ ማስተዋወቅ እንዲችሉ እንደገና እንመክታለን።
            </p>
            <Link href="/am/claim-form" className="btn btn-success btn-lg cta-button">
              <i className="fas fa-gift me-2"></i>10,000 GERD ቶክን ይጠይቁ
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Token Distribution */}
      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">የቶክን ክፍፍል</h2>
              <p className="lead text-muted">100% ለሕብረት—አንድም እቅድ የለም፣ ዋና ባለቤት የለም</p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <FeatureCard icon="fas fa-globe-americas" iconBg="bg-primary-subtle" iconColor="text-primary" title="ዓለማዊ ክፍያ">
                <div className="text-center">
                  <div className="stat-number mb-2" style={{ fontSize: '2rem' }}>10,000</div>
                  <p className="text-muted mb-3">ቶክን ለእያንዳንዱ ወረቀት</p>
                  <div className="badge bg-primary-subtle text-primary px-3 py-2">
                    <i className="fas fa-lock me-1"></i>በ50,000 ወረቀቶች የተገደመ
                  </div>
                </div>
              </FeatureCard>
            </div>
            <div className="col-md-6">
              <FeatureCard icon="fas fa-flag" iconBg="bg-danger-subtle" iconColor="text-danger" title="ለኢትዮጵያ ልዩ ክፍያ">
                <div className="text-center">
                  <div className="stat-number mb-2" style={{ fontSize: '2rem', color: '#dc3545' }}>75,000</div>
                  <p className="text-muted mb-3">ቶክን ለእያንዳንዱ ወረቀት</p>
                  <div className="badge bg-danger-subtle text-danger px-3 py-2">
                    <i className="fas fa-lock me-1"></i>በ25,000 ወረቀቶች የተገደመ
                  </div>
                </div>
              </FeatureCard>
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
              <h2 className="display-5 fw-bold mb-4">የእርስዎን ክፍል ይጠይቁ</h2>
              <p className="lead mb-4">
                እኛ ሁሉንም ወደ ዊደም ባለመቀላቀሉ እንጋብዝ። ነጻ ቶክኖችን ይጠይቁና የዚህ ታሪካዊ ድርጅት ክፍል ይሁኑ።
              </p>
              <Link href="/am/claim-form" className="btn btn-success btn-lg cta-button">
                <i className="fas fa-gift me-2"></i>እኩልን ዛሬ ይጠይቁ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="bg-success-subtle py-5 mb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="h5 mb-3">
                አባይ GERD ቶክንን ያገኙ—ኢትዮጵያዊ የተቀደሰ ክፍል፣ ሕብረታችንን እና ታሪኩን ይከብሩ።
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
