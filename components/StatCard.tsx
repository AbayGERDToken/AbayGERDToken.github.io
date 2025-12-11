interface StatCardProps {
  number: string;
  label: string;
  sublabel?: string;
  numberColor?: string;
}

export default function StatCard({ 
  number, 
  label, 
  sublabel,
  numberColor = '#198754'
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-number" style={{ color: numberColor }}>
        {number}
      </div>
      <p className="text-muted mb-0">{label}</p>
      {sublabel && <small className="text-muted">{sublabel}</small>}
    </div>
  );
}





