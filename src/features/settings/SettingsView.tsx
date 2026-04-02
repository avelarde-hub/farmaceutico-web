import { SectionHeader } from '../../components/SectionHeader';

export function SettingsView() {
  return (
    <div className="view-grid">
      <SectionHeader
        title="Configuración"
        subtitle="Parámetros funcionales para la administración de la plataforma."
      />

      <div className="content-grid two-columns">
        <div className="card">
          <h3>Parámetros generales</h3>
          <ul className="simple-list">
            <li>Planta principal: Quito Norte</li>
            <li>Moneda operativa: USD</li>
            <li>Frecuencia de respaldos: diaria</li>
            <li>Modo de operación: demostración</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
