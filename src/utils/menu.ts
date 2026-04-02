import type { MenuKey } from '../types';

export const menuItems: Array<{ key: MenuKey; label: string; adminOnly?: boolean }> = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'inventory', label: 'Inventario' },
  { key: 'quality', label: 'Calidad' },
  { key: 'production', label: 'Producción' },
  { key: 'reports', label: 'Reportes' },
  { key: 'users', label: 'Usuarios', adminOnly: true },
  { key: 'settings', label: 'Configuración', adminOnly: true },
];
