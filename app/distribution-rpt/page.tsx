'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import FooterCTA from '@/components/FooterCTA';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

declare global {
  interface Window {
    tableau?: any;
  }
}

interface CountryDistribution {
  country: string;
  claims: number;
  tokens: number;
}

export default function DistributionReport() {
  const [loading, setLoading] = useState(false);
  const [distributions, setDistributions] = useState<CountryDistribution[]>([]);
  const [totalClaims, setTotalClaims] = useState(0);
  const [totalTokens, setTotalTokens] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const fetchDistributionData = async () => {
    setLoading(true);
    try {
      // Fetch user data from Firebase (matching original send-gerd.js implementation)
      const userDataRef = collection(db, 'user_data');
      const userDataSnapshot = await getDocs(userDataRef);
      
      const countryMap = new Map<string, { claims: number; tokens: number }>();
      
      userDataSnapshot.forEach((doc) => {
        const data = doc.data();
        const country = data.country || 'Unknown';
        // token_amount is stored with 2 decimals (e.g., 7500 tokens = 750000), so divide by 100
        const tokenAmount = parseFloat(data.token_amount || '0') / 100;
        
        if (countryMap.has(country)) {
          const existing = countryMap.get(country)!;
          countryMap.set(country, {
            claims: existing.claims + 1,
            tokens: existing.tokens + tokenAmount,
          });
        } else {
          countryMap.set(country, {
            claims: 1,
            tokens: tokenAmount,
          });
        }
      });

      const distributionArray: CountryDistribution[] = Array.from(countryMap.entries())
        .map(([country, data]) => ({
          country,
          claims: data.claims,
          tokens: data.tokens,
        }))
        .sort((a, b) => b.tokens - a.tokens);

      setDistributions(distributionArray);

      // Calculate totals (matching original generateSummary logic)
      const totalC = distributionArray.reduce((sum, d) => sum + d.claims, 0);
      const totalT = distributionArray.reduce((sum, d) => sum + d.tokens, 0);
      
      setTotalClaims(totalC);
      setTotalTokens(totalT);
      setShowStats(true);
    } catch (error) {
      console.error('Error fetching distribution data:', error);
      alert('Failed to fetch distribution data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch data when component mounts
  useEffect(() => {
    fetchDistributionData();
  }, []);

  useEffect(() => {
    // Initialize Tableau visualization - matching original HTML structure
    let cleanup: (() => void) | undefined;
    let timer: NodeJS.Timeout;

    const initTableau = () => {
      const divElement = document.getElementById('viz1686619041159');
      if (!divElement) return;
      
      const vizElement = divElement.getElementsByTagName('object')[0];
      if (!vizElement) return;

      // Check if script already exists
      const existingScript = divElement.querySelector('script[src*="viz_v1.js"]');
      if (existingScript) {
        // Script already loaded, just update size
        const updateTableauSize = () => {
          if (divElement.offsetWidth > 800) {
            vizElement.style.width = '1000px';
            vizElement.style.height = '827px';
          } else if (divElement.offsetWidth > 500) {
            vizElement.style.width = '1000px';
            vizElement.style.height = '827px';
          } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '927px';
          }
        };
        updateTableauSize();
        window.addEventListener('resize', updateTableauSize);
        cleanup = () => window.removeEventListener('resize', updateTableauSize);
        return;
      }

      // Set initial size
      const updateTableauSize = () => {
        if (divElement.offsetWidth > 800) {
          vizElement.style.width = '1000px';
          vizElement.style.height = '827px';
        } else if (divElement.offsetWidth > 500) {
          vizElement.style.width = '1000px';
          vizElement.style.height = '827px';
        } else {
          vizElement.style.width = '100%';
          vizElement.style.height = '927px';
        }
      };

      updateTableauSize();
      
      // Create and insert script BEFORE the object element (critical for Tableau API)
      // This matches the original HTML structure exactly
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
      
      // Insert before the object element (parent is the divElement)
      vizElement.parentNode?.insertBefore(scriptElement, vizElement);

      // Handle resize
      window.addEventListener('resize', updateTableauSize);

      cleanup = () => {
        window.removeEventListener('resize', updateTableauSize);
        // Cleanup script if component unmounts
        if (scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
      };
    };

    // Initialize after DOM is ready
    timer = setTimeout(initTableau, 100);
    
    return () => {
      clearTimeout(timer);
      if (cleanup) {
        cleanup();
      }
    };
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
                  <i className="fas fa-chart-bar me-3"></i>Distribution Statistics
                </h1>
                <p className="lead fs-5 opacity-90">
                  Total tokens claimed by Country - Real-time global distribution data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="content-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <button
                className="btn btn-success btn-lg mb-3"
                onClick={fetchDistributionData}
                disabled={loading}
              >
                <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-sync-alt'} me-2`}></i>
                {loading ? 'Loading...' : 'Refresh Data'}
              </button>
              <p className="text-muted small">
                *Click button to pull updated data from the blockchain.
              </p>
            </div>
          </div>

          {showStats && (
            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className="stat-box">
                  <div className="display-6 fw-bold text-primary mb-2">
                    {totalClaims.toLocaleString('en-US')}
                  </div>
                  <p className="text-muted mb-0">Total Claims</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="stat-box">
                  <div className="display-6 fw-bold text-success mb-2">
                    {Math.floor(totalTokens).toLocaleString('en-US')}
                  </div>
                  <p className="text-muted mb-0">Total Tokens Claimed</p>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card feature-card">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-table me-2"></i>Distribution by Country
                  </h2>
                  <div className="table-responsive">
                    <table id="summary-table" className="table table-striped table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Country Name</th>
                          <th>Number of Claims</th>
                          <th>Total Tokens Claimed</th>
                        </tr>
                      </thead>
                      <tbody id="summary-table-body">
                        {loading ? (
                          <tr>
                            <td colSpan={3} className="text-center py-5">
                              <i className="fas fa-spinner fa-spin fa-2x text-muted mb-3 d-block"></i>
                              <p className="text-muted mb-0">Loading distribution data...</p>
                            </td>
                          </tr>
                        ) : distributions.length === 0 ? (
                          <tr>
                            <td colSpan={3} className="text-center py-5">
                              <i className="fas fa-info-circle fa-2x text-muted mb-3 d-block"></i>
                              <p className="text-muted mb-0">Click &quot;Refresh Data&quot; to load distribution statistics</p>
                            </td>
                          </tr>
                        ) : (
                          distributions.map((dist, index) => (
                            <tr key={index}>
                              <td>{dist.country}</td>
                              <td className="fw-bold">{dist.claims.toLocaleString('en-US')}</td>
                              <td className="fw-bold text-success">{Math.floor(dist.tokens).toLocaleString('en-US')}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  {showStats && distributions.length > 0 && (
                    <div className="mt-4 pt-3 border-top">
                      <p className="fw-bold mb-2">
                        Total Claims: <span className="text-primary">{totalClaims.toLocaleString('en-US')}</span>
                      </p>
                      <p className="fw-bold mb-0">
                        Total Tokens Claimed: <span className="text-success">{Math.floor(totalTokens).toLocaleString('en-US')}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau Visualization Section */}
      <section className="content-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card feature-card">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-4 text-center">
                    <i className="fas fa-chart-line me-2"></i>Interactive Distribution Dashboard
                  </h2>
                  <div className="tableauPlaceholder" id="viz1686619041159" style={{ position: 'relative', minHeight: '600px' }}>
                    <noscript>
                      <a href="#">
                        <img
                          alt="Dashboard 1"
                          src="https://public.tableau.com/static/images/Di/Distribution_Tableau/Dashboard1/1_rss.png"
                          style={{ border: 'none' }}
                        />
                      </a>
                    </noscript>
                    <object className="tableauViz" style={{ display: 'none' }}>
                      <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param name="name" value="Distribution_Tableau/Dashboard1" />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param name="static_image" value="https://public.tableau.com/static/images/Di/Distribution_Tableau/Dashboard1/1.png" />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
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
