# ASERFINTEC Pharma Suite - Demo

Aplicación demo para una industria farmacéutica, editable en Visual Studio Code.

## Tecnologías
- React
- TypeScript
- Vite
- Recharts

## Ejecución
```bash
npm install
npm run dev
```

## Compilación
```bash
npm run build
```

## Enfoque de diseño
La solución fue organizada con una estructura modular para facilitar mantenimiento y escalamiento:

- `features/`: módulos funcionales por dominio.
- `components/`: componentes reutilizables.
- `services/`: servicios desacoplados para lógica de negocio.
- `context/`: manejo de estado global simple para la demo.
- `types/`: contratos tipados.
- `data/`: datos simulados sin base de datos.

## Consideraciones SOLID aplicadas
- **S**: componentes y servicios con una única responsabilidad.
- **O**: la arquitectura permite agregar nuevos módulos sin alterar los existentes.
- **L**: componentes consumen contratos coherentes y reemplazables.
- **I**: separación de contratos simples en `types`.
- **D**: vistas dependen de abstracciones y servicios, no de implementaciones persistentes.

## Notas
- No utiliza base de datos.
- La exportación de reportes es simulada.
- El login es demostrativo con roles de Administrador y Usuario.
# farmaceutico-web
