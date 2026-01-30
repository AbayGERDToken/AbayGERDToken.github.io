import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VisitorTracker from '@/components/VisitorTracker';
import { Web3AuthProvider } from '@/lib/Web3AuthContext';
import { ETNAuthProvider } from '@/lib/ETNAuthContext';
import '@/styles/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Abay GERD Token',
  description: 'Abay GERD Token - A Community-Powered Digital Legacy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </head>
      <body className={outfit.variable} suppressHydrationWarning>
        <Web3AuthProvider>
          <ETNAuthProvider>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
            <VisitorTracker />
          </ETNAuthProvider>
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


