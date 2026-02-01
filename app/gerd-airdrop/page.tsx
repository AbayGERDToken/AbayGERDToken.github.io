'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import FooterCTA from '@/components/FooterCTA';

export default function GerdAirdrop() {
  const [countdown, setCountdown] = useState<string>('...');

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
        setCountdown('Airdrop Available Now!');
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
                  <i className="fas fa-parachute-box me-3"></i>Airdrop – Every Year on April 23rd
                </h1>
                <p className="lead fs-5 opacity-90">
                  Calculate your potential airdrop rewards based on the number of wallet holders
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
                    <i className="fas fa-clock me-2"></i>Next Release In
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
                    <i className="fas fa-calculator me-2"></i>Airdrop Formula
                  </h2>
                  <div className="bg-light p-4 rounded text-center mb-4">
                    <p className="h5 mb-2">Airdrop per User =</p>
                    <div className="display-6 fw-bold text-success">
                      <sup style={{ fontSize: '1.5rem' }}>500,000,000 GERD</sup>⁄
                      <sub style={{ fontSize: '1.5rem' }}>Number of Wallets</sub>
                    </div>
                  </div>
                  <p className="text-muted mb-0">
                    Because the annual airdrop amount is fixed, earlier participants receive a higher per-wallet allocation, as the distribution is shared among a smaller number of wallets.
                  </p>
                </div>
              </div>

              {/* Table Card */}
              <div className="card feature-card mb-5">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-table me-2"></i>Airdrop Projections
                  </h2>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead className="table-success">
                        <tr>
                          <th>If Number of Wallets</th>
                          <th>Airdrop per Wallet (GERD)</th>
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
                    <i className="fas fa-chart-bar me-2"></i>Visualization (Logarithmic Scale)
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
                    <i className="fas fa-lightbulb text-warning me-2"></i>Key Observations
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
                          <h4 className="h6 fw-bold mb-1">Early Adopter Advantage</h4>
                          <p className="small text-muted mb-0">Early adopters receive exponentially more tokens per wallet</p>
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
                          <h4 className="h6 fw-bold mb-1">115-Year Commitment</h4>
                          <p className="small text-muted mb-0">Annual airdrops continue for 115 years, ensuring long-term value</p>
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

      <FooterCTA />
    </>
  );
}
