
# 🗄️ DATABASE — Guía para desarrolladores

Guía detallada sobre modelado con Prisma, migraciones y estrategia de caché para PokéAPI. Aquí encontrarás las decisiones de diseño que el backend y el frontend esperan (nombres de modelos y relaciones).

> Nota: la configuración para ejecutar migraciones y Prisma Studio está resumida en `README.md`.

## Modelos clave (convención de nombres)

Usaremos estos nombres coherentes en toda la documentación y tickets:

- `User`
- `Deck`
- `DeckPokemon` (también llamado `DeckEntry` en algunos comentarios; usa `DeckPokemon` por consistencia)
- `FavoritePokemon`
- `PokemonCache` (tabla opcional para cachear respuestas de PokéAPI)

### Ejemplo básico de `schema.prisma`

Incluye las piezas mínimas para que el resto del proyecto funcione:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        Int        @id @default(autoincrement())
  name      String
  email     String     @unique
  createdAt DateTime   @default(now())
  decks     Deck[]
  favorites FavoritePokemon[]
}

model Deck {
  id        Int          @id @default(autoincrement())
  name      String
  userId    Int
  user      User         @relation(fields: [userId], references: [id])
  entries   DeckPokemon[]
  createdAt DateTime     @default(now())
}

model DeckPokemon {
  id        Int      @id @default(autoincrement())
  deckId    Int
  deck      Deck     @relation(fields: [deckId], references: [id])
  pokemonId Int
  position  Int
}

model FavoritePokemon {
  id        Int      @id @default(autoincrement())
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
  pokemonId Int
  addedAt   DateTime @default(now())
}

model PokemonCache {
  id        Int      @id @default(autoincrement())
  pokemonId Int      @unique
  name      String
  mainType  String?
  spriteUrl String?
  updatedAt DateTime @updatedAt
}
```

Usa esta estructura como base y adapta campos adicionales según necesidad. Mantén los nombres de modelos tal cual para evitar inconsistencias entre docs y código.

## Migraciones (resumen práctico)

Flujo típico en desarrollo:

```bash
npx prisma migrate dev --name add-deck-models
npx prisma studio
```

- Guarda las migraciones (`prisma/migrations/`) en Git.
- En desarrollo puedes usar `npx prisma migrate reset --force` si necesitas reconstruir la BD (NO usar en producción).

## Estrategia de caché para PokéAPI

Se recomienda crear `PokemonCache` para no depender de llamadas repetidas a la PokéAPI. Flujo:

1. Backend recibe `GET /api/pokemon/:id`.
2. Busca en `PokemonCache` por `pokemonId`.
3. Si existe y está vigente, devuelve la fila.
4. Si no existe, llama a PokéAPI, parsea los campos necesarios y guarda en `PokemonCache`.

Campos mínimos para cache:

- `pokemonId`, `name`, `mainType`, `spriteUrl`, `updatedAt`.

## Errores frecuentes y mitigaciones

- `Unique constraint failed (email)`: validar existencia antes de crear usuario.
- `Foreign key constraint failed`: validar existencia de FK (por ejemplo, `userId`) antes de insertar.
- Problemas en migraciones: revisar el historial en `prisma/migrations/` y usar `migrate reset` si es necesario en dev.

## Checklists útiles

- DB-01: diseño en papel de `User`, `Deck`, `DeckPokemon`, `FavoritePokemon` → documento en `docs/`.
- DB-02: implementar en `schema.prisma` y correr `npx prisma migrate dev --name init`.
- DB-03: abrir `npx prisma studio` y verificar los modelos.

---

Si quieres, puedo generar una versión mínima de `schema.prisma` en un branch nuevo o preparar un seed script para datos de ejemplo. ¿Te interesa que lo haga? 

---

## ✅ Checklist: ¿qué me falta en la capa de BD?

- [ ] ¿Tengo definidos los modelos básicos? (User, Deck, DeckPokemon).

- [ ] ¿He hecho al menos una migración con éxito? (`npx prisma migrate dev --name init`).

- [ ] ¿Puedo abrir Prisma Studio y ver las tablas?

- [ ] ¿Tengo relaciones definidas entre tablas?

- [ ] ¿Entiendo para qué se usa cada tabla?

- [ ] ¿Tengo claro cómo llamar a Prisma desde el backend? (ej: `prisma.user.findMany()`).

Si respondiste "no" a alguno, ese es tu siguiente paso.

---

## 📖 Conceptos de BD que deberías googlear si no te suenan

- **Clave primaria (primary key)**: el identificador único de cada fila.

- **Clave foránea (foreign key)**: referencia a la clave primaria de otra tabla.

- **Relación 1:N (uno a muchos)**: un user tiene muchos decks.

- **Relación N:M (muchos a muchos)**: un deck tiene muchos pokémon, y un pokémon puede estar en muchos decks (en este caso es DeckPokemon la tabla intermedia).

- **Timestamp (createdAt, updatedAt)**: fecha y hora de cuándo se creó/modificó un registro.

- **@unique**: restricción para que un valor no se repita en una columna.

- **Relación lazy vs eager**: lazy = traer solo el User, eager = traer User + todos sus Decks de golpe.

Prisma docs tiene explicaciones para todos estos: https://www.prisma.io/docs/

---

## 🎁 Extras recomendados (opcional, pero útiles)

### 1. Índices para consultas frecuentes

Si vas a buscar decks por userId muchas veces, añade un índice:
```text
model Deck {
  ...
  @@index([userId])
}
```text
Prisma corre una migración y la BD indexa para búsquedas más rápidas.

### 2. Timestamps automáticos

En todos tus modelos, incluye:
```text
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
```text
Prisma gestiona estos campos automáticamente.

### 3. Validaciones a nivel de BD

Algunos campos pueden tener restricciones:
```text
position Int  // en DeckPokemon, podrías validar 1-6 aquí o en el backend
```text
Aunque es mejor validar en el backend, porque DB constraints son más difíciles de testear.

### 4. Seed (datos de ejemplo)

Crea un archivo `prisma/seed.js` que inserte datos de prueba:
```bash
node prisma/seed.js
```text
Útil para tener la BD lista con datos al empezar a trabajar.

---

¡La BD es el corazón del proyecto! Tómate tiempo entendiendo los modelos.  
Si necesitas ver cómo se ven tus tablas, abre Prisma Studio. 🎯
