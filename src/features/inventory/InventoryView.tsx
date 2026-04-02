import { SectionHeader } from '../../components/SectionHeader';

const rows = [
  { item: 'Acetaminofén API', code: 'MP-001', stock: '420 kg', min: '150 kg', location: 'Bodega fría' },
  { item: 'Blíster aluminio', code: 'EM-018', stock: '28,000 u.', min: '10,000 u.', location: 'Empaque' },
  { item: 'Frascos ámbar 120 ml', code: 'EM-032', stock: '12,500 u.', min: '5,000 u.', location: 'Bodega general' },
];

export function InventoryView() {
  return (
    <div className="view-grid">
      <SectionHeader
        title="Inventario y Trazabilidad"
        subtitle="Control simulado de existencias, stock mínimo y ubicación de materiales críticos."
        action={<button className="btn primary">Nuevo movimiento</button>}
      />

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Ítem</th>
              <th>Código</th>
              <th>Stock actual</th>
              <th>Stock mínimo</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.code}>
                <td>{row.item}</td>
                <td>{row.code}</td>
                <td>{row.stock}</td>
                <td>{row.min}</td>
                <td>{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
