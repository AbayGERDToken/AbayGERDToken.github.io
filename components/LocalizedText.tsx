'use client';

import { useTranslations } from 'next-intl';

export default function LocalizedText({ id, tag = 'span', className, children, ...props }: any) {
  const t = useTranslations();
  const text = t(id);
  const Tag = tag as any;
  return (
    <Tag className={className} {...props}>
      {children ? children : text}
    </Tag>
  );
}
