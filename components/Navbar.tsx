'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // Initialize Bootstrap dropdowns
    if (typeof window !== 'undefined') {
      const initDropdowns = () => {
        if (typeof (window as any).bootstrap !== 'undefined') {
          const dropdownElementList = Array.from(document.querySelectorAll('.dropdown-toggle'));
          dropdownElementList.forEach((dropdownToggleEl) => {
            try {
              new (window as any).bootstrap.Dropdown(dropdownToggleEl);
            } catch (e) {
              // Dropdown already initialized, ignore
            }
          });
        }
      };
      
      // Try to initialize immediately
      initDropdowns();
      
      // Also try after a short delay in case Bootstrap loads later
      setTimeout(initDropdowns, 100);

      // Close navbar collapse when a navigation link is clicked (for mobile)
      // But NOT when clicking dropdown toggles
      const closeNavbar = (event: Event) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a, [role="button"]');
        
        // Don't close if clicking on a dropdown toggle
        if (link && (link.classList.contains('dropdown-toggle') || link.hasAttribute('data-bs-toggle'))) {
          return;
        }
        
        // Only close for actual navigation links (not dropdown toggles)
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          // Use Bootstrap's collapse API if available
          if (typeof (window as any).bootstrap !== 'undefined') {
            const bsCollapse = (window as any).bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
            } else {
              // Fallback: manually remove the show class
              navbarCollapse.classList.remove('show');
              // Also update the toggler button aria-expanded
              const toggler = document.querySelector('[data-bs-target="#navbarNav"]');
              if (toggler) {
                toggler.setAttribute('aria-expanded', 'false');
              }
            }
          } else {
            // Fallback if Bootstrap isn't loaded yet
            navbarCollapse.classList.remove('show');
            const toggler = document.querySelector('[data-bs-target="#navbarNav"]');
            if (toggler) {
              toggler.setAttribute('aria-expanded', 'false');
            }
          }
        }
      };

      // Add click listeners only to actual navigation links (not dropdown toggles)
      // Regular nav links (not dropdown toggles)
      const navLinks = document.querySelectorAll('#navbarNav .nav-link:not(.dropdown-toggle)');
      // Dropdown items (actual page links)
      const dropdownItems = document.querySelectorAll('#navbarNav .dropdown-item');
      
      navLinks.forEach((link) => {
        link.addEventListener('click', closeNavbar);
      });
      
      dropdownItems.forEach((item) => {
        item.addEventListener('click', closeNavbar);
      });

      // Cleanup
      return () => {
        navLinks.forEach((link) => {
          link.removeEventListener('click', closeNavbar);
        });
        dropdownItems.forEach((item) => {
          item.removeEventListener('click', closeNavbar);
        });
      };
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image 
            src="/image/gerdlogo.png" 
            alt="Abay GERD Token Logo" 
            height={40} 
            width={40} 
            className="me-2 rounded-circle" 
            style={{ background: 'transparent', border: 'none', objectFit: 'contain' }}
          />
          <span className="fw-bold">AbayGERDToken</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            
            {/* Token Claims Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="dropdown1" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Token Claims
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown1">
                <li>
                  <Link className="dropdown-item" href="/claim-form">
                    <div className="fw-bold">Token Claim</div>
                    <small className="text-muted">Claim Free Tokens - Faucet</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/distribution-rpt">
                    <div className="fw-bold">Claim Report</div>
                    <small className="text-muted">Global claims per country graph</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/gerd-airdrop">
                    <div className="fw-bold">Airdrop</div>
                    <small className="text-muted">Airdrop calculator for the yearly vesting release</small>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" href="/trust-wallet">
                    <div className="fw-bold">Trust Wallet</div>
                    <small className="text-muted">Setup instruction for Trust wallet</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/metamask-wallet">
                    <div className="fw-bold">Metamask Wallet</div>
                    <small className="text-muted">Setup instruction for Metamask wallet</small>
                  </Link>
                </li>
              </ul>
            </li>
            
            {/* Vesting Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="dropdown8" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Vesting
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown8">
                <li>
                  <Link className="dropdown-item" href="/dashboard-vesting">
                    <div className="fw-bold">Vesting Dashboard</div>
                    <small className="text-muted">Main vesting release dashboard</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/testnet-vesting-dashboard">
                    <div className="fw-bold">Testnet Dashboard</div>
                    <small className="text-muted">Monitor live GERD&apos;s vesting release on Testnet</small>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" href="/vesting">
                    <div className="fw-bold">Vesting Strategy</div>
                    <small className="text-muted">Reinforcing Transparency and Sustainable Growth</small>
                  </Link>
                </li>
                <li>
                  <a 
                    className="dropdown-item" 
                    href="/image/GERDVesting_Roadmap.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">Vesting Roadmap <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Smart contract development roadmap for the vesting release</small>
                  </a>
                </li>
              </ul>
            </li>
            
            {/* Project Insights Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="dropdown5" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Project Insights
              </a>
              <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdown5">
                <li>
                  <h6 className="dropdown-header text-uppercase small text-muted">Assets info</h6>
                </li>
                <li>
                  <Link className="dropdown-item" href="/gerd-wallets">Project Wallets</Link>
                </li>
                <li>
                  <a 
                    className="dropdown-item" 
                    href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c#balances" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Top Holders <i className="fas fa-external-link-alt ms-1 small"></i>
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" href="/migration-announcement">Migration Announcement</Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <h6 className="dropdown-header text-uppercase small text-muted">Info</h6>
                </li>
                <li>
                  <Link className="dropdown-item" href="/timeline">Project Timeline</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/gerd-ama">AMA (Ask Me Anything)</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/qna">QnA</Link>
                </li>
              </ul>
            </li>
            
            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="dropdown7" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown7">
                <li>
                  <a 
                    className="dropdown-item" 
                    href="/image/AbayGERDToken.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">Whitepaper <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Project overview and economics pdf</small>
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item" 
                    href="/dev/GERD_Token_Audit_Summary.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">Audit Report <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Basic internal audit summary pdf</small>
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item" 
                    href="/dev/gerd.gif" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">GERD Video Clip <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Just for fun</small>
                  </a>
                </li>
              </ul>
            </li>
            
            {/* Community Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="dropdown2" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Community
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown2">
                <li><Link className="dropdown-item" href="/dev">Contributors</Link></li>
                <li>
                  <a 
                    className="dropdown-item" 
                    href="https://github.com/AbayGERDToken" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <i className="fas fa-external-link-alt ms-1 small"></i>
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item" 
                    href="https://x.com/abaygerdtoken" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X (formerly Twitter) <i className="fas fa-external-link-alt ms-1 small"></i>
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item" 
                    href="https://www.tiktok.com/@abaygerdtoken" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok <i className="fas fa-external-link-alt ms-1 small"></i>
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item" 
                    href="https://t.me/GERDToken" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram <i className="fas fa-external-link-alt ms-1 small"></i>
                  </a>
                </li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-network-wired"></i> Block Explorer <i className="fas fa-external-link-alt ms-1 small"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


