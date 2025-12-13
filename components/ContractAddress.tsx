'use client';

import { useState } from 'react';

interface ContractAddressProps {
  address: string;
  label: string;
  borderColor?: string;
  isLegacy?: boolean;
}

export default function ContractAddress({
  address,
  label,
  borderColor = '#198754',
  isLegacy = false
}: ContractAddressProps) {
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
    <div
      className="contract-address"
      style={{ borderLeftColor: borderColor }}
    >
      <p className="mb-2 small text-muted">
        <i className={`fas ${isLegacy ? 'fa-exclamation-triangle text-warning' : 'fa-link'} me-2`}></i>
        {label}:
      </p>
      <div className="text-break">
        {!isLegacy ? (
          <>
            <a
              href={`https://bscscan.com/token/${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none me-2 align-middle"
            >
              <code className={`text-${copied ? 'success' : 'success'} fw-bold`} style={{ wordBreak: 'break-all' }}>
                {address}
              </code>
              <i className="fas fa-external-link-alt ms-1 small"></i>
            </a>
            <button
              type="button"
              className="btn btn-link p-0 text-success text-decoration-none border-0 d-inline-block align-middle"
              onClick={handleCopy}
              title="Copy to clipboard"
              style={{ fontSize: '1rem', lineHeight: 1 }}
            >
              <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
            </button>
          </>
        ) : (
          <a
            href={`https://bscscan.com/token/${address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none align-middle"
          >
            <code className="text-muted" style={{ wordBreak: 'break-all' }}>{address}</code>
            <i className="fas fa-external-link-alt ms-1 small"></i>
          </a>
        )}
      </div>
    </div>
  );
}


