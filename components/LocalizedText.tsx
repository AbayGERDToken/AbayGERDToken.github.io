'use client';

import { useTranslations } from 'next-intl';

export default function LocalizedText({ id, tag = 'span', className, children, ...props }: any) {
  const t = useTranslations();
  // Provide basic rich-text handlers for common tags like <strong>
  const text = t.rich(id, {
    strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
    b: (chunks: React.ReactNode) => <b>{chunks}</b>,
    em: (chunks: React.ReactNode) => <em>{chunks}</em>,
  });
  const Tag = tag as any;
  return (
    <Tag className={className} {...props}>
      {children ? children : text}
    </Tag>
  );
}
