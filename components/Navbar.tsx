'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const [locale, setLocale] = useState<'en' | 'am'>('en');
  const t = useTranslations();

  const localizePath = (href: string) => {
    // Only prefix internal app routes for Amharic
    if (!href.startsWith('/')) return href;
    if (href.startsWith('/am') || href.startsWith('/en')) return href;
    // Avoid prefixing asset and dev paths
    if (href.startsWith('/image') || href.startsWith('/dev')) return href;
    if (locale === 'am') return href === '/' ? '/am' : `/am${href}`;
    return href;
  };

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

      // Auto-redirect based on saved locale cookie if we're on the root path
      try {
        const match = document.cookie.match(/(^|; )locale=(\w{2})/);
        if (match && match[2]) {
          const savedLocale = match[2];
          setLocale(savedLocale === 'am' ? 'am' : 'en');
          // Only redirect from root to avoid interfering with manual navigation
          if (window.location.pathname === '/' && savedLocale === 'am') {
            window.location.replace('/am');
          }
        } else {
          // Also detect if the current path is already /am
          if (window.location.pathname.startsWith('/am')) setLocale('am');
        }
      } catch (e) {
        // ignore cookie/read errors
      }

      // Prefix internal links on the page when in the Amharic locale so that
      // clicking navigates to the localized routes (e.g., /am/claim-form).
      const prefixInternalLinks = () => {
        try {
          const anchors = Array.from(document.querySelectorAll('a[href^="/"]'));
          anchors.forEach((a) => {
            const href = a.getAttribute('href') || '';
            if (href && href.startsWith('/') && !href.startsWith('/am') && !href.startsWith('/image') && !href.startsWith('/dev')) {
              a.setAttribute('href', href === '/' ? '/am' : `/am${href}`);
            }
          });
        } catch (e) {
          // ignore
        }
      };

      // If current path indicates Amharic or cookie says am, prefix links
      if (window.location.pathname.startsWith('/am') || locale === 'am') {
        prefixInternalLinks();
        // run again after a short delay for any dynamically inserted links
        setTimeout(prefixInternalLinks, 200);
      }

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
            {/* Language Dropdown (first item) */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="langDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-language me-1"></i>{t('navbar.language.label')}
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    href="/"
                    onClick={() => { document.cookie = 'locale=en; path=/; max-age=' + (60 * 60 * 24 * 365) }}
                  >
                    {t('navbar.language.english')}
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/am"
                    onClick={() => { document.cookie = 'locale=am; path=/; max-age=' + (60 * 60 * 24 * 365) }}
                  >
                    {t('navbar.language.amharic')}
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={localizePath('/')}>{t('navbar.home')}</Link>
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
                {t('navbar.token_claims.label')}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown1">
                <li>
                  <Link className="dropdown-item" href={localizePath('/claim-form')}>
                    <div className="fw-bold">{t('navbar.token_claims.token_claim')}</div>
                    <small className="text-muted">{t('navbar.token_claims.token_claim_sub')}</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/distribution-rpt')}>
                    <div className="fw-bold">{t('navbar.token_claims.claim_report')}</div>
                    <small className="text-muted">{t('navbar.token_claims.claim_report_sub')}</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/gerd-airdrop')}>
                    <div className="fw-bold">{t('navbar.token_claims.airdrop')}</div>
                    <small className="text-muted">{t('navbar.token_claims.airdrop_sub')}</small>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/trust-wallet')}>
                    <div className="fw-bold">{t('navbar.token_claims.trust_wallet')}</div>
                    <small className="text-muted">{t('navbar.token_claims.trust_wallet_sub')}</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/base-wallet')}>
                    <div className="fw-bold">{t('navbar.token_claims.base_wallet')}</div>
                    <small className="text-muted">{t('navbar.token_claims.base_wallet_sub')}</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/metamask-wallet')}>
                    <div className="fw-bold">{t('navbar.token_claims.metamask_wallet')}</div>
                    <small className="text-muted">{t('navbar.token_claims.metamask_wallet_sub')}</small>
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
                {t('navbar.vesting.label')}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown8">
                <li>
                  <Link className="dropdown-item" href={localizePath('/dashboard-vesting')}>
                    <div className="fw-bold">{t('navbar.vesting.dashboard')}</div>
                    <small className="text-muted">{t('navbar.vesting.dashboard_sub')}</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/testnet-vesting-dashboard')}>
                    <div className="fw-bold">{t('navbar.vesting.testnet_dashboard')}</div>
                    <small className="text-muted">{t('navbar.vesting.testnet_dashboard_sub')}</small>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/vesting')}>
                    <div className="fw-bold">{t('navbar.vesting.strategy')}</div>
                    <small className="text-muted">{t('navbar.vesting.strategy_sub')}</small>
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/image/GERDVesting_Roadmap.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.vesting.roadmap')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.vesting.roadmap_sub')}</small>
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
                {t('navbar.project_insights.label')}
              </a>
              <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdown5">
                <li>
                  <Link className="dropdown-item" href={localizePath('/gerd-wallets')}>
                    <div className="fw-bold">{t('navbar.project_insights.wallets')}</div>
                    <small className="text-muted">{t('navbar.project_insights.wallets_sub')}</small>
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c#balances"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.project_insights.top_holders')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.project_insights.top_holders_sub')}</small>
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/migration-announcement')}>
                    <div className="fw-bold">{t('navbar.project_insights.migration')}</div>
                    <small className="text-muted">{t('navbar.project_insights.migration_sub')}</small>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/timeline')}>
                    <div className="fw-bold">{t('navbar.project_insights.timeline')}</div>
                    <small className="text-muted">{t('navbar.project_insights.timeline_sub')}</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/gerd-ama')}>
                    <div className="fw-bold">{t('navbar.project_insights.ama')}</div>
                    <small className="text-muted">{t('navbar.project_insights.ama_sub')}</small>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={localizePath('/qna')}>
                    <div className="fw-bold">{t('navbar.project_insights.qna')}</div>
                    <small className="text-muted">{t('navbar.project_insights.qna_sub')}</small>
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
                {t('navbar.resources.label')}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown7">
                <li>
                  <a
                    className="dropdown-item"
                    href="/image/AbayGERDToken.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.resources.whitepaper')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.resources.whitepaper_sub')}</small>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/dev/GERD_Token_Audit_Summary.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.resources.audit')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.resources.audit_sub')}</small>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/dev/gerd.gif"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.resources.video')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.resources.video_sub')}</small>
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
                {t('navbar.community.label')}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown2">
                <li>
                  <Link className="dropdown-item" href={localizePath('/dev')}>
                    <div className="fw-bold">{t('navbar.community.contributors')}</div>
                    <small className="text-muted">{t('navbar.community.contributors_sub')}</small>
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://github.com/AbayGERDToken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.community.github')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.community.github_sub')}</small>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://x.com/abaygerdtoken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.community.x')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.community.x_sub')}</small>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.tiktok.com/@abaygerdtoken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.community.tiktok')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.community.tiktok_sub')}</small>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://t.me/GERDToken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="fw-bold">{t('navbar.community.telegram')} <i className="fas fa-external-link-alt ms-1 small"></i></div>
                    <small className="text-muted">{t('navbar.community.telegram_sub')}</small>
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


