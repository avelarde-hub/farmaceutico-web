import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { SectionHeader } from '../../components/SectionHeader';
import { batches, qualityTrend } from '../../data/demoData';

export function QualityView() {
  return (
    <div className="view-grid">
      <SectionHeader
        title="Calidad y Cumplimiento"
        subtitle="Monitoreo de conformidad, observaciones y estado de lotes."
      />

      <div className="content-grid two-columns">
        <div className="card chart-card">
          <h3>Control semanal</h3>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={qualityTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="conformes" stroke="#0f766e" fill="#99f6e4" />
                <Area type="monotone" dataKey="observados" stroke="#f59e0b" fill="#fde68a" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3>Estado de lotes</h3>
          <div className="batch-list">
            {batches.map((batch) => (
              <div key={batch.code} className="batch-item">
                <div>
                  <strong>{batch.code}</strong>
                  <p>{batch.product}</p>
                </div>
                <div>
                  <span className={`badge ${batch.status === 'Liberado' ? 'success' : batch.status === 'Retenido' ? 'danger' : 'warning'}`}>
                    {batch.status}
                  </span>
                  <small>{batch.plant}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
