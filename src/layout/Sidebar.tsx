import logo from '../assets/logo.png';
import { useAppContext } from '../context/AppContext';
import { menuItems } from '../utils/menu';

export function Sidebar() {
  const { currentView, setCurrentView, sidebarCollapsed, currentUser, toggleSidebar } = useAppContext();

  return (
    <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-top">
        <div className="brand">
          <img src={logo} alt="ASERFINTEC" className="brand-logo" />
          {!sidebarCollapsed && (
            <div>
              <strong>ASERFINTEC</strong>
              <p>Pharma Suite</p>
            </div>
          )}
        </div>
        <button className="icon-btn" onClick={toggleSidebar} aria-label="Alternar menú">
          {sidebarCollapsed ? '☰' : '←'}
        </button>
      </div>

      <nav className="menu">
        {menuItems
          .filter((item) => !item.adminOnly || currentUser?.role === 'Administrador')
          .map((item) => (
            <button
              key={item.key}
              className={`menu-item ${currentView === item.key ? 'active' : ''}`}
              onClick={() => setCurrentView(item.key)}
            >
              <span className="menu-dot" />
              {!sidebarCollapsed && item.label}
            </button>
          ))}
      </nav>

      {!sidebarCollapsed && currentUser && (
        <div className="sidebar-user card subtle">
          <p className="muted">Sesión activa</p>
          <strong>{currentUser.name}</strong>
          <span>{currentUser.role}</span>
          <span>{currentUser.area}</span>
        </div>
      )}
    </aside>
  );
}
