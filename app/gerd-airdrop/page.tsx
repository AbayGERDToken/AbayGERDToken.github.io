'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import LocalizedText from '@/components/LocalizedText';
import { useTranslations } from 'next-intl';

export default function GerdAirdrop() {
  const t = useTranslations();
  const [countdown, setCountdown] = useState<string>(t('airdrop.loading.calculating'));

  useEffect(() => {
    const startDate = new Date('2025-04-24T00:00:00Z');

    const updateCountdown = () => {
      // Recalculate next release date dynamically each time to ensure accuracy after year transitions
      const now = new Date();
      const yearsElapsed = Math.floor((now.getTime() - startDate.getTime()) / (365.25 * 24 * 3600 * 1000));
      
      const nextRelease = new Date(startDate.getTime());
      nextRelease.setUTCFullYear(startDate.getUTCFullYear() + yearsElapsed + 1);

      const diff = nextRelease.getTime() - now.getTime();
      if (diff <= 0) {
        setCountdown(t('airdrop.available_now'));
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-parachute-box me-3"></i>
                  <LocalizedText id="airdrop.hero.title" tag="span" />
                </h1>
                <p className="lead fs-5 opacity-90">
                  <LocalizedText id="airdrop.hero.lead" tag="span" />
                </p>
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
              
              {/* Countdown Card */}
              <div className="card feature-card mb-5">
                <div className="card-body p-5 text-center">
                  <h2 className="h4 fw-bold mb-4">
                    <i className="fas fa-clock me-2"></i>
                    <LocalizedText id="airdrop.next_release" tag="span" />
                  </h2>
                  <div className="countdown-box">
                    <p className="countdown-text mb-0">{countdown}</p>
                  </div>
                </div>
              </div>

              {/* Formula Card */}
              <div className="card feature-card mb-5">
                <div className="card-body p-5">
                  <h2 className="h4 fw-bold mb-4">
                    <i className="fas fa-calculator me-2"></i>
                    <LocalizedText id="airdrop.formula.title" tag="span" />
                  </h2>
                  <div className="bg-light p-4 rounded text-center mb-4">
                    <LocalizedText id="airdrop.formula.per_user" tag="p" className="h5 mb-2" />
                    <div className="display-6 fw-bold text-success">
                      <sup style={{ fontSize: '1.5rem' }}>500,000,000 GERD</sup>⁄
                      <sub style={{ fontSize: '1.5rem' }}>Number of Wallets</sub>
                    </div>
                  </div>
                  <LocalizedText id="airdrop.formula.lead" tag="p" className="text-muted mb-0" />
                </div>
              </div>

              {/* Table Card */}
              <div className="card feature-card mb-5">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-table me-2"></i>
                    <LocalizedText id="airdrop.projections.title" tag="span" />
                  </h2>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead className="table-success">
                        <tr>
                          <th><LocalizedText id="airdrop.projections.table.wallets" tag="span" /></th>
                          <th><LocalizedText id="airdrop.projections.table.per_wallet" tag="span" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>1,000</td><td className="fw-bold text-success">500,000</td></tr>
                        <tr><td>5,000</td><td className="fw-bold text-success">100,000</td></tr>
                        <tr><td>10,000</td><td className="fw-bold text-success">50,000</td></tr>
                        <tr><td>50,000</td><td className="fw-bold text-success">10,000</td></tr>
                        <tr><td>100,000</td><td className="fw-bold text-success">5,000</td></tr>
                        <tr><td>200,000</td><td className="fw-bold text-success">2,500</td></tr>
                        <tr><td>500,000</td><td className="fw-bold text-success">1,000</td></tr>
                        <tr><td>1,000,000</td><td className="fw-bold text-success">500</td></tr>
                        <tr><td>2,000,000</td><td className="fw-bold text-success">250</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Visualization Card */}
              <div className="card feature-card mb-5">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-chart-bar me-2"></i><LocalizedText id="airdrop.visualization.title" tag="span" />
                  </h2>
                  <div className="graph">
                    <div className="bar" style={{ width: '100%' }}>5,000 wallets → 100k GERD per wallet</div>
                    <div className="bar" style={{ width: '77%' }}>6,500 wallets → 77,000 GERD</div>
                    <div className="bar" style={{ width: '50%' }}>10,000 wallets → 50,000 GERD</div>
                    <div className="bar" style={{ width: '25%' }}>50,000 wallets → 10,000 GERD</div>
                    <div className="bar" style={{ width: '12.5%' }}>100k wallets → 5,000 GERD</div>
                    <div className="bar" style={{ width: '5%' }}>500k wallets → 1,000 GERD</div>
                    <div className="bar" style={{ width: '2.5%' }}>2M wallets → 250 GERD</div>
                    
                    <div className="x-axis">
                      <span>1k</span>
                      <span>5k</span>
                      <span>10k</span>
                      <span>50k</span>
                      <span>75k</span>
                      <span>100k GERD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Observations Card */}
              <div className="card feature-card border-success">
                <div className="card-body p-5">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-lightbulb text-warning me-2"></i>
                    <LocalizedText id="airdrop.key_observations.title" tag="span" />
                  </h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-rocket"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1"><LocalizedText id="airdrop.key_observations.early_adopter" tag="span" /></h4>
                          <p className="small text-muted mb-0"><LocalizedText id="airdrop.key_observations.early_adopter_lead" tag="span" /></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div 
                          className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                          style={{ width: '48px', height: '48px', fontSize: '20px', flexShrink: 0 }}
                        >
                          <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1"><LocalizedText id="airdrop.key_observations.commitment" tag="span" /></h4>
                          <p className="small text-muted mb-0"><LocalizedText id="airdrop.key_observations.commitment_lead" tag="span" /></p>
                        </div>
                      </div>
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
