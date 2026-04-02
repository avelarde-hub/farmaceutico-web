import { useAppContext } from '../context/AppContext';

export function Topbar() {
  const { currentUser, loginAs, logout } = useAppContext();

  return (
    <header className="topbar card">
      <div>
        <h1>Plataforma de Gestión Farmacéutica</h1>
        <p className="muted">Demo corporativa, orientada a evolución futura.</p>
      </div>

      <div className="topbar-actions">
        <select
          className="select"
          value={currentUser?.role ?? ''}
          onChange={(e) => loginAs(e.target.value as 'Administrador' | 'Usuario')}
        >
          <option value="Administrador">Administrador</option>
          <option value="Usuario">Usuario</option>
        </select>
        <button className="btn secondary" onClick={logout}>Cerrar sesión</button>
      </div>
    </header>
  );
}
