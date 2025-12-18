'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface CopyButtonProps {
  address: string;
  className?: string;
}

export default function CopyButton({ address, className = '' }: CopyButtonProps) {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  return (
    <button
      type="button"
      className={`btn btn-sm ${copied ? 'btn-success' : 'btn-outline-success'} ${className}`}
      onClick={handleCopy}
      title={copied ? t('copy.button.copied') : t('copy.button.copy')}
    >
      <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
    </button>
  );
}





