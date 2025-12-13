'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ContractAddress from '@/components/ContractAddress';

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
    const updateStats = () => {
      const now = new Date();
      const yearsElapsed = Math.floor((now.getTime() - START_DATE.getTime()) / (365.25 * 24 * 3600 * 1000));
      const releasedAmount = Math.min(yearsElapsed, 115) * RELEASE_PER_YEAR;
      const remainingAmount = LOCKED_TOTAL - releasedAmount;

      setLocked(LOCKED_TOTAL.toLocaleString());
      setReleased(releasedAmount.toLocaleString());
      setRemaining(remainingAmount.toLocaleString());

      // Calculate next release date dynamically (recalculates each time to handle year transitions)
      const nextRelease = new Date(START_DATE.getTime());
      nextRelease.setUTCFullYear(START_DATE.getUTCFullYear() + yearsElapsed + 1);
      setReleaseDate(nextRelease.toDateString());

      return nextRelease;
    };

    const updateCountdown = () => {
      // Recalculate next release date each time to ensure accuracy after year transitions
      const nextRelease = updateStats();
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
          <div className="hero-content text-center">
            <h1 className="display-3 fw-bold mb-4">GERD Token Vesting Dashboard</h1>
            <p className="lead fs-4 mb-4 opacity-90">
              Track the locked tokens and upcoming release schedule
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section py-5">
        <div className="container">
          {/* Countdown Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="countdown-box text-center p-4 rounded">
                <h2 className="h4 mb-3">Next Release Countdown</h2>
                <p className="h3 fw-bold text-primary mb-0">{countdown}</p>
                <p className="text-muted mt-2 mb-0">Scheduled for: {releaseDate}</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="stat-box text-center p-4 rounded">
                <h3 className="h5 text-muted mb-2">Total Locked</h3>
                <p className="h3 fw-bold text-success mb-0">{locked}</p>
                <p className="text-muted small mb-0">GERD Tokens</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box text-center p-4 rounded">
                <h3 className="h5 text-muted mb-2">Released</h3>
                <p className="h3 fw-bold text-primary mb-0">{released}</p>
                <p className="text-muted small mb-0">GERD Tokens</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box text-center p-4 rounded">
                <h3 className="h5 text-muted mb-2">Remaining</h3>
                <p className="h3 fw-bold text-warning mb-0">{remaining}</p>
                <p className="text-muted small mb-0">GERD Tokens</p>
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="row mb-5">
            <div className="col-12">
              <ContractAddress
                address={CONTRACT_ADDRESS}
                label="Contract Address"
              />
            </div>
          </div>

          {/* Distribution Breakdown */}
          <div className="row">
            <div className="col-12">
              <h3 className="h4 mb-4">Annual Release Breakdown</h3>
              <div className="graph">
                <div className="bar" style={{ width: '100%', height: '40px', backgroundColor: '#198754', marginBottom: '10px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100 text-white fw-bold">
                    Year 1: 1 Billion GERD
                  </div>
                </div>
                <div className="bar" style={{ width: '100%', height: '40px', backgroundColor: '#0d6efd', marginBottom: '10px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100 text-white fw-bold">
                    Year 2: 1 Billion GERD
                  </div>
                </div>
                <div className="bar" style={{ width: '100%', height: '40px', backgroundColor: '#ffc107', marginBottom: '10px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100 text-dark fw-bold">
                    Year 3: 1 Billion GERD
                  </div>
                </div>
                <p className="text-muted mt-3">
                  <i className="fas fa-info-circle me-2"></i>
                  Each year, 1 billion GERD tokens are released from the vesting contract, continuing for 115 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
