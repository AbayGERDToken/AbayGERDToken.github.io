'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="small mb-0">
          <a 
            href={`mailto:${t('footer.contact_email')}?subject=Inquiry`} 
            className="text-light text-decoration-none"
          >
            {t('footer.contact_email')}
          </a>
          <br />
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}





