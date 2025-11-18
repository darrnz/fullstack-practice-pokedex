# 📋 PokéDeck — TICKETS / Project Tasks

Este archivo contiene los tickets sugeridos organizados por bloques. Cada ticket está listo para copiar/pegar como Issue en GitHub. Mantén el estilo didáctico: descripción, tareas, pistas y criterio de finalización. No incluyas soluciones completas.

---

## Bloque 1 — Arrancar el proyecto

### PROJ-01 – Clonar el repo y levantar el servidor

**Descripción**
Clona el repositorio, copia `.env.example` a `.env`, instala dependencias y arranca el servidor en modo desarrollo.

**Checklist**
- [ ] Clonar el repo / hacer fork si se requiere.
- [ ] Copiar `.env.example` → `.env` y ajustar `DATABASE_URL`.
- [ ] `npm install`.
- [ ] `npm run dev`.
- [ ] Probar `http://localhost:3000` y `http://localhost:3000/api/health`.

**Tips**
- Si hay error en la BD: verifica que MySQL esté corriendo y `DATABASE_URL` en `.env`.

**Labels**: setup, iniciantes

### PROJ-02 – Diagrama simple del sistema

**Descripción**
Diagrama (imagen o Markdown) que muestre Frontend ↔ Backend ↔ BD ↔ PokéAPI y flujos principales.

**Checklist**
- [ ] Dibujar componentes y flujos.
- [ ] Guardar en `docs/diagram.*`.

**Labels**: documentation, design

---


# 📋 PokéDeck — TICKETS / Project Tasks

Este archivo contiene los tickets sugeridos organizados por bloques. Cada ticket está listo para copiar/pegar como Issue en GitHub. Mantén el estilo didáctico: descripción, tareas, pistas y criterio de finalización. No incluyas soluciones completas.

---

## Bloque 1 — Arrancar el proyecto

### PROJ-01 – Clonar el repo y levantar el servidor

**Descripción**
Clona el repositorio, copia `.env.example` a `.env`, instala dependencias y arranca el servidor en modo desarrollo.

**Checklist**
- [ ] Clonar el repo / hacer fork si se requiere.
- [ ] Copiar `.env.example` → `.env` y ajustar `DATABASE_URL`.
- [ ] `npm install`.
- [ ] `npm run dev`.
- [ ] Probar `http://localhost:3000` y `http://localhost:3000/api/health`.

**Tips**
- Si hay error en la BD: verifica que MySQL esté corriendo y `DATABASE_URL` en `.env`.

**Labels**: setup, iniciantes

### PROJ-02 – Diagrama simple del sistema

**Descripción**
Diagrama (imagen o Markdown) que muestre Frontend ↔ Backend ↔ BD ↔ PokéAPI y flujos principales.

**Checklist**
- [ ] Dibujar componentes y flujos.
- [ ] Guardar en `docs/diagram.*`.

**Labels**: documentation, design

---

## Bloque 2 — Base de datos y Prisma

### DB-01 – Diseñar modelos en papel (User, Deck, DeckPokemon, FavoritePokemon)

**Descripción**
Diseñar las entidades y relaciones antes de tocar `schema.prisma`.

**Checklist**
- [ ] Documentar `User`, `Deck`, `DeckPokemon`, `FavoritePokemon` y sus campos.
- [ ] Especificar relaciones 1:N/N:M.
- [ ] Subir diseño a `docs/model-design.md`.

**Labels**: database, design

### DB-02 – Pasar el diseño a `schema.prisma`

**Descripción**
Implementar los modelos acordados en `prisma/schema.prisma`.

**Checklist**
- [ ] Añadir modelos en `schema.prisma` (usar los nombres: `User`, `Deck`, `DeckPokemon`, `FavoritePokemon`, `PokemonCache`).
- [ ] Ejecutar `npx prisma migrate dev --name init`.

**Labels**: database, backend

### DB-03 – Crear la primera migración y abrir Prisma Studio

**Descripción**
Aplicar migraciones y verificar modelos con Prisma Studio.

**Checklist**
- [ ] `npx prisma migrate dev --name init`.
- [ ] `npx prisma studio` y comprobar modelos.

**Labels**: database, backend

---

## Bloque 3 — Backend / API

### API-01 – Entender `/api/health` y la estructura de rutas

**Descripción**
Leer `src/server.js` y `src/routes/health.routes.js` para entender cómo montar rutas y middlewares.

**Checklist**
- [ ] Identificar cómo se montan los routers (`app.use('/api/...')`).
- [ ] Documentar brevemente en comentarios dónde añadir nuevas rutas.

**Labels**: backend, learning

### API-02 – CRUD de ejemplo con Prisma (`DemoItem`)

**Descripción**
Crear un modelo `DemoItem` y exponer `GET /api/demo-items` y `POST /api/demo-items` para practicar con Prisma.

**Checklist**
- [ ] Añadir `DemoItem` a `schema.prisma`.
- [ ] Migrar (`npx prisma migrate dev --name demo-item`).
- [ ] Implementar rutas en `src/routes/demo.routes.js` usando Prisma.

**Labels**: backend, api

### API-03 – Definir el contrato de endpoints (`docs/api-contract.md`)

**Descripción**
Documentar los endpoints planeados con método, URL, parámetros/ejemplos y respuestas.

**Checklist**
- [ ] Crear `docs/api-contract.md` con ejemplo de request/response.
- [ ] Incluir endpoints usados por frontend (ver `docs/FRONTEND.md`).

**Labels**: documentation, api

---

## Bloque 4 — Frontend

### FE-01 – Navbar y secciones en `index.html`

**Descripción**
Mejorar `public/index.html` con navbar y secciones que expliquen la app.

**Checklist**
- [ ] Añadir navbar con enlaces a `users.html`, `pokemon.html`, `decks.html`.
- [ ] Crear secciones/cards explicativas.

**Labels**: frontend, ui

### FE-02 – `users.html` con formulario base

**Descripción**
Crear UI para login/crear usuario (nombre, email) en `public/users.html`.

**Checklist**
- [ ] Form con nombre y email.
- [ ] Validación básica en cliente.
### DB-01 – Diseñar modelos en papel (User, Deck, DeckPokemon, FavoritePokemon)

**Descripción**
Diseñar las entidades y relaciones antes de tocar `schema.prisma`.

**Checklist**
- [ ] Documentar `User`, `Deck`, `DeckPokemon`, `FavoritePokemon` y sus campos.
- [ ] Especificar relaciones 1:N/N:M.
- [ ] Subir diseño a `docs/model-design.md`.

**Labels**: database, design

### DB-02 – Pasar el diseño a `schema.prisma`

**Descripción**
Implementar los modelos acordados en `prisma/schema.prisma`.

**Checklist**
- [ ] Añadir modelos en `schema.prisma` (usar los nombres: `User`, `Deck`, `DeckPokemon`, `FavoritePokemon`, `PokemonCache`).
- [ ] Ejecutar `npx prisma migrate dev --name init`.

**Labels**: database, backend

### DB-03 – Crear la primera migración y abrir Prisma Studio

**Descripción**
Aplicar migraciones y verificar modelos con Prisma Studio.

**Checklist**
- [ ] `npx prisma migrate dev --name init`.
- [ ] `npx prisma studio` y comprobar modelos.

**Labels**: database, backend

---

## Bloque 3 — Backend / API

### API-01 – Entender `/api/health` y la estructura de rutas

**Descripción**
Leer `src/server.js` y `src/routes/health.routes.js` para entender cómo montar rutas y middlewares.

**Checklist**
- [ ] Identificar cómo se montan los routers (`app.use('/api/...')`).
- [ ] Documentar brevemente en comentarios dónde añadir nuevas rutas.

**Labels**: backend, learning

### API-02 – CRUD de ejemplo con Prisma (`DemoItem`)

**Descripción**
Crear un modelo `DemoItem` y exponer `GET /api/demo-items` y `POST /api/demo-items` para practicar con Prisma.

**Checklist**
- [ ] Añadir `DemoItem` a `schema.prisma`.
- [ ] Migrar (`npx prisma migrate dev --name demo-item`).
- [ ] Implementar rutas en `src/routes/demo.routes.js` usando Prisma.

**Labels**: backend, api

### API-03 – Definir el contrato de endpoints (`docs/api-contract.md`)

**Descripción**
Documentar los endpoints planeados con método, URL, parámetros/ejemplos y respuestas.

**Checklist**
- [ ] Crear `docs/api-contract.md` con ejemplo de request/response.
- [ ] Incluir endpoints usados por frontend (ver `docs/FRONTEND.md`).

**Labels**: documentation, api

---

## Bloque 4 — Frontend

### FE-01 – Navbar y secciones en `index.html`

**Descripción**
Mejorar `public/index.html` con navbar y secciones que expliquen la app.

**Checklist**
- [ ] Añadir navbar con enlaces a `users.html`, `pokemon.html`, `decks.html`.
- [ ] Crear secciones/cards explicativas.

**Labels**: frontend, ui

### FE-02 – `users.html` con formulario base

**Descripción**
Crear UI para login/crear usuario (nombre, email) en `public/users.html`.

**Checklist**
- [ ] Form con nombre y email.
- [ ] Validación básica en cliente.

**Labels**: frontend

### FE-03 – Guardar usuario en `localStorage` y redirigir

**Descripción**
Tras `POST /api/users/login-or-create`, guardar `currentUserId` y redirigir a `decks.html`.

**Checklist**
- [ ] Implementar fetch y guardar `localStorage.setItem('currentUserId', id)`.
- [ ] Redirigir a `public/decks.html`.

**Labels**: frontend, integration

---

## Bloque 5 — Integración: Decks y PokéAPI

### DECK-01 – Crear modelo `Deck` y `DeckPokemon` en Prisma

**Descripción**
Crear modelos `Deck` y `DeckPokemon` en `prisma/schema.prisma`.

**Checklist**
- [ ] `Deck` con `id, name, userId, createdAt` y relación a `User`.
- [ ] `DeckPokemon` con `id, deckId, pokemonId, position`.
- [ ] Migrar y verificar en Prisma Studio.

**Labels**: database, deck

### DECK-02 – Endpoint: listar mazos de un usuario

**Descripción**
Implementar `GET /api/decks?userId=` en `src/routes/decks.routes.js`.

**Checklist**
- [ ] Crear/editar `src/routes/decks.routes.js`.
- [ ] Usar Prisma para consultar por `userId` y devolver JSON.

**Labels**: backend, api, deck

### POKE-01 – Investigar PokéAPI y proponer estrategia de uso

**Descripción**
Investigar endpoints de PokéAPI y decidir estrategia: proxy/caché en backend o peticiones directas desde frontend.

**Checklist**
- [ ] Documentar endpoints útiles en `docs/pokeapi-plan.md`.
- [ ] Recomendar campos a cachear (ver `docs/DATABASE.md`).

**Labels**: integration, pokeapi

### INTEG-01 – Endpoint para añadir/remover Pokémon en un deck (validar límite 6)

**Descripción**
Crear rutas para añadir/remover Pokémon en un deck y validar que no se supere 6 elementos.

**Checklist**
- [ ] `POST /api/decks/:deckId/pokemons` (body: `{ pokemonId }`).
- [ ] `DELETE /api/decks/:deckId/pokemons/:id`.
- [ ] Validación del máximo 6 por deck.

**Labels**: backend, integration

---

## Cómo crear Issues desde estos tickets

1. Copia el bloque del ticket (título + contenido) en GitHub → Issues → New issue.
2. Ajusta `Assignee` y `Labels` según el equipo.
3. Crea una rama por ticket para trabajar y abrir PRs pequeños.

---

Si quieres, puedo crear los Issues automáticamente en GitHub usando la API (necesitaré un token) o generar plantillas de Issue/PR en `.github/ISSUE_TEMPLATE/`.
```markdown
# 📋 PokéDeck — TICKETS / Project Tasks

Este archivo contiene los tickets sugeridos organizados por bloques. Cada ticket está listo para copiar/pegar como Issue en GitHub. Mantén el estilo didáctico: descripción, tareas, pistas y criterio de finalización. No incluyas soluciones completas.

---


## Bloque 1 — Arrancar el proyecto

### PROJ-01 – Clonar el repo y levantar el servidor

**Descripción**
Clona el repositorio, copia `.env.example` a `.env`, instala dependencias y arranca el servidor en modo desarrollo.

**Checklist**
- [ ] Clonar el repo / hacer fork si se requiere.
- [ ] Copiar `.env.example` → `.env` y ajustar `DATABASE_URL`.
- [ ] `npm install`.
- [ ] `npm run dev`.
- [ ] Probar `http://localhost:3000` y `http://localhost:3000/api/health`.

