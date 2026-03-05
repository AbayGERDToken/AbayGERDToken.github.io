'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type MenuLink = {
  href: string;
  title: string;
  subtitle: string;
  external?: boolean;
};

type MenuSection = {
  heading?: string;
  items: MenuLink[];
};

const startMenu: MenuSection[] = [
  {
    heading: 'Get Started',
    items: [
      { href: '/claim-form', title: 'Claim Tokens', subtitle: 'Free claim flow in seconds' },
      { href: '/auth', title: 'Built-in Wallet', subtitle: 'Create wallet via social login' },
    ],
  },
  {
    heading: 'Wallet Setup Guides',
    items: [
      { href: '/trust-wallet', title: 'Trust Wallet', subtitle: 'Setup instructions' },
      { href: '/base-wallet', title: 'Base Wallet', subtitle: 'Setup instructions' },
      { href: '/metamask-wallet', title: 'MetaMask Wallet', subtitle: 'Setup instructions' },
    ],
  },
];

const ecosystemMenu: MenuSection[] = [
  {
    heading: 'Vesting & Distribution',
    items: [
      { href: '/dashboard-vesting', title: 'Vesting Dashboard', subtitle: 'Main release dashboard' },
      { href: '/testnet-vesting-dashboard', title: 'Testnet Dashboard', subtitle: 'Live testnet release tracking' },
      { href: '/gerd-airdrop', title: 'Airdrop Calculator', subtitle: 'Yearly airdrop projection' },
      { href: '/distribution-rpt', title: 'Claim Report', subtitle: 'Global claim statistics' },
    ],
  },
  {
    heading: 'Project Intelligence',
    items: [
      { href: '/vesting', title: 'Vesting Strategy', subtitle: 'Long-term release design' },
      { href: '/timeline', title: 'Project Timeline', subtitle: 'Roadmap and milestones' },
      { href: '/gerd-wallets', title: 'Project Wallets', subtitle: 'Official wallet balances' },
      { href: '/developer-transparency', title: 'Developer Transparency', subtitle: 'Code, updates, and audit visibility' },
    ],
  },
];

const learnMenu: MenuSection[] = [
  {
    heading: 'Knowledge Base',
    items: [
      { href: '/qna', title: 'Q&A', subtitle: 'Frequently asked questions' },
      { href: '/gerd-ama', title: 'AMA Sessions', subtitle: 'Community Q&A highlights' },
      { href: '/migration-announcement', title: 'Migration Announcement', subtitle: 'Contract migration details' },
      { href: '/dev', title: 'Contributors', subtitle: 'Support and contribute to the project' },
    ],
  },
  {
    heading: 'Documents',
    items: [
      { href: '/image/AbayGERDToken.pdf', title: 'Whitepaper', subtitle: 'Project overview and economics', external: true },
      { href: '/dev/GERD_Token_Audit_Summary.pdf', title: 'Audit Report', subtitle: 'Internal audit summary PDF', external: true },
    ],
  },
];

const communityLinks: MenuLink[] = [
  { href: 'https://github.com/AbayGERDToken', title: 'GitHub', subtitle: 'Source code and repositories', external: true },
  { href: 'https://x.com/abaygerdtoken', title: 'X (Twitter)', subtitle: 'Official updates', external: true },
  { href: 'https://t.me/GERDToken', title: 'Telegram', subtitle: 'Community chat', external: true },
  { href: 'https://www.tiktok.com/@abaygerdtoken', title: 'TikTok', subtitle: 'Short-form content', external: true },
];

const explorerLinks: MenuLink[] = [
  {
    href: 'https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c',
    title: 'BscScan',
    subtitle: 'Full token explorer',
    external: true,
  },
  {
    href: 'https://bscscan.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c#balances',
    title: 'Top Holders',
    subtitle: 'Distribution transparency',
    external: true,
  },
  {
    href: 'https://bsctrace.com/token/0x6B16DE4F92e91e91357b5b02640EBAf5be9CF83c',
    title: 'Fast Explorer',
    subtitle: 'Lightweight lookup',
    external: true,
  },
];

