# 🐉 PokéDeck

PokéDeck es un proyecto educativo FULLSTACK para equipos pequeños (4 alumnos). Construirás una aplicación donde cada usuario puede crear mazos (hasta 6 Pokémon), buscar pokémon, ver detalles y marcar favoritos. El objetivo es aprender el flujo Frontend ↔ Backend ↔ Base de datos e integrar la PokéAPI.

## 🧰 Stack

- Frontend: HTML, CSS, JavaScript (vanilla) y Bootstrap
- Backend: Node.js + Express
- Base de datos: MySQL con Prisma ORM
- API externa: PokéAPI

## 🎯 Objetivo pedagógico (resumido)

Aprender a diseñar la UI, exponer rutas REST en el servidor, modelar datos en la BD y consumir APIs externas. Además practicar colaboración, control de versiones y trabajo por tickets.

## ⚡ Configuración rápida

1. Clona el repo y entra en la carpeta del proyecto:

```bash
git clone <repo-url>
cd fullstack-practice-pokedex/pokedeck-udi
```

2. Copia `.env.example` → `.env` y completa `DATABASE_URL`.

3. Instala dependencias y levanta en modo desarrollo:

```bash
npm install
npm run dev
```

4. Verifica en el navegador:

- `http://localhost:3000`
- `http://localhost:3000/api/health`

Para instrucciones detalladas (ejemplos de `DATABASE_URL`, comandos de Prisma, solución de errores frecuentes), consulta los documentos en [pokedeck-udi/docs/](pokedeck-udi/docs/).

## 🗂 Estructura breve

- `pokedeck-udi/public/` — páginas HTML, CSS y JS del frontend.
- `pokedeck-udi/src/` — servidor Express y rutas.
- `pokedeck-udi/prisma/` — `schema.prisma` y migraciones.
- `pokedeck-udi/docs/` — guías detalladas por capa.

## 📋 Tareas / Tickets

Las tareas detalladas están en `TICKETS.md`. Usa ese archivo para crear Issues en GitHub (están organizados por bloques y listos para copiar/pegar).

## 📚 Enlaces rápidos

- [`pokedeck-udi/docs/BACKEND.md`](pokedeck-udi/docs/BACKEND.md)
- [`pokedeck-udi/docs/DATABASE.md`](pokedeck-udi/docs/DATABASE.md)
- [`pokedeck-udi/docs/FRONTEND.md`](pokedeck-udi/docs/FRONTEND.md)
- [`TICKETS.md`](TICKETS.md)

## ¿Qué hacer ahora?

- Reparte los tickets entre los integrantes y trabajad en ramas pequeñas.
- Si quieres que convierta los tickets en Issues automáticamente, dímelo (necesitaré un token).

¡A programar! 🚀

# 🐉 PokéDeck

Descripción breve  
PokéDeck es un mini proyecto FULLSTACK. La idea es construir una pequeña aplicación donde hay usuarios (sin autenticación compleja), cada usuario puede tener mazos (decks) de hasta 6 Pokémon, se pueden buscar Pokémon por nombre o tipo, ver detalle de cada Pokémon y marcar favoritos. No buscamos un producto perfecto: el objetivo es que entiendas el flujo Frontend ↔ Backend ↔ Base de datos, cómo consumir una API externa (PokéAPI) y cómo organizar el trabajo en tickets.

Stack principal

