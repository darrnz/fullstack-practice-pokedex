# 🎨 FRONTEND — Guía para desarrolladores

## Rol del frontend en este proyecto

El frontend es la "cara" de la app. Tu trabajo es:

- **Mostrar pantallas bonitas** con HTML, CSS y Bootstrap.
- **Permitir que el usuario interactúe** (formularios, botones, etc.).
- **Llamar al backend** cuando necesites datos (con `fetch`).
- **Guardar estado temporal** en `localStorage` (ej: quién es el usuario actual).
- **Traducir respuestas JSON** del backend en información visual.

### Stack del frontend

```
┌──────────────────────────────────────┐
│  HTML (estructura + contenido)       │
│  + CSS (estilos, colores, layout)    │
│  + Bootstrap (componentes + grillas) │
│  + JavaScript vanilla (lógica)       │
│  + localStorage (datos del cliente)  │
└──────────┬───────────────────────────┘
           │ fetch('/api/decks')
           ▼
    ┌────────────────┐
    │    BACKEND     │
    │   (Express)    │
    └────────────────┘
```

---

## 📁 Estructura básica de `public/`

La carpeta `public/` contiene todo lo que ve el usuario:

- **`index.html`**  
  Landing page / navegación principal. El usuario llega aquí primero.

- **`users.html`**  
  Página donde el usuario ingresa su nombre/email para "loguearse" (crear o usar cuenta existente).

- **`pokemon.html`**  
  Página para buscar pokémon por nombre/tipo y ver detalles.

- **`decks.html`**  
  Página para listar, crear y editar mazos del usuario actual.

- **`pokemon-detail.html`**  
  Página para ver detalles completos de un pokémon (tipos, stats, sprites).


# 🎨 FRONTEND — Guía para desarrolladores

Guía detallada del frontend: estructura de `public/`, patrones de `fetch`, uso de `localStorage` y recomendaciones de UI con Bootstrap. Evita duplicar la configuración rápida que está en `README.md`.

## Estructura de `public/` (resumen)

- `index.html` — landing y navegación.
- `users.html` — formulario para crear/login de usuario.
- `pokemon.html` — búsqueda y listado de pokémon.
- `pokemon-detail.html` — detalle de un pokémon.
- `decks.html` — lista y gestión de mazos.
- `deck-detail.html` — mostrar/editar un mazo.
- `css/styles.css` — estilos personalizados.
- `js/` — `main.js`, `api.js`, `users.js`, `pokemon.js`, `decks.js`.

Mantén estos nombres tal cual para evitar inconsistencias con los tickets y el backend.

## Patrón de llamada a la API (helpers)

Crear helpers en `public/js/api.js` mejora mantenimiento:

```javascript
export async function apiGet(endpoint) {
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function apiPost(endpoint, body) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

Ejemplo de uso:

```javascript
const currentUserId = localStorage.getItem('currentUserId');
const decks = await apiGet(`/api/decks?userId=${currentUserId}`);
```

## `localStorage` (estado simple de sesión)

- Guardar: `localStorage.setItem('currentUserId', id)`.
- Leer: `localStorage.getItem('currentUserId')`.
- Borrar: `localStorage.removeItem('currentUserId')`.

Si no existe `currentUserId`, redirige a `users.html` para pedir login.

## Pautas de UI con Bootstrap (resumen práctico)

- Usa `navbar` para navegación entre `users.html`, `pokemon.html` y `decks.html`.
- Usa `card` para mostrar pokémon y mazos.
- Usa la grilla (`container`, `row`, `col-*`) para layout responsive.

No copies bloques largos de CSS en cada archivo: centraliza estilos en `css/styles.css`.

## Integración con backend

Usa los siguientes endpoints (coherentes con `BACKEND.md`):

- `POST /api/users/login-or-create` — crear/obtener usuario.
- `GET /api/decks?userId=` — obtener mazos de un usuario.
- `POST /api/decks` — crear deck.
- `POST /api/decks/:deckId/pokemons` — añadir Pokémon a un deck.
- `GET /api/pokemon/search?name=` — búsqueda (proxy backend).
- `GET /api/pokemon/:id` — detalle (proxy + cache).

Documenta aquí cualquier cambio de contrato para que el equipo lo sepa.

## Tickets relacionados (resumen)

- FE-01 — Mejorar `index.html` con navbar y secciones.
- FE-02 — `users.html`: formulario y validación cliente.
- FE-03 — Guardar `currentUserId` en `localStorage` tras login y redirigir.

Para checklists y contenido listo para crear Issues, revisa `TICKETS.md`.

---

Si quieres que genere snippets HTML/JS básicos (plantilla `users.html` y `users.js`) para acelerar el inicio, puedo añadirlos como ejemplo sin solución completa.
if (confirm('¿Estás seguro?')) {
  // Eliminar
}
```

### 4. Actualizar página sin recargar

En vez de `window.location.href = '/decks.html'`, puedes:
- Esconder una sección, mostrar otra.
- Hacer `fetch` de nuevos datos y re-renderizar.

Más smooth y rápido.

---

¡El frontend es donde ves el resultado de tu trabajo! 🎨  
Si tienes dudas, prueba en la consola del navegador y ve qué pasa.