**Tips**
- Si hay error en la BD: verifica que MySQL esté corriendo y `DATABASE_URL` en `.env`.

**Labels**: setup, iniciantes


### PROJ-02 – Diagrama simple del sistema

**Descripción**
Diagrama (imagen o Markdown) que muestre Frontend ↔ Backend ↔ BD ↔ PokéAPI y flujos principales.

**Checklist**
## Cómo crear Issues desde estos tickets

1. Copia el bloque del ticket (título + contenido) en GitHub → Issues → New issue.
2. Ajusta `Assignee` y `Labels` según el equipo.
3. Crea una rama por ticket para trabajar y abrir PRs pequeños.

---

Si quieres, puedo crear los Issues automáticamente en GitHub usando la API (necesitaré un token) o generar plantillas de Issue/PR en `.github/ISSUE_TEMPLATE/`.

### DECK-02 – Endpoint: listar mazos de un usuario

**Descripción**
Implementar `GET /api/decks?userId=` en `src/routes/decks.routes.js`.

**Checklist**
- [ ] Crear/editar `src/routes/decks.routes.js`.
- [ ] Usar Prisma para consultar por `userId` y devolver JSON.

**Labels**: backend, api, deck


### POKE-01 – Investigar PokéAPI y proponer estrategia de uso

**Descripción**
Investigar endpoints de PokéAPI y decidir estrategia: proxy/caché en backend o peticiones directas desde frontend.

**Checklist**
- [ ] Documentar endpoints útiles en `docs/pokeapi-plan.md`.
- [ ] Recomendar campos a cachear (ver `docs/DATABASE.md`).

**Labels**: integration, pokeapi
### INTEG-01 – Endpoint para añadir/remover Pokémon en un deck (validar límite 6)

**Descripción**
Crear rutas para añadir/remover Pokémon en un deck y validar que no se supere 6 elementos.

**Checklist**
- [ ] `POST /api/decks/:deckId/pokemons` (body: `{ pokemonId }`).
- [ ] `DELETE /api/decks/:deckId/pokemons/:id`.
- [ ] Validación del máximo 6 por deck.

**Labels**: backend, integration

---

## Cómo crear Issues desde estos tickets

1. Copia el bloque del ticket (título + contenido) en GitHub → Issues → New issue.
2. Ajusta `Assignee` y `Labels` según el equipo.
3. Crea una rama por ticket para trabajar y abrir PRs pequeños.

---

Si quieres, puedo crear los Issues automáticamente en GitHub usando la API (necesitaré un token) o generar plantillas de Issue/PR en `.github/ISSUE_TEMPLATE/`.



### DB-02 – Pasar el diseño a `schema.prisma`

**Descripción**
Implementar los modelos acordados en `prisma/schema.prisma`.

**Checklist**
- [ ] Añadir modelos en `schema.prisma` (usar los nombres: `User`, `Deck`, `DeckPokemon`, `FavoritePokemon`, `PokemonCache`).
- [ ] Ejecutar `npx prisma migrate dev --name init`.

**Labels**: database, backend


### DB-03 – Crear la primera migración y abrir Prisma Studio

**Descripción**
Aplicar migraciones y verificar modelos con Prisma Studio.

**Checklist**
- [ ] `npx prisma migrate dev --name init`.
- [ ] `npx prisma studio` y comprobar modelos.

**Labels**: database, backend

---

## Bloque 3 — Backend / API

### API-01 – Entender `/api/health` y la estructura de rutas

**Descripción**
Leer `src/server.js` y `src/routes/health.routes.js` para entender cómo montar rutas y middlewares.

**Checklist**
- [ ] Identificar cómo se montan los routers (`app.use('/api/...')`).
- [ ] Documentar brevemente en comentarios dónde añadir nuevas rutas.

**Labels**: backend, learning


