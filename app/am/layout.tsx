import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VisitorTracker from '@/components/VisitorTracker';
import { NextIntlClientProvider } from 'next-intl';
import am from '../../locales/am.json';
import '@/styles/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Abay GERD Token - አማርኛ',
  description: 'Abay GERD Token - ለሕዝብ የተዘጋ ዲጂታል ክፍል (አማርኛ)',
};

export default function AmLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="am">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={outfit.variable}>
        <NextIntlClientProvider locale="am" messages={am}>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <VisitorTracker />
        </NextIntlClientProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
