# MUVA Growth Proposal Monorepo

Monorepo para propuestas de crecimiento digital, comenzando con la propuesta para Grupo MUVA.

## Estructura

```
muva-monorepo/
├── apps/
│   └── muva-growth-proposal/    # Sitio de propuesta para MUVA
├── packages/                    # Paquetes compartidos (futuro)
└── turbo.json                  # Configuración de Turbo
```

## Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build
```

## Despliegue en Netlify

1. Conecta tu repositorio a Netlify
2. Configura el build:
   - Build command: `cd apps/muva-growth-proposal && npm run build`
   - Publish directory: `apps/muva-growth-proposal/.next`
   - Base directory: `/`

## Personalización

### Actualizar datos de contacto

Edita el archivo `apps/muva-growth-proposal/src/components/CTA.tsx`:
- Línea 10: Reemplaza con tu URL de Calendly
- Línea 14: Reemplaza con tu número de WhatsApp

### Modificar datos de ROI

Edita `apps/muva-growth-proposal/src/data/roi.ts` para ajustar:
- Inversión y retorno estimado
- Timeline de resultados
- Estadísticas del mercado

## Tech Stack

- **Next.js 14** - Framework React
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **TypeScript** - Type safety
- **Turbo** - Build system para monorepo