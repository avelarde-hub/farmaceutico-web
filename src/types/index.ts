export type Role = 'Administrador' | 'Usuario';

export type MenuKey =
  | 'dashboard'
  | 'inventory'
  | 'quality'
  | 'production'
  | 'reports'
  | 'users'
  | 'settings';

export interface UserProfile {
  id: string;
  name: string;
  role: Role;
  area: string;
}

export interface KPI {
  title: string;
  value: string;
  variation: string;
  positive: boolean;
}

export interface BatchRecord {
  code: string;
  product: string;
  status: 'Liberado' | 'En análisis' | 'Retenido';
  plant: string;
  completion: number;
}

export interface ReportItem {
  title: string;
  category: string;
  format: string;
  updatedAt: string;
}
