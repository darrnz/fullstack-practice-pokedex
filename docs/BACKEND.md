# 🚀 BACKEND — Guía para desarrolladores

Este documento es la guía detallada del backend. Contiene la estructura recomendada, convenciones de rutas, ejemplos conceptuales y pautas para integrar PokéAPI desde el servidor.

> Nota: la configuración rápida del proyecto (instalación y `.env`) está en `README.md`. Aquí nos centramos en diseño y buenas prácticas.

## Visión general

El backend (Express + Prisma) debe:

- Exponer rutas REST bajo `/api/*` (por ejemplo `/api/health`, `/api/users`, `/api/decks`).
- Usar `PrismaClient` para acceder a la BD (`src/prisma.js`).
- Validar entradas, manejar errores y devolver respuestas JSON con códigos adecuados.
- Integrar PokéAPI a través de rutas como `/api/pokemon/:id` o `/api/pokemon/search` (preferible proxy con cache).

## Estructura recomendada (`src/`)

- `src/server.js` — punto de entrada: config de Express, middlewares (`cors`, `express.json()`), montaje de routers y arranque.
- `src/prisma.js` — exporta un singleton `PrismaClient`.
- `src/routes/` — módulos con routers:
  - `health.routes.js` → `/api/health`
  - `users.routes.js` → `/api/users` (ej. `POST /login-or-create`)
  - `decks.routes.js` → `/api/decks`
  - `demo.routes.js` → `/api/demo-items` (ejercicio)
  - `pokemon.routes.js` → `/api/pokemon` (proxy/caché)

Cada archivo de rutas debe exportar un `express.Router()` y documentar los endpoints que contiene.

## Convenciones de rutas (contrato básico)

- `GET /api/health` — estado del servidor.
- `POST /api/users/login-or-create` — crea o devuelve un usuario (body: `{ name, email }`).
- `GET /api/users` — lista de usuarios.
- `GET /api/decks?userId=` — lista los decks de un usuario.
- `POST /api/decks` — crear nuevo deck.
- `POST /api/decks/:deckId/pokemons` — añadir un Pokémon al deck (body: `{ pokemonId }`).
- `GET /api/pokemon/search?name=&type=` — búsqueda (backend puede usar PokéAPI).
- `GET /api/pokemon/:id` — detalle de Pokémon (proxy + cache recomendado).

Usa estos nombres en frontend y tickets para mantener coherencia.

## Patrón para crear rutas (resumen)

1. Crear `src/routes/<resource>.routes.js`.
2. Importar `express` y `prisma` (`const prisma = require('../prisma')`).
3. Definir endpoints con `router.get/post/...` y documentar parámetros y responses.
4. Manejar errores con `try/catch` y devolver status apropiados (`400`, `404`, `500`).
5. Exportar el router y montarlo en `server.js` con `app.use('/api/<resource>', routes)`.

### Ejemplo conceptual (GET /api/users)

Descripción: `GET /api/users` devuelve la lista de usuarios.

- Entrada: ninguno.
- Salida: `200` y `[{ id, name, email, createdAt }, ...]`.
- Errores: `500` si la BD falla.

## Buenas prácticas

- Validar los parámetros (`req.query`, `req.params`, `req.body`).
- Centralizar la instancia de Prisma (`src/prisma.js`) para evitar múltiples clientes.
- Registrar errores en consola durante desarrollo y devolver mensajes amigables al frontend.
- Mantener las rutas del backend como el contrato con el frontend (documentarlas en `docs/api-contract.md`).

## Integración con PokéAPI (recomendación)

Recomendamos exponer endpoints en el backend y funcionar como proxy/caché:

- `GET /api/pokemon/:id` — buscar en `PokemonCache`; si no existe, llamar a `https://pokeapi.co/api/v2/pokemon/:id`, guardar campos relevantes en `PokemonCache` y devolver al cliente.
- `GET /api/pokemon/search?name=` — consultar PokéAPI o usar una tabla de caché/índice si implementas búsqueda local.

Ventaja: control sobre formato, menor dependencia del CORS y posibilidad de cachear respuestas.

## Tickets relacionados (resumen)

- `DECK-01` — Modelos Prisma `Deck` y `DeckPokemon` (ver `DATABASE.md`).
- `DECK-02` — Endpoint `GET /api/decks?userId=`.
- `POKE-01` — Plan de uso de PokéAPI y campos a cachear.

Para detalles y checklists, usa `TICKETS.md`.

## Errores típicos y depuración (resumen)

- `req.body` vacío: verifica `express.json()` y `Content-Type`.
- CORS: asegúrate de `app.use(cors())` en `server.js`.
- Conexión BD: comprueba `DATABASE_URL` y que MySQL está activo.
- Rutas no encontradas: confirma que los routers están montados con el prefijo `/api/`.

---

Si necesitas que convierta estos endpoints a un archivo OpenAPI / Swagger básico para que el frontend tenga una referencia más formal, puedo generarlo a partir del contrato aquí explicado.
