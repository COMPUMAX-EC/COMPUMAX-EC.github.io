# Compumax · Sitio web de la agencia

Sitio web oficial de **Compumax**, agencia de diseño y publicidad de **Tulcán, Ecuador**. Muestra los servicios
de la agencia, su portafolio y clientes, y permite a cualquier persona cotizar o escribir por WhatsApp en un clic.

**Sitio en línea:** https://compumax-ec-github-io.vercel.app

## Para qué sirve

- Presentar los servicios: **corte láser** en madera y otros materiales, **estampado textil**, **sublimación**,
  **letras corpóreas**, **rótulos empresariales**, **señalética** interior y **reconocimientos** (trofeos y placas).
- Mostrar el **portafolio** de trabajos y una franja de **clientes** que ya confían en la agencia.
- Ofrecer un **catálogo de Navidad** con carrito para armar pedidos de temporada.
- **Cotizar** materiales en plancha (MDF, acrílico, sintra, coroplast, foam board) por plancha completa, media plancha,
  A3 o medida propia, con minutos de corte láser; los precios están en `src/data/materiales.ts`.
- Facilitar el contacto: botón flotante de **WhatsApp**, teléfono, correo y ubicación.

## Detalles técnicos

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Analítica | Vercel Analytics |
| Despliegue | Vercel (cada push a `main` publica) |

```
src/app/                 páginas: inicio, /about, /catalogo-navidad, /cotizar
src/data/                precios de materiales y corte láser
src/components/          Navbar, Hero, Services, Portfolio, ClientMarquee, Contact, Footer, FloatingWhatsApp
public/assets/           fotos de trabajos, clientes y señaléticas
```

### Ejecutar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compilación de producción
```

## In English

Website of Compumax, a design and advertising agency in Tulcán, Ecuador: services (laser cutting, textile printing,
signage, corporate lettering), portfolio, a Christmas catalogue with a cart, a quote page for sheet materials and laser cutting minutes, and one-click WhatsApp contact.
Built with Next.js 15, React 19, TypeScript and Tailwind CSS, deployed on Vercel.

## Licencia

El código está bajo licencia [MIT](LICENSE). El nombre, logotipo y fotografías de Compumax y de sus clientes no
forman parte de la licencia.
