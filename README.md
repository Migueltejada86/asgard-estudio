# ASGARD ESTUDIO — Landing

Landing de la barbería **ASGARD ESTUDIO** (Alta Gracia, Córdoba). HTML/CSS/JS puro, sin framework, lista para GitHub Pages.

**Live:** [migueltejada86.github.io/asgard-estudio](https://migueltejada86.github.io/asgard-estudio/)  
**App de puntos (repo hermano):** [asgard-puntos](https://github.com/Migueltejada86/asgard-puntos) → [asgard-puntos-d2ru.vercel.app](https://asgard-puntos-d2ru.vercel.app)

---

## Qué problema resuelve

El local no paga hosting ni dominio. Necesitaban una web que:

- se vea como la marca (oscuro + oro, logo propio)
- funcione en celular, tablet y desktop
- deje reservar turno eligiendo **barbero** (Marcelo, Ulises o Alexis)
- no pise horarios: un barbero = un cliente a la vez; máximo 3 turnos por slot
- mande la reserva a WhatsApp
- enlace al sistema de puntos (Vercel)

## Qué hay en la página

| Sección | Contenido |
|---|---|
| Hero | Logo, copy de Instagram, horarios, CTA Reserva + Puntos |
| Servicios | Corte, barba, perfilado |
| Galería | Carrusel de trabajos reales |
| Nosotros | Marcelo, Ulises y Alexis |
| Reserva | Barbero + fecha + hora, ocupación local |
| Contacto | Belisario Roldán 340 + WhatsApp `+54 9 3547 61-2770` |

El botón **Puntos** (nav, hero y footer) abre la webapp en Vercel.

## Stack

- HTML5 + CSS3 + JS vanilla (un solo `index.html`)
- Tipografías: Cinzel + Inter (Google Fonts)
- GitHub Pages (`.nojekyll`)
- Reserva: `localStorage` (`asgard-turnos-v1`) + deep link a `wa.me`
- SEO: `description`, Open Graph, `robots`, idioma `es`

## Seguridad (página estática)

Cabeceras meta del lado HTML (el hosting real debería repetirlas en el servidor):

- CSP (`default-src 'self'`, `frame-ancestors 'none'`)
- `X-Frame-Options: DENY` (clickjacking)
- `X-Content-Type-Options: nosniff`
- `referrer-policy: strict-origin-when-cross-origin`
- `rel="noopener noreferrer"` en links externos (tabnabbing)
- Sanitizado de nombre / teléfono / nota antes de armar el texto de WhatsApp

No hay backend ni cookies: la superficie de ataque es chica a propósito.

## Cómo corre

No hay build.

```bash
git clone git@github.com:Migueltejada86/asgard-estudio.git
cd asgard-estudio
# abrir index.html, o:
python3 -m http.server 5500
```

GitHub Pages sirve la raíz del repo (`index.html` + `img/`).

## Estructura

```
asgard-estudio/
├── index.html          # página completa
├── img/                # logo y fotos de trabajos
├── .nojekyll           # Pages no pasa Jekyll
└── README.md
```

## Decisiones de diseño

- **Sin tattoo:** el local es barbería; el copy y los servicios lo reflejan.
- **Tres barberos, no un calendario genérico:** si Marcelo está a las 18:00, ese slot suyo queda cerrado. Los otros dos siguen libres.
- **WhatsApp en vez de mail:** es el canal real del negocio.
- **Puntos fuera de esta repo:** un `node_modules` acá rompe Pages. La fidelización vive en Vercel.

## Repo relacionado

Sistema de puntos (login, fichas, canje de premios):  
[github.com/Migueltejada86/asgard-puntos](https://github.com/Migueltejada86/asgard-puntos)
