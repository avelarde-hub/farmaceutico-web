import type { BatchRecord, KPI, ReportItem } from '../types';

export const kpis: KPI[] = [
  { title: 'Producción mensual', value: '1.28 M u.', variation: '+8.4%', positive: true },
  { title: 'Lotes liberados', value: '148', variation: '+12', positive: true },
  { title: 'Desviaciones abiertas', value: '6', variation: '-3', positive: true },
  { title: 'Nivel de servicio OTIF', value: '97.2%', variation: '-0.8%', positive: false },
];

export const productionTrend = [
  { month: 'Ene', plan: 88, real: 84 },
  { month: 'Feb', plan: 92, real: 90 },
  { month: 'Mar', plan: 94, real: 93 },
  { month: 'Abr', plan: 96, real: 95 },
  { month: 'May', plan: 100, real: 99 },
  { month: 'Jun', plan: 102, real: 104 },
];

export const qualityTrend = [
  { week: 'S1', conformes: 96, observados: 4 },
  { week: 'S2', conformes: 94, observados: 6 },
  { week: 'S3', conformes: 98, observados: 2 },
  { week: 'S4', conformes: 97, observados: 3 },
];

export const inventoryByZone = [
  { name: 'Materia prima', value: 35 },
  { name: 'Empaque', value: 22 },
  { name: 'Producto en proceso', value: 18 },
  { name: 'Producto terminado', value: 25 },
];

export const batches: BatchRecord[] = [
  { code: 'BT-24031', product: 'Paracetamol 500 mg', status: 'Liberado', plant: 'Planta A', completion: 100 },
  { code: 'BT-24032', product: 'Amoxicilina 500 mg', status: 'En análisis', plant: 'Planta B', completion: 82 },
  { code: 'BT-24033', product: 'Jarabe pediátrico', status: 'Retenido', plant: 'Planta A', completion: 61 },
  { code: 'BT-24034', product: 'Ibuprofeno 400 mg', status: 'Liberado', plant: 'Planta C', completion: 100 },
];

export const reports: ReportItem[] = [
  { title: 'Reporte de producción consolidada', category: 'Producción', format: 'PDF', updatedAt: '27/03/2026 08:30' },
  { title: 'Control de calidad por lote', category: 'Calidad', format: 'Excel', updatedAt: '27/03/2026 09:10' },
  { title: 'Trazabilidad de inventarios críticos', category: 'Inventario', format: 'PDF', updatedAt: '27/03/2026 09:40' },
  { title: 'Indicadores ejecutivos para gerencia', category: 'Dirección', format: 'PowerPoint', updatedAt: '27/03/2026 10:00' },
];

export const users = [
  { id: 'USR-01', name: 'Ana Torres', role: 'Administrador', area: 'Calidad' },
  { id: 'USR-02', name: 'Luis Mena', role: 'Usuario', area: 'Producción' },
  { id: 'USR-03', name: 'Carla Vizuete', role: 'Usuario', area: 'Bodega' },
  { id: 'USR-04', name: 'Jorge Salazar', role: 'Administrador', area: 'TI' },
];
