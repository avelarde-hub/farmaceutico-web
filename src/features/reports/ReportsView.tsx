import { SectionHeader } from '../../components/SectionHeader';
import { reports } from '../../data/demoData';
import { ReportService } from '../../services/reportService';

export function ReportsView() {
  return (
    <div className="view-grid">
      <SectionHeader
        title="Centro de Reportes"
        subtitle="Generación y exportación de reportes gerenciales, operativos y regulatorios."
        action={<button className="btn primary">Generar reporte</button>}
      />

      <div className="report-grid">
        {reports.map((report) => (
          <div className="card report-card" key={report.title}>
            <div>
              <span className="badge neutral">{report.category}</span>
              <h3>{report.title}</h3>
              <p className="muted">Formato: {report.format}</p>
              <p className="muted">Última actualización: {report.updatedAt}</p>
            </div>
            <button className="btn secondary" onClick={() => ReportService.exportReport(report.title)}>
              Exportar demo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
