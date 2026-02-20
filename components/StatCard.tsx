import Link from 'next/link';

interface StatCardProps {
  number: string;
  label: string;
  sublabel?: string;
  numberColor?: string;
  linkHref?: string;
  linkText?: string;
}

export default function StatCard({ 
  number, 
  label, 
  sublabel,
  numberColor = '#198754',
  linkHref,
  linkText
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-number" style={{ color: numberColor }}>
        {number}
      </div>
      <p className="text-muted mb-0">{label}</p>
      {sublabel && <small className="text-muted">{sublabel}</small>}
      {linkHref && linkText ? (
        <div className="mt-2">
          <Link href={linkHref} className="btn btn-link text-primary text-decoration-none p-0">
            {linkText}
          </Link>
        </div>
      ) : null}
    </div>
  );
}





