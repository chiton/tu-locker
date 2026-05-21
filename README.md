# tu-locker

Sitio web institucional en español para **tu-locker**, una empresa de alquiler de espacios de almacenamiento, guardamuebles y self-storage ubicada en Bahía Blanca, Buenos Aires, Argentina.

El objetivo del sitio es presentar los servicios, generar confianza y facilitar el contacto comercial por WhatsApp, teléfono, email y formulario.

## Datos Del Sitio

- Empresa: `tu-locker`
- Dominio objetivo: `tu-locker.com.ar`
- Dirección: `Montevideo 1450, Bahía Blanca, Buenos Aires, Argentina`
- WhatsApp: `+54 291 4239860`
- Email: `contacto@tu-locker.com.ar`

## Stack Técnico

- Next.js App Router
- React Server Components
- TypeScript
- Tailwind CSS
- ESLint
- OpenSpec para flujo spec-driven

## Secciones Implementadas

- Inicio con banner principal y llamadas a la acción
- Servicios para uso personal, mudanzas y uso comercial
- Sobre Nosotros con misión, visión y valores
- Seguridad con cámaras 24/7, acceso controlado, alarmas, iluminación y monitoreo
- Tamaños de storage: pequeño, mediano y grande
- Planes mensual, trimestral y anual
- Formas de pago: tarjeta, transferencia y efectivo
- Cómo acceder con proceso paso a paso
- Ubicación con mapa embebido
- Testimonios
- Preguntas frecuentes
- Contacto con formulario, teléfono, email y WhatsApp
- Footer con datos comerciales
- Botón flotante de WhatsApp

## Estructura Principal

```text
app/
  globals.css        # Estilos globales y Tailwind
  layout.tsx         # Layout raíz y metadata SEO
  page.tsx           # Landing principal
components/
  Icon.tsx
  SectionHeading.tsx
  SiteFooter.tsx
  SiteHeader.tsx
  WhatsappFloatingButton.tsx
lib/
  site-data.ts       # Contenido y datos reutilizables del sitio
openspec/
  changes/
    build-tu-locker-website/
```

## Requisitos

- Node.js 20 o superior recomendado
- npm

## Instalación

```bash
npm install
```

## Desarrollo Local

```bash
npm run dev
```

Luego abrir:

```text
http://localhost:3000
```

## Scripts Disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run lint
```

Ejecuta ESLint sobre el proyecto.

```bash
npm run build
```

Genera una build de producción y valida TypeScript.

```bash
npm run start
```

Sirve la build de producción generada con `npm run build`.

## Verificación

El sitio fue verificado con:

```bash
npm run lint
npm run build
```

Ambos comandos pasan correctamente.

## Contenido Editable

La mayoría de los textos, teléfonos, links, planes, tamaños, preguntas frecuentes y testimonios están centralizados en:

```text
lib/site-data.ts
```

Para cambiar datos comerciales, precios estimados, WhatsApp, email o dirección, editar ese archivo primero.

## Formulario De Contacto

El formulario actual usa `mailto:contacto@tu-locker.com.ar`. No guarda datos ni envía emails desde un backend.

Si se requiere envío automático real, se puede agregar un Route Handler en `app/api/contact/route.ts` e integrar un proveedor de email.

## Deploy

El proyecto está listo para deploy como aplicación Next.js estándar.

Opciones habituales:

- Vercel
- Netlify con soporte Next.js
- Servidor Node.js usando `npm run build` y `npm run start`

## OpenSpec

La implementación sigue el cambio OpenSpec:

```text
openspec/changes/build-tu-locker-website
```

Estado de implementación: `28/28` tareas completadas.
