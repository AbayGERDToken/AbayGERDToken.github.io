'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const BACKEND_URL = 'https://testnet-vesting.onrender.com';

export default function ReleaseToken() {
  const [countdown, setCountdown] = useState<string>('Checking next eligible release...');
  const [releaseStatus, setReleaseStatus] = useState<string>('');
  const [canRelease, setCanRelease] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const setupReleaseCountdown = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/can-release`);
        const data = await res.json();

        if (!data.nextEligibleUTC) {
          throw new Error('Missing nextEligibleUTC in backend response');
        }

        const normalized = data.nextEligibleUTC.replace(' ', 'T').replace(' UTC', 'Z');
        const eligibleDate = new Date(normalized);

        if (isNaN(eligibleDate.getTime())) {
          throw new Error('Invalid date format from backend: ' + data.nextEligibleUTC);
        }

        const updateCountdown = () => {
          const now = new Date();
          const diff = eligibleDate.getTime() - now.getTime();

          if (diff <= 0) {
            if (data.canRelease) {
              setReleaseStatus('✅ Release is available!');
              setCanRelease(true);
              setCountdown('⏱ Next release is now eligible.');
            } else {
              setReleaseStatus('❌ Already released this Wednesday.');
              setCountdown('⏱ Waiting for next release window...');
              setCanRelease(false);
            }
          } else {
            const hours = Math.floor(diff / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            setCountdown(`⏱ Next eligible release in ${hours}h ${minutes}m ${seconds}s`);
            setCanRelease(false);
          }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
      } catch (err: any) {
        setCountdown('Error: ' + (err.message || 'Failed to connect to backend'));
      }
    };

    setupReleaseCountdown();
  }, []);

  const handleRelease = async () => {
    setReleaseStatus('Submitting release transaction...');
    setIsLoading(true);
    setCanRelease(false);

    try {
      const res = await fetch(`${BACKEND_URL}/release-token`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setReleaseStatus('✅ Release successful! TX: 0x' + data.tx_hash);
      } else {
        setReleaseStatus('❌ Error: ' + data.message);
      }
    } catch (e) {
      setReleaseStatus('❌ Could not connect to backend.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">
                  <i className="fas fa-rocket me-3"></i>GERD Vesting Testnet - Release Tokens
                </h1>
                <p className="lead fs-5 opacity-90">
                  Release tokens from the vesting contract on BSC Testnet
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
            <div className="col-lg-8 mx-auto">
              <div className="card feature-card">
                <div className="card-body p-5">
                  <div className="mb-4">
                    <Link 
                      href="/testnet-vesting-dashboard" 
                      className="text-decoration-none"
                    >
                      <i className="fas fa-arrow-left me-2"></i>Back to Dashboard
                    </Link>
                  </div>

                  <h2 className="h4 fw-bold mb-4">Release Control</h2>
                  
                  <div className="mb-4">
                    <p id="countdown" className="fs-5 fw-bold text-primary mb-3">
                      {countdown}
                    </p>
                  </div>

                  <div className="mb-4">
                    <button
                      id="releaseNowBtn"
                      onClick={handleRelease}
                      disabled={!canRelease || isLoading}
                      className={`btn btn-lg w-100 ${
                        canRelease && !isLoading
                          ? 'btn-success'
                          : 'btn-secondary disabled'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <i className="fas fa-spinner fa-spin me-2"></i>Processing...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-rocket me-2"></i>Release Now
                        </>
                      )}
                    </button>
                  </div>

                  {releaseStatus && (
                    <div className="alert alert-info">
                      <p id="releaseStatus" className="mb-0">
                        {releaseStatus}
                      </p>
                    </div>
                  )}

                  <hr className="my-4" />

                  <div className="text-center">
                    <a
                      href="https://testnet.bscscan.com/token/0x85a4850d0c2bdd6202c919c481bf0f186222fa89?a=0xC3C2b095C3aA55ACecc7fBA44C6B9D3f56dC43Da"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>Check transaction log on BscScan
                    </a>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="card feature-card mt-4">
                <div className="card-body p-4">
                  <h3 className="h6 fw-bold mb-3">
                    <i className="fas fa-info-circle text-info me-2"></i>How It Works
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Tokens can be released every Wednesday on the testnet
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      The button will be enabled when a release is eligible
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Each release distributes 1 billion GERD tokens to designated wallets
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



