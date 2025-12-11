'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import CopyButton from '@/components/CopyButton';

const CONTRACT_ADDRESS = '0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c';
const LOCKED_TOTAL = 115_000_000_000;
const RELEASE_PER_YEAR = 1_000_000_000;
const START_DATE = new Date('2025-04-24T00:00:00Z');

export default function DashboardVesting() {
  const [countdown, setCountdown] = useState<string>('...');
  const [locked, setLocked] = useState<string>('...');
  const [released, setReleased] = useState<string>('...');
  const [remaining, setRemaining] = useState<string>('...');
  const [releaseDate, setReleaseDate] = useState<string>('...');

  useEffect(() => {
    const now = new Date();
    const yearsElapsed = Math.floor((now.getTime() - START_DATE.getTime()) / (365.25 * 24 * 3600 * 1000));
    const releasedAmount = Math.min(yearsElapsed, 115) * RELEASE_PER_YEAR;
    const remainingAmount = LOCKED_TOTAL - releasedAmount;

    setLocked(LOCKED_TOTAL.toLocaleString());
    setReleased(releasedAmount.toLocaleString());
    setRemaining(remainingAmount.toLocaleString());

    const nextRelease = new Date(START_DATE.getTime());
    nextRelease.setUTCFullYear(START_DATE.getUTCFullYear() + yearsElapsed + 1);
    setReleaseDate(nextRelease.toDateString());

    const updateCountdown = () => {
      const diff = nextRelease.getTime() - new Date().getTime();
      if (diff <= 0) {
        setCountdown('Available Now!');
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
                  <i className="fas fa-chart-line me-3"></i>GERD Token Vesting Dashboard
                </h1>
                <p className="lead fs-5 opacity-90">Real-time tracking of token vesting, releases, and distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">

              {/* Contract Address Card */}
              <div className="card shadow-sm mb-5">
                <div className="card-body p-4 text-center">
                  <h2 className="h6 fw-bold mb-3 text-muted">Contract Address</h2>
                  <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
                    <code 
                      id="contractAddress"
                      className="font-monospace text-primary fs-6 text-break flex-grow-1" 
                      style={{ wordBreak: 'break-all', minWidth: 0 }}
                    >
                      {CONTRACT_ADDRESS}
                    </code>
                    <CopyButton address={CONTRACT_ADDRESS} className="flex-shrink-0" />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="row g-4 mb-5">
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-success-subtle">
                    <div className="card-body text-center">
                      <div
                        className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{ width: '64px', height: '64px', fontSize: '28px' }}
                      >
                        <i className="fas fa-clock"></i>
                      </div>
                      <h3 className="h6 fw-bold mb-2">Next Release In</h3>
                      <p className="fs-5 fw-bold text-success font-monospace mb-0">{countdown}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-primary-subtle">
                    <div className="card-body text-center">
                      <div
                        className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{ width: '64px', height: '64px', fontSize: '28px' }}
                      >
                        <i className="fas fa-lock"></i>
                      </div>
                      <h3 className="h6 fw-bold mb-2">Total Tokens Locked</h3>
                      <p className="fs-5 fw-bold text-success font-monospace mb-0">{locked}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-success-subtle">
                    <div className="card-body text-center">
                      <div
                        className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{ width: '64px', height: '64px', fontSize: '28px' }}
                      >
                        <i className="fas fa-arrow-up"></i>
                      </div>
                      <h3 className="h6 fw-bold mb-2">Tokens Released</h3>
                      <p className="fs-5 fw-bold text-success font-monospace mb-0">{released}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-danger-subtle">
                    <div className="card-body text-center">
                      <div
                        className="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{ width: '64px', height: '64px', fontSize: '28px' }}
                      >
                        <i className="fas fa-hourglass-half"></i>
                      </div>
                      <h3 className="h6 fw-bold mb-2">Remaining Locked</h3>
                      <p className="fs-5 fw-bold text-danger font-monospace mb-0">{remaining}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Release Details Card */}
              <div className="card shadow-sm border-success">
                <div className="card-body p-5">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-calendar-check text-success me-2"></i>Next Release Details
                  </h2>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="bg-light p-4 rounded">
                        <p className="mb-2"><strong>Release Date:</strong></p>
                        <p className="h5 text-success mb-0">{releaseDate}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light p-4 rounded">
                        <p className="mb-2"><strong>Total Amount:</strong></p>
                        <p className="h5 text-primary mb-0">1,000,000,000 GERD</p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h3 className="h6 fw-bold mb-3">Distribution Breakdown:</h3>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '40px', height: '40px', fontSize: '18px', flexShrink: 0 }}
                        >
                          <i className="fas fa-parachute-box"></i>
                        </div>
                        <div>
                          <p className="mb-0 fw-bold">500,000,000 GERD</p>
                          <small className="text-muted">Airdropped to all holders</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '40px', height: '40px', fontSize: '18px', flexShrink: 0 }}
                        >
                          <i className="fas fa-coins"></i>
                        </div>
                        <div>
                          <p className="mb-0 fw-bold">250,000,000 GERD</p>
                          <small className="text-muted">Allocated for staking rewards</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-start">
                        <div
                          className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '40px', height: '40px', fontSize: '18px', flexShrink: 0 }}
                        >
                          <i className="fas fa-fire"></i>
                        </div>
                        <div>
                          <p className="mb-0 fw-bold">250,000,000 GERD</p>
                          <small className="text-muted">To liquidity or burned</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Notice */}
              <div className="alert alert-info border-info mt-5 text-center">
                <p className="mb-0">
                  <i className="fas fa-info-circle me-2"></i>
                  This vesting smart contract is currently under development on the BSC Testnet and is expected to be
                  completed by <strong>Sep 30, 2025</strong>.
                </p>
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
                DISCOVER ABAY GERD TOKEN, THE ETHIOPIAN-BORN CRYPTOCURRENCY EMPOWERING OUR COMMUNITY AND SUPPORTING THE
                GRAND ETHIOPIAN RENAISSANCE DAM PROJECT.
                JOIN US IN CREATING A BRIGHTER FUTURE! #ABAYGERDTOKEN #ETHIOPIA #CRYPTO #GERD
              </h2>
            </div>
            <div className="col-md-4 text-center">
              <Image 
                src="/image/abay_bluesky.png" 
                alt="AbayGERDToken" 
                className="img-fluid"
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
