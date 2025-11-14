# PokéDeck UDI — Configuración del Proyecto

## Archivos de configuración incluidos

Este proyecto incluye varios archivos de configuración para mantener consistencia, seguridad y calidad de código.

### `.gitignore`

Define qué archivos y carpetas **NO** deben subirse a Git:

- **`node_modules/`** — librerías instaladas (ocupan mucho espacio, se regeneran con `npm install`).
- **`.env` y `.env.local`** — variables de entorno (datos sensibles como contraseñas BD).
- **`*.db`, `dev.db`** — archivos de base de datos local.
- **`logs/`, `dist/`, `.vscode/`, `.DS_Store`** — archivos temporales y del sistema.

**Importante**: `.env` nunca debe subirse a Git. Usa `.env.example` como plantilla pública.

### `.env.example`

Plantilla pública con las variables de entorno necesarias:

```
DATABASE_URL=
PORT=3000
```

Cada alumno copia este archivo a `.env` y rellena sus valores locales.

### `.prettierrc`

Configura el formateador de código (Prettier):

- **`semi: true`** — añade punto y coma al final de líneas.
- **`singleQuote: true`** — usa comillas simples en strings.
- **`printWidth: 100`** — rompe líneas en 100 caracteres.
- **`tabWidth: 2`** — indentación de 2 espacios.

Úsalo: `npx prettier --write .` (formatea todos los archivos).

### `.eslintrc.json`

Configura ESLint (linter de código JavaScript):

- Advierte sobre variables no usadas.
- Recomienda `===` en lugar de `==`.
- Permite `console.log()` (útil en desarrollo).

Úsalo: `npx eslint src/` (busca problemas de código).

### `.editorconfig` (opcional)

Mantiene consistencia de formato entre editores (spaces, línea final, encoding).

---

## Recomendaciones para el equipo

1. **Antes de hacer commit**, formatea el código:
   ```bash
   npm run prettier
   ```

2. **Antes de push**, revisa lint:
   ```bash
   npm run lint
   ```

3. **En `.gitignore`**, siempre está `.env` y `node_modules/`. No los commitees.

4. **Si clonaste el repo**, recuerda: `npm install` regenera `node_modules/`.

---

Si quieres añadir más reglas de ESLint o cambiar formato de Prettier, edita los archivos correspondientes.