### API-02 – CRUD de ejemplo con Prisma (`DemoItem`)

**Descripción**
Crear un modelo `DemoItem` y exponer `GET /api/demo-items` y `POST /api/demo-items` para practicar con Prisma.

**Checklist**
- [ ] Añadir `DemoItem` a `schema.prisma`.
- [ ] Migrar (`npx prisma migrate dev --name demo-item`).
- [ ] Implementar rutas en `src/routes/demo.routes.js` usando Prisma.

**Labels**: backend, api


### API-03 – Definir el contrato de endpoints (`docs/api-contract.md`)

**Descripción**
Documentar los endpoints planeados con método, URL, parámetros/ejemplos y respuestas.

**Checklist**
- [ ] Crear `docs/api-contract.md` con ejemplo de request/response.
- [ ] Incluir endpoints usados por frontend (ver `FRONTEND.md`).

**Labels**: documentation, api

---

## Bloque 4 — Frontend

### FE-01 – Navbar y secciones en `index.html`

**Descripción**
Mejorar `public/index.html` con navbar y secciones que expliquen la app.

**Checklist**
- [ ] Añadir navbar con enlaces a `users.html`, `pokemon.html`, `decks.html`.
- [ ] Crear secciones/cards explicativas.

**Labels**: frontend, ui


### FE-02 – `users.html` con formulario base

**Descripción**
Crear UI para login/crear usuario (nombre, email) en `public/users.html`.

**Checklist**
- [ ] Form con nombre y email.
- [ ] Validación básica en cliente.

**Labels**: frontend


### FE-03 – Guardar usuario en `localStorage` y redirigir

**Descripción**
Tras `POST /api/users/login-or-create`, guardar `currentUserId` y redirigir a `decks.html`.

**Checklist**
- [ ] Implementar fetch y guardar `localStorage.setItem('currentUserId', id)`.
- [ ] Redirigir a `public/decks.html`.

**Labels**: frontend, integration

---

## Bloque 5 — Integración: Decks y PokéAPI

### DECK-01 – Crear modelo `Deck` y `DeckPokemon` en Prisma

**Descripción**
Crear modelos `Deck` y `DeckPokemon` en `prisma/schema.prisma`.

**Checklist**
- [ ] `Deck` con `id, name, userId, createdAt` y relación a `User`.
- [ ] `DeckPokemon` con `id, deckId, pokemonId, position`.
- [ ] Migrar y verificar en Prisma Studio.

**Labels**: database, deck


### DECK-02 – Endpoint: listar mazos de un usuario

**Descripción**
Implementar `GET /api/decks?userId=` en `src/routes/decks.routes.js`.

**Checklist**
- [ ] Crear/editar `src/routes/decks.routes.js`.
- [ ] Usar Prisma para consultar por `userId` y devolver JSON.

**Labels**: backend, api, deck


### POKE-01 – Investigar PokéAPI y proponer estrategia de uso

**Descripción**
Investigar endpoints de PokéAPI y decidir estrategia: proxy/caché en backend o peticiones directas desde frontend.

**Checklist**
- [ ] Documentar endpoints útiles en `docs/pokeapi-plan.md`.
- [ ] Recomendar campos a cachear (ver `DATABASE.md`).

**Labels**: integration, pokeapi
### INTEG-01 – Endpoint para añadir/remover Pokémon en un deck (validar límite 6)

**Descripción**
Crear rutas para añadir/remover Pokémon en un deck y validar que no se supere 6 elementos.

**Checklist**
- [ ] `POST /api/decks/:deckId/pokemons` (body: `{ pokemonId }`).
- [ ] `DELETE /api/decks/:deckId/pokemons/:id`.
- [ ] Validación del máximo 6 por deck.

**Labels**: backend, integration

---

## Cómo crear Issues desde estos tickets

1. Copia el bloque del ticket (título + contenido) en GitHub → Issues → New issue.
2. Ajusta `Assignee` y `Labels` según el equipo.
3. Crea una rama por ticket para trabajar y abrir PRs pequeños.

---

Si quieres, puedo crear los Issues automáticamente en GitHub usando la API (necesitaré un token) o generar plantillas de Issue/PR en `.github/ISSUE_TEMPLATE/`.

