import type { KPI } from '../types';

export function StatCard({ item }: { item: KPI }) {
  return (
    <div className="card stat-card">
      <div>
        <p className="muted">{item.title}</p>
        <h3>{item.value}</h3>
      </div>
      <span className={`badge ${item.positive ? 'success' : 'warning'}`}>{item.variation}</span>
    </div>
  );
}
