'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // Close navbar when a dropdown item is clicked
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navbarCollapse?.classList.contains('show')) {
          const navbarToggler = document.querySelector('.navbar-toggler');
          navbarToggler?.click();
        }
      });
    });
    
    return () => {
      dropdownItems.forEach(item => {
        item.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top" suppressHydrationWarning>
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
                  <Link className="dropdown-item" href="/base-wallet">
                    <div className="fw-bold">Base Wallet</div>
                    <small className="text-muted">Setup instruction for Base wallet</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/metamask-wallet">
                    <div className="fw-bold">Metamask Wallet</div>
                    <small className="text-muted">Setup instruction for Metamask wallet</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/auth">
                    <div className="fw-bold">Built-in Wallet</div>
                    <small className="text-muted">Login with Google/Facebook to create wallet</small>
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
                  <Link className="dropdown-item" href="/gerd-wallets">
                    <div className="fw-bold">Project Wallets</div>
                    <small className="text-muted">View official project wallet balances</small>
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c#balances"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">Top Holders <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Transparency on token distribution</small>
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" href="/migration-announcement">
                    <div className="fw-bold">Migration Announcement</div>
                    <small className="text-muted">Details on the token migration</small>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" href="/timeline">
                    <div className="fw-bold">Project Timeline</div>
                    <small className="text-muted">Roadmap and key milestones</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/gerd-ama">
                    <div className="fw-bold">AMA (Ask Me Anything)</div>
                    <small className="text-muted">Community Q&A sessions</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/qna">
                    <div className="fw-bold">QnA</div>
                    <small className="text-muted">Frequently Asked Questions</small>
                  </Link>
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
                <li>
                  <Link className="dropdown-item" href="/dev">
                    <div className="fw-bold">Contributors</div>
                    <small className="text-muted">Meet the team behind the project</small>
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://github.com/AbayGERDToken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">GitHub <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Source code and repositories</small>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://x.com/abaygerdtoken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">X (Twitter) <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Official updates and announcements</small>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.tiktok.com/@abaygerdtoken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">TikTok <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Short-form video content</small>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://t.me/GERDToken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">Telegram <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">Join the community chat</small>
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


