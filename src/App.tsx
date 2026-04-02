import { AppProvider, useAppContext } from './context/AppContext';
import { LoginScreen } from './components/LoginScreen';
import { Sidebar } from './layout/Sidebar';
import { Topbar } from './layout/Topbar';
import { DashboardView } from './features/dashboard/DashboardView';
import { InventoryView } from './features/inventory/InventoryView';
import { QualityView } from './features/quality/QualityView';
import { ProductionView } from './features/production/ProductionView';
import { ReportsView } from './features/reports/ReportsView';
import { UsersView } from './features/users/UsersView';
import { SettingsView } from './features/settings/SettingsView';
import type { MenuKey } from './types';

function ContentRenderer() {
  const { currentView, currentUser } = useAppContext();

  if (!currentUser) {
    return <LoginScreen />;
  }

  const views: Record<MenuKey, JSX.Element> = {
    dashboard: <DashboardView />,
    inventory: <InventoryView />,
    quality: <QualityView />,
    production: <ProductionView />,
    reports: <ReportsView />,
    users: <UsersView />,
    settings: <SettingsView />,
  };

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        {views[currentView]}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <ContentRenderer />
    </AppProvider>
  );
}
