import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { MenuKey, Role, UserProfile } from '../types';

interface AppContextValue {
  currentView: MenuKey;
  setCurrentView: (view: MenuKey) => void;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  currentUser: UserProfile | null;
  loginAs: (role: Role) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const demoUsers: Record<Role, UserProfile> = {
  Administrador: { id: 'ADM-01', name: 'María Andrade', role: 'Administrador', area: 'Dirección de Operaciones' },
  Usuario: { id: 'USR-99', name: 'Carlos Paredes', role: 'Usuario', area: 'Producción' },
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<MenuKey>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(demoUsers.Administrador);

  const value = useMemo(
    () => ({
      currentView,
      setCurrentView,
      sidebarCollapsed,
      toggleSidebar: () => setSidebarCollapsed((prev) => !prev),
      currentUser,
      loginAs: (role: Role) => setCurrentUser(demoUsers[role]),
      logout: () => setCurrentUser(null),
    }),
    [currentUser, currentView, sidebarCollapsed],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe utilizarse dentro de AppProvider');
  }
  return context;
}
