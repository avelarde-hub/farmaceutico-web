import { SectionHeader } from '../../components/SectionHeader';

const schedules = [
  { line: 'Línea 1', product: 'Tabletas 500 mg', shift: '06:00 - 14:00', efficiency: '96%' },
  { line: 'Línea 2', product: 'Cápsulas 250 mg', shift: '14:00 - 22:00', efficiency: '91%' },
  { line: 'Línea 3', product: 'Jarabe infantil', shift: '08:00 - 17:00', efficiency: '94%' },
];

export function ProductionView() {
  return (
    <div className="view-grid">
      <SectionHeader
        title="Planificación de Producción"
        subtitle="Seguimiento de líneas, turnos y desempeño operacional."
        action={<button className="btn primary">Programar lote</button>}
      />

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Línea</th>
              <th>Producto</th>
              <th>Turno</th>
              <th>Eficiencia</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((row) => (
              <tr key={row.line}>
                <td>{row.line}</td>
                <td>{row.product}</td>
                <td>{row.shift}</td>
                <td>{row.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