function MenuItem({ item }: { item: MenuLink }) {
  if (item.external) {
    return (
      <a className="dropdown-item" href={item.href} target="_blank" rel="noopener noreferrer">
        <div className="fw-semibold d-flex align-items-center justify-content-between gap-2">
          <span>{item.title}</span>
          <i className="fas fa-arrow-up-right-from-square small text-muted"></i>
        </div>
        <small className="text-muted">{item.subtitle}</small>
      </a>
    );
  }

  return (
    <Link className="dropdown-item" href={item.href}>
      <div className="fw-semibold">{item.title}</div>
      <small className="text-muted">{item.subtitle}</small>
    </Link>
  );
}

function MenuGroup({ sections }: { sections: MenuSection[] }) {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <li key={section.heading || sectionIndex}>
          <div className="dropdown-section-label">{section.heading}</div>
          {section.items.map((item) => (
            <MenuItem key={item.href + item.title} item={item} />
          ))}
          {sectionIndex < sections.length - 1 && <hr className="dropdown-divider" />}
        </li>
      ))}
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile menu after selecting a navigation item.
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const clickableItems = document.querySelectorAll('.dropdown-item, .nav-link[href]');
    
    const handleDropdownClick = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      if (target.getAttribute('href') === '#') {
        return;
      }

      if (navbarCollapse?.classList.contains('show')) {
        const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
        navbarToggler?.click();
      }
    };
    
    clickableItems.forEach(item => {
      item.addEventListener('click', handleDropdownClick);
    });
    
    return () => {
      clickableItems.forEach(item => {
        item.removeEventListener('click', handleDropdownClick);
      });
    };
  }, []);

  const topLinks = [
    { href: '/', label: 'Home' },
    { href: '/claim-form', label: 'Claim' },
    { href: '/dashboard-vesting', label: 'Vesting' },
    { href: '/qna', label: 'Q&A' },
  ];

  return (
    <nav className="navbar navbar-expand-xl navbar-dark modern-navbar fixed-top" suppressHydrationWarning>
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

        <div className="collapse navbar-collapse modern-navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pill-links mx-auto d-none d-xl-flex">
            {topLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link className={`nav-link ${pathname === link.href ? 'active' : ''}`} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">
                <i className="fas fa-house me-1"></i>Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownStart"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Start Here
              </a>
              <ul className="dropdown-menu dropdown-menu-modern" aria-labelledby="dropdownStart">
                <MenuGroup sections={startMenu} />
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownEcosystem"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ecosystem
              </a>
              <ul className="dropdown-menu dropdown-menu-modern" aria-labelledby="dropdownEcosystem">
                <MenuGroup sections={ecosystemMenu} />
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownLearn"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </a>
              <ul className="dropdown-menu dropdown-menu-modern" aria-labelledby="dropdownLearn">
                <MenuGroup sections={learnMenu} />
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownCommunity"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </a>
              <ul className="dropdown-menu dropdown-menu-modern" aria-labelledby="dropdownCommunity">
                <li>
                  <div className="dropdown-section-label">Official Channels</div>
                  {communityLinks.map((item) => (
                    <MenuItem key={item.href} item={item} />
                  ))}
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownExplorer"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-network-wired me-1"></i>
                Explorer
              </a>
              <ul className="dropdown-menu dropdown-menu-modern dropdown-menu-end" aria-labelledby="dropdownExplorer">
                <li>
                  <div className="dropdown-section-label">On-Chain Tools</div>
                  {explorerLinks.map((item) => (
                    <MenuItem key={item.href} item={item} />
                  ))}
                </li>
              </ul>
            </li>

            <li className="nav-item ms-xl-2 nav-claim-cta">
              <Link href="/claim-form" className="btn btn-light btn-sm fw-semibold">
                <i className="fas fa-gift me-2"></i>
                Claim Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