- Frontend: HTML + CSS + JavaScript + Bootstrap
- Backend: Node.js + Express
- Base de datos: MySQL (gestión con Prisma ORM)
- API externa: PokéAPI (<https://pokeapi.co>)

---

## 🎯 Objetivo para los alumnos

El objetivo NO es memorizar frameworks, sino:

- Entender cómo se conectan el frontend, el backend y la base de datos.
- Aprender a consumir APIs externas y a integrar datos entre servicios.
- Practicar cómo leer documentación oficial y traducirla a código.
- Trabajar en equipo organizando tareas (tickets), revisiones y despliegues simples.

El profesor te entrega un boilerplate mínimo (estructura de carpetas, servidor Express básico, `prisma` inicializado y una carpeta `public/` con `index.html`). Gran parte del trabajo lo harán ustedes: diseñar modelos, crear rutas, construir páginas y unir todo.

---

## 🛠 Configuración inicial — paso a paso (muy detallado)

Esto está pensado para alguien que nunca trabajó con `.env` ni `npm run dev`.

### ¿Qué es `.env` y por qué existe `.env.example`?

`.env` es un archivo donde guardas variables de entorno (datos sensibles o configuración que no quieres subir al repositorio).  
`.env.example` es una plantilla pública para que todos sepan qué variables deben definir. Nunca subas tu `.env` a Git.

### Crear tu `.env` a partir de `.env.example`

1. Abre el proyecto en VS Code.
2. En la raíz del proyecto (donde está `package.json`) verás `.env.example`.
3. Haz una copia y renómbrala a `.env`:
   - En VS Code: clic derecho sobre `.env.example` → Copy → Paste → renombra a `.env`.
   - O crea un archivo nuevo llamado `.env` y pega el contenido de `.env.example`.
4. Abre `.env` y localiza la línea `DATABASE_URL`. Ese valor indica cómo conectarse a la base de datos.

### Ejemplos de `DATABASE_URL` (MySQL)

- Formato general: `mysql://USUARIO:CONTRASENA@HOST:PUERTO/NOMBRE_BD`
- Ejemplo sin contraseña (local, usuario `root`):

  ```
  DATABASE_URL="mysql://root:@localhost:3306/pokedeck_udi"
  PORT=3000
  ```

- Ejemplo con contraseña:

  ```
  DATABASE_URL="mysql://root:1234@localhost:3306/pokedeck_udi"
  ```

- Ejemplo con otro usuario:

  ```
  DATABASE_URL="mysql://alumno:miPass@localhost:3306/pokedeck_udi"
  ```

Explicación rápida:

- `root` → usuario de la base de datos.
- `1234` → contraseña (si existe).
- `localhost` → host (si trabajas local).
- `3306` → puerto por defecto de MySQL.
- `pokedeck_udi` → nombre de la base de datos (prisma usará esto).

### Instalar dependencias

- Abre una terminal en la carpeta `pokedeck-udi` (la raíz del proyecto).
- Comprueba que tu prompt muestre algo como `.../pokedeck-udi $`.
- Ejecuta:

```bash
npm install
```

Espera a que termine.

### Levantar el servidor (modo desarrollo)

```bash
npm run dev
```

- Si todo va bien verás un mensaje en la terminal del estilo: `Servidor escuchando en http://localhost:3000`.
- Abre en el navegador:
  - `http://localhost:3000` → página de inicio.
  - `http://localhost:3000/api/health` → healthcheck (JSON).

### Problemas frecuentes y soluciones rápidas

- **Error de conexión a la base de datos**
  - Verifica que MySQL esté corriendo.
  - Revisa la cadena `DATABASE_URL` en `.env` (usuario, contraseña, host, puerto, nombre BD).
  - Asegúrate que la BD `pokedeck_udi` exista o crea una.

- **`npm` no encontrado**
  - No tienes Node.js instalado o no está en el PATH.
  - Descarga Node: <https://nodejs.org>

- **Puertos en uso**
  - Si el puerto 3000 está ocupado cambia `PORT` en `.env` o cierra la aplicación que lo usa.

---

## 🚀 Tickets para GitHub Issues

Copia y pega cada sección en GitHub Issues, manteniendo el formato Markdown.

### Bloque 1 — Arrancar el proyecto

#### PROJ-01 – Clonar el repo y levantar el servidor

```
## Descripción
Clona el repositorio del proyecto, crea tu archivo `.env` a partir de `.env.example`, instala dependencias y arranca el servidor en modo desarrollo. El objetivo es que cada integrante tenga el proyecto funcionando localmente antes de tocar código.

## Qué hay que hacer
- [ ] Clonar el repo (o hacer fork si pide).
- [ ] Copiar `.env.example` → `.env` y ajustar `DATABASE_URL`.
- [ ] Ejecutar `npm install`.
- [ ] Ejecutar `npm run dev`.
- [ ] Probar `/` y `/api/health` en el navegador.

## Tips / pistas
- Si hay error en la DB, revisa la URL en `.env`.
- Usa `git status` para confirmar que no subes `.env`.

## ✅ Hecho cuando
Puedes abrir `http://localhost:3000` y `http://localhost:3000/api/health` devuelve JSON.

## Assignee
Todos

## Labels
setup, iniciantes
```

#### PROJ-02 – Hacer un diagrama simple del sistema

```
## Descripción
Haz un diagrama (imagen o Markdown con ASCII) que muestre Frontend, Backend, Base de datos y la PokéAPI, con flechas indicando las direcciones de las llamadas. Guarda el diagrama en `docs/architecture.png` o `docs/diagram.md`.

## Qué hay que hacer
- [ ] Dibujar las cajas: Frontend, Backend, DB, PokéAPI.
- [ ] Indicar endpoints clave y flujo de datos.
- [ ] Subir el archivo a `docs/` y crear un pequeño README en `docs/` explicando el diagrama.

## Tips / pistas
- Herramientas: draw.io, diagrams.net, o un diagrama en Markdown.
- Piensa en quién hace la petición al buscar un pokémon: frontend → backend → PokéAPI.

## ✅ Hecho cuando
El repositorio contiene `docs/diagram.*` y la imagen/archivo refleja el flujo básico.

## Assignee
Un alumno (documentación)

## Labels
documentation, design
```

### Bloque 2 — Base de datos y Prisma

#### DB-01 – Diseñar modelos en papel (User, Deck, DeckPokemon, Favoritos)

```
## Descripción
Antes de tocar `schema.prisma`, dibuja en papel o en un documento las tablas que necesitas, sus campos principales y las relaciones entre ellas. Esto ayuda a evitar cambios apresurados en la DB.

## Qué hay que hacer
- [ ] Definir entidades: `User`, `Deck`, `DeckPokemon`, `FavoritePokemon`, `Pokemon` (opcional).
- [ ] Para cada entidad, definir campos principales y tipos (id, name, email, createdAt, etc.).
- [ ] Dibujar relaciones (1:N, N:M).

## Tips / pistas
- Un `Deck` pertenece a un `User`. Un `Deck` tiene muchas entradas (cada entrada apunta a un Pokemon).
- Para favoritos puedes usar una tabla intermedia `FavoritePokemon` con userId y pokemonId.

## ✅ Hecho cuando
Tienes un documento en `docs/model-design.md` con las tablas y relaciones.

## Assignee
Un alumno (diseño de BD)

## Labels
database, design
```

#### DB-02 – Pasar el diseño a `schema.prisma`

```
## Descripción
Traduce el diseño del ticket anterior al archivo `prisma/schema.prisma` usando la sintaxis de Prisma. Añade campos suficientes para la práctica (timestamps, relaciones).

## Qué hay que hacer
+ [ ] Editar `prisma/schema.prisma`.
+ [ ] Añadir modelos `User`, `Deck`, `DeckPokemon`, `FavoritePokemon`, `Pokemon` (si corresponde).
+ [ ] Guardar y validar sintaxis.

## Tips / pistas
- Revisa la doc de data modeling en Prisma para tipos y relaciones: https://www.prisma.io/docs/concepts/components/prisma-schema/data-model
- No olvides `@id`, `@default`, y `@relation` donde aplique.

## ✅ Hecho cuando
`schema.prisma` contiene los modelos acordados sin errores de sintaxis.

## Assignee
Un alumno (backend)

## Labels
database, backend
```

#### DB-03 – Crear la primera migración y abrir Prisma Studio

```
## Descripción
Aplica tu esquema a la base de datos y abre Prisma Studio para ver/crear registros manualmente.

## Qué hay que hacer
- [ ] Ejecutar: `npx prisma migrate dev --name init`
- [ ] Ejecutar: `npx prisma studio` y observar los modelos.

## Tips / pistas
- Si usas SQLite u otra DB local, adapta `DATABASE_URL` en `.env`.
- Prisma puede pedir confirmación para crear la BD.

## ✅ Hecho cuando
Puedes ver y crear registros desde Prisma Studio.

## Assignee
Un alumno (backend)

## Labels
database, backend
```

### Bloque 3 — Backend / API

#### API-01 – Entender cómo está hecha la ruta `/api/health`

```
## Descripción
Lee `src/routes/health.routes.js` y `src/server.js` para entender cómo Express organiza rutas y middlewares. Esto te permite crear nuevas rutas con seguridad.

## Qué hay que hacer
- [ ] Abrir los archivos `src/server.js` y `src/routes/health.routes.js`.
- [ ] Localizar `app.use(...)`, `router.get(...)` y entender la respuesta.
- [ ] Documentar brevemente en comentarios cómo funciona (opcional).

## Tips / pistas
- Piensa: ¿qué URL está montada? ¿Qué devuelve la ruta?

## ✅ Hecho cuando
Puedes explicar en una línea cómo funciona `/api/health` y dónde añadir nuevas rutas.

## Assignee
Un alumno (backend)

## Labels
backend, learning
```

#### API-02 – Crear un CRUD de ejemplo (DemoItem) con Prisma

```
## Descripción
Añade un modelo `DemoItem` simple y crea rutas `GET /api/demo-items` y `POST /api/demo-items` usando Prisma para persistir datos. Sirve para practicar Prisma y rutas REST.

## Qué hay que hacer
- [ ] Añadir `model DemoItem` en `schema.prisma` (campo id y name).
- [ ] Migrar (`npx prisma migrate dev --name demo-item`) y abrir Studio.
- [ ] Crear o ampliar `src/routes/demo.routes.js` para usar Prisma en los endpoints.
- [ ] Probar con `curl` o Postman: GET y POST a `/api/demo-items`.

## Tips / pistas
- Usa `await prisma.demoItem.findMany()` y `prisma.demoItem.create({ data: ... })`.
- Maneja errores básicos y responde con status codes adecuados (200, 201, 400, 500).

## ✅ Hecho cuando
`GET /api/demo-items` devuelve lista y `POST /api/demo-items` crea un nuevo elemento en la BD.

## Assignee
Un alumno (backend)

## Labels
backend, api
```

#### API-03 – Definir el contrato de endpoints del proyecto

```
## Descripción
Antes de implementar, documenta los endpoints planeados en `docs/api-contract.md` con método, URL, parámetros, body de ejemplo y respuesta. Esto sirve como contrato para frontend/backend.

## Qué hay que hacer
- [ ] Crear `docs/api-contract.md`.
- [ ] Para cada endpoint listar método, URL, parámetros y ejemplos.
- [ ] Coordinar con el equipo de frontend para validar el contrato.

## Endpoints sugeridos (para documentar)
- `POST /api/users/login-or-create` — body: `{ name, email }` → devuelve usuario creado/existente.
- `GET /api/users` — lista usuarios.
- `GET /api/decks?userId=` — devuelve decks de un usuario.
- `POST /api/decks` — crear nuevo deck.
- `POST /api/decks/:deckId/pokemons` — añadir un pokemon al deck (validar máximo 6).
- `GET /api/pokemon/search?name=&type=` — buscar pokémon (consulta a PokéAPI).
- `GET /api/pokemon/:id` — obtener detalle (puede combinar cache local + PokéAPI).

## Tips / pistas
- No implementes aún; céntrate en el contrato. El frontend puede comenzar a trabajar con mocks.
- Usa ejemplos JSON realistas.

## ✅ Hecho cuando
`docs/api-contract.md` contiene la lista de endpoints y ejemplos.

## Assignee
Un alumno (backend) + coordinación

## Labels
documentation, api, backend
```

### Bloque 4 — Frontend

#### FE-01 – Completar navbar y secciones de `index.html`

```
## Descripción
Añade una barra de navegación en `index.html` con enlaces a `users.html`, `pokemon.html` y `decks.html`, y crea cards o secciones que expliquen la app. Esto ayuda a la navegación del proyecto.

## Qué hay que hacer
- [ ] Editar `public/index.html` para incluir navbar y secciones.
- [ ] Usar clases de Bootstrap para layout y responsividad.
- [ ] Crear links navegables a las demás páginas.

## Tips / pistas
- Mantén enfoque mobile-first.
- Usa componentes de Bootstrap ya disponibles (navbar, card, container).
- Revisa https://getbootstrap.com para ejemplos.

## ✅ Hecho cuando
La página de inicio tiene navbar funcional y enlaces a las páginas principales.

## Assignee
Un alumno (frontend)

## Labels
frontend, ui
```

#### FE-02 – Crear la página `users.html` con formulario base

```
## Descripción
Crea una interfaz simple para "login o crear usuario" con un formulario mínimo (nombre, email). Por ahora solo la UI.

## Qué hay que hacer
- [ ] Crear `public/users.html`.
- [ ] Añadir formulario con campos nombre y email.
- [ ] Añadir un pequeño script para validar campos en el cliente (validación básica).

## Tips / pistas
- No implementes la conexión a la API todavía; solo el envío y validación básica.
- Piensa en UX: mostrar mensajes de error si faltan campos.
- Usa HTML5 `<form>` y atributos `required`.

## ✅ Hecho cuando
`users.html` muestra el formulario y valida inputs en el cliente.

## Assignee
Un alumno (frontend)

## Labels
frontend, ui
```

#### FE-03 – (fase posterior) Guardar el usuario actual en `localStorage`

```
## Descripción
Cuando exista el endpoint `login-or-create`, la página `users.html` debería llamar al backend, recibir el `userId` y guardarlo en `localStorage` como `currentUserId`. Luego redirigir a `decks.html`.

## Qué hay que hacer
- [ ] Implementar fetch a `POST /api/users/login-or-create`.
- [ ] Guardar `currentUserId` en `localStorage` y redirigir.
- [ ] Manejar errores y mostrar mensajes al usuario.

## Tips / pistas
- Usar `window.localStorage.setItem('currentUserId', id)`.
- Manejar errores y mostrar mensajes al usuario (try/catch).

## ✅ Hecho cuando
Tras login la app redirige a `decks.html` y `localStorage` contiene `currentUserId`.

## Assignee
Un alumno (frontend)

## Labels
frontend, integration
```

### Bloque 5 — Integración futura (ideas / tickets de alto nivel)

**Estos tickets deben generarse más tarde cuando el equipo esté listo:**

- **INTEG-01 – Endpoints para crear/editar/eliminar decks**
  - CRUD completo para decks con validaciones.

- **INTEG-02 – Endpoint para añadir/remover Pokémon en un deck**
  - Validar límite máximo de 6 Pokémon por deck.

- **INTEG-03 – Integración con PokéAPI para búsquedas**
  - Búsquedas de Pokémon; considerar cacheo en BD o `localStorage`.

- **INTEG-04 – Página `decks.html` para listar y explorar mazos**
  - Frontend que consume el backend y muestra decks.

- **INTEG-05 – Página `pokemon-detail.html`**
  - Ver stats, tipos y sprites de la PokéAPI.

- **INTEG-06 – Sistema de favoritos**
  - Marcar/unmarcar Pokémon como favorito por usuario.

---

## 📚 Recursos de apoyo

- **Express**
  - Documentación oficial: <https://expressjs.com> (guía de inicio)

- **Prisma**
  - Documentación: <https://www.prisma.io/docs>
  - Data modeling: <https://www.prisma.io/docs/concepts/components/prisma-schema/data-model>

- **Bootstrap**
  - Documentación oficial: <https://getbootstrap.com>
  - Tutorial en español (referencia): <https://bootstrap-cheatsheet.themeselection.com/es/>

- **PokéAPI**
  - Página principal y docs: <https://pokeapi.co>

- **Fetch API y JavaScript en el navegador**
  - MDN (ES): <https://developer.mozilla.org/es/docs/Web/API/Fetch_API>

- **Node.js**
  - Descarga y docs: <https://nodejs.org>

### Consejos prácticos

- Leer siempre la documentación oficial antes de copiar soluciones.
- Probar endpoints con `curl` o Postman antes de integrarlos en el frontend.
- Hacer commits pequeños y descriptivos; cada ticket en una rama si trabajan en paralelo.
- Comunicación en el equipo: usar tablero de tareas (Trello, GitHub Projects) y hacer daily standup (incluso virtual de 5 minutos).

---

**¡A por ello! 💪 Si tienes dudas, pregunta en el foro o en clase.**
