interface FeatureCardProps {
  icon?: string;
  iconBg?: string;
  iconColor?: string;
  title?: string;
  children: React.ReactNode;
  borderColor?: string;
  center?: boolean;
}

export default function FeatureCard({
  icon,
  iconBg = 'bg-success-subtle',
  iconColor = 'text-success',
  title,
  children,
  borderColor,
  center = false
}: FeatureCardProps) {
  return (
    <div className={`card feature-card ${borderColor ? `border-${borderColor}` : ''} h-100 ${center ? 'text-center' : ''}`}>
      <div className="card-body p-4">
        {icon ? (
          <div className={`feature-icon ${iconBg} ${iconColor} ${center || borderColor ? 'mx-auto' : ''} mb-3`}>
            <i className={icon}></i>
          </div>
        ) : null}
        {title ? <h3 className="h5 fw-bold mb-3">{title}</h3> : null}
        {typeof children === 'string' ? (
          <p className="text-muted mb-0">{children}</p>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </div>
  );
}

