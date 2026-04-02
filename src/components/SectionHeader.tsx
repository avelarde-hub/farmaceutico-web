export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        <p className="muted">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}
