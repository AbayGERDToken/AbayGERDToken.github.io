import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VisitorTracker from '@/components/VisitorTracker';
import '@/styles/globals.css';

// Dynamic imports to prevent SSR issues with Web3Auth
const Web3AuthProvider = dynamic(
  () => import('@/lib/Web3AuthContext').then((mod) => mod.Web3AuthProvider),
  { ssr: false }
);

const ServiceWorkerRegistration = dynamic(
  () => import('@/components/ServiceWorkerRegistration'),
  { ssr: false }
);

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Abay GERD Token - Claim Non-Custodial Wallet',
  description: 'Claim GERD tokens with Google or Facebook. Automatic non-custodial wallet, no seed phrases, browser-based for Ethiopian users.',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor: '#10b981',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'GERD Token Claim',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap 5.3.3 CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Font Awesome 6 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Apple Web App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="GERD Claim" />
      </head>
      <body className={outfit.variable}>
        <Web3AuthProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <VisitorTracker />
          <ServiceWorkerRegistration />
        </Web3AuthProvider>
        {/* Bootstrap 5.3.3 JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}


