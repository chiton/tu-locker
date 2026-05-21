## Why

La seccion de Planes usa un fondo oscuro, pero el encabezado y la descripcion reutilizan estilos pensados para fondos claros, reduciendo legibilidad y calidad visual.

Mejorar el contraste de esa cabecera evita friccion al comparar planes y mantiene consistencia profesional en una seccion clave para conversion.

## What Changes

- Ajustar el encabezado, eyebrow y descripcion de la seccion Planes y Formas de Pago para que sean legibles sobre fondo oscuro.
- Mantener el estilo visual actual del sitio sin redisenar toda la seccion.
- Reutilizar o extender el componente de encabezados de seccion para soportar superficies oscuras de forma limpia.
- Verificar contraste, responsive design y build.

## Capabilities

### New Capabilities

### Modified Capabilities
- `marketing-website`: Agrega requisito de legibilidad/contraste para cabeceras de secciones sobre fondos oscuros, especialmente Planes y Formas de Pago.

## Impact

- Afecta componentes visuales del sitio, principalmente `SectionHeading` y/o la seccion de Planes en `app/page.tsx`.
- No cambia contenido comercial, precios, links, rutas, formularios ni integraciones.
- No requiere nuevas dependencias ni assets externos.
