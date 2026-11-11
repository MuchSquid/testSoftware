# VEXEL // Estudio de Ingenieria Digital (Awwwards Edition)

Landing page interactiva de estilo brutalista-editorial inspirada en ganadores de **Awwwards (Site of the Day)**, construida con **Astro 5**, **React 19 (Islas Interactivas)**, **Tailwind CSS v4**, **GSAP ScrollTrigger** y **Motion**. Lista para desplegarse en **Cloudflare Pages**.

## Caracteristicas Principales

- **Arquitectura de Islas en Astro**: Carga ultra rapida en el borde con hidratacion selectiva (`client:load` para navegacion/hero y `client:visible` para secciones bajo el pliegue).
- **Coreografia de Scroll con GSAP**:
  - **Horizontal-Pan Showcase**: Galeria de obras seleccionadas con anclaje de viewport (`pin: true`, `scrub: 1`) y modal interactivo de inspeccion tecnica.
  - **Sticky-Stack Architecture**: Tarjetas apilables de metodologia tecnica con reduccion de escala y opacidad sincronizada al scroll.
- **Micro-fisicas con Motion**: Botones magneticos reactivos al puntero y contenedor hero con paralaje 3D ejecutados fuera del ciclo de renderizado de React (`useMotionValue` / `useSpring`).
- **Accesibilidad y Rendimiento**: Soporte completo para `prefers-reduced-motion`, contraste WCAG AA en modo oscuro y claro, y tipografias variables auto-alojadas (`Space Grotesk`, `Plus Jakarta Sans` y `JetBrains Mono`).
- **Configuracion Lista para Cloudflare Pages**: Incluye `wrangler.jsonc` y reglas de cache inmutable en `public/_headers`.

## Comandos del Proyecto

| Comando | Accion |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321` |
| `npm run build` | Compila el sitio estatico de produccion en `./dist/` |
| `npm run preview` | Previsualiza la compilacion de produccion localmente |

## Despliegue en Cloudflare Pages

### Opcion 1: Integracion con Git (GitHub / GitLab)
1. Sube este repositorio a GitHub o GitLab.
2. En el panel de **Cloudflare Dashboard** -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Configura los parametros de compilacion:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

### Opcion 2: Despliegue Directo por CLI (Wrangler)
```bash
npm run build
npx wrangler pages deploy ./dist --project-name=vexel-studio-landing
```
# testSoftware
