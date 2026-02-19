# Dashboard con Tailwind v4 y ng2-charts

Dashboard modular construido con Angular 21, Tailwind CSS v4, y preparado para ng2-charts/Chart.js.

## Estructura del Proyecto

```
src/app/
├── components/           # Componentes reutilizables
│   ├── sidebar/          # Barra lateral de navegación
│   ├── navbar/           # Barra de navegación superior
│   ├── stat-card/        # Tarjetas de estadísticas
│   ├── projects-table/   # Tabla de proyectos
│   ├── footer/           # Pie de página
│   └── dashboard-layout/ # Layout principal del dashboard
│
├── pages/                # Páginas/Vistas
│   ├── dashboard-home/   # Vista principal del dashboard
│   ├── profile/          # Página de perfil
│   ├── tables/           # Página de tablas
│   ├── notifications/    # Página de notificaciones
│   ├── sign-in/          # Página de inicio de sesión
│   └── sign-up/          # Página de registro
│
├── app.routes.ts         # Configuración de rutas
├── app.ts                # Componente raíz
└── app.html              # Template del componente raíz
```

## Rutas Disponibles

### Rutas Protegidas (con Layout)
- `/` - Redirige a `/dashboard`
- `/dashboard` - Vista principal del dashboard (estadísticas y proyectos)
- `/profile` - Página de perfil de usuario
- `/tables` - Página con tablas adicionales
- `/notifications` - Página de notificaciones

### Rutas Públicas (sin Layout)
- `/sign-in` - Página de inicio de sesión
- `/sign-up` - Página de registro

## Componentes

### Sidebar Component
Navegación lateral fija con:
- Enlaces a las páginas principales
- Enlaces de autenticación
- Soporte para rutas activas (RouterLinkActive)

### Navbar Component
Barra de navegación superior con:
- Breadcrumbs dinámicos
- Barra de búsqueda
- Botones de configuración y notificaciones
- Botón de inicio de sesión

### Stat Card Component
Tarjetas reutilizables para mostrar estadísticas con:
- Título
- Valor
- Icono con gradiente
- Indicador de cambio (positivo/negativo)
- Período de comparación

### Projects Table Component
Tabla de proyectos con:
- Nombre del proyecto
- Presupuesto
- Barra de progreso
- Colores dinámicos según el estado

### Footer Component
Pie de página con:
- Información de copyright
- Enlaces a páginas externas
- Diseño responsive

### Dashboard Layout Component
Layout contenedor que incluye:
- Sidebar
- Navbar
- Outlet para el contenido de las rutas
- Footer

## Instalación y Ejecución

### Instalar dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
ng serve
# o
npm start
```

El dashboard estará disponible en `http://localhost:4200`

## Tecnologías Utilizadas

- **Angular 21** - Framework principal
- **Tailwind CSS v4** - Framework de estilos
- **ng2-charts** - Librería de gráficos para Angular
- **Chart.js** - Librería de gráficos
- **Angular Router** - Manejo de rutas
- **Standalone Components** - Arquitectura moderna de Angular

## Características

✅ Componentes standalone (sin módulos)
✅ Diseño responsive con Tailwind CSS
✅ Navegación con Angular Router
✅ Layout reutilizable
✅ Rutas activas con RouterLinkActive
✅ Preparado para integrar gráficos con Chart.js
✅ Diseño modular y escalable

## Próximos Pasos

Para agregar gráficos a tu dashboard:

1. Importa BaseChartDirective de ng2-charts en tus componentes
2. Configura los datos y opciones de los gráficos
3. Agrega los elementos canvas en tus templates

Ejemplo:
```typescript
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  // ...
  imports: [BaseChartDirective]
})
export class MyComponent {
  public chartData: ChartConfiguration['data'] = {
    datasets: [{ data: [10, 20, 30], label: 'Series A' }],
    labels: ['Jan', 'Feb', 'Mar']
  };
}
```

## Personalización

### Colores y Estilos
Los estilos utilizan las clases de Tailwind CSS v4. Puedes personalizar:
- Gradientes de los iconos
- Colores de fondo
- Espaciados
- Tipografía

### Agregar Nuevas Páginas
1. Crea un nuevo componente en `src/app/pages/`
2. Regístralo en `app.routes.ts`
3. Opcionalmente agrégalo al sidebar

### Agregar Nuevos Componentes
1. Crea el componente en `src/app/components/`
2. Impórtalo donde lo necesites
3. Asegúrate de que sea standalone

## Notas

- Todos los componentes son standalone
- Se utiliza RouterOutlet para la navegación
- El layout se aplica automáticamente a las rutas configuradas
- Las páginas de autenticación (sign-in/sign-up) no usan el layout principal
