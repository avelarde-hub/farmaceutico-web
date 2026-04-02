import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { StatCard } from '../../components/StatCard';
import { SectionHeader } from '../../components/SectionHeader';
import { inventoryByZone, kpis, productionTrend } from '../../data/demoData';

export function DashboardView() {
  return (
    <div className="view-grid">
      <SectionHeader
        title="Dashboard Ejecutivo"
        subtitle="Visión consolidada de producción, inventario y desempeño operativo."
      />

      <div className="stats-grid">
        {kpis.map((item) => (
          <StatCard key={item.title} item={item} />
        ))}
      </div>

      <div className="content-grid two-columns">
        <div className="card chart-card">
          <h3>Tendencia de producción</h3>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productionTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="plan" name="Plan" fill="#7dd3fc" radius={[6, 6, 0, 0]} />
                <Bar dataKey="real" name="Real" fill="#0f766e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card chart-card">
          <h3>Distribución de inventario</h3>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={inventoryByZone} dataKey="value" nameKey="name" outerRadius={100} fill="#14b8a6" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
