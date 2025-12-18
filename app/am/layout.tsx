import { NextIntlClientProvider } from 'next-intl';
import am from '../../locales/am.json';

export default function AmLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="am" messages={am}>
      {children}
    </NextIntlClientProvider>
  );
}
