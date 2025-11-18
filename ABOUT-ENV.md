# 🧩 Configurar `.env` y levantar el servidor (paso a paso)

### 1. ¿Qué es el archivo `.env`?

Es un archivo de texto donde guardamos **configuración privada** del proyecto, por ejemplo:

- La dirección de la base de datos.
- El puerto donde escucha el servidor.

Este archivo **NO** se sube a GitHub (por seguridad). En el repositorio encontrarás un archivo de ejemplo llamado `.env.example` que sirve como plantilla.

---

### 2. Crear tu propio archivo `.env`

Sigue estos pasos sencillos:

1. Abre el proyecto en VS Code (o tu editor favorito).
2. En la raíz del proyecto (donde está `package.json`) localiza `.env.example`.

    Copia el archivo y renómbralo a `.env`.

    - En VS Code: clic derecho → Copy → Paste → renombrar a `.env`.
    - O simplemente crea un archivo nuevo llamado `.env` y pega dentro el contenido de `.env.example`.

3. Abre `.env` y revisa la línea `DATABASE_URL`.

    Ejemplos para MySQL local:

    - Sin contraseña (usuario `root`):

       ```text
       DATABASE_URL="mysql://root:@localhost:3306/pokedeck_udi"
       PORT=3000
       ```

    - Usuario `root` y contraseña `1234`:

       ```text
       DATABASE_URL="mysql://root:1234@localhost:3306/pokedeck_udi"
       ```

    - Usuario `alumno` y contraseña `miPass`:

       ```text
       DATABASE_URL="mysql://alumno:miPass@localhost:3306/pokedeck_udi"
       ```

    Nota: `pokedeck_udi` es el nombre de la base de datos que usará Prisma. Asegúrate de que la base de datos exista y que MySQL esté corriendo.

---

### 3. Instalar dependencias (solo la primera vez)

Abre una terminal en la carpeta del proyecto (por ejemplo, `.../fullstack-practice-pokedex $`) y ejecuta:

```bash
npm install
```

Espera a que termine la instalación (puede tardar un poco la primera vez).

### 4. Levantar el servidor

En la misma terminal, ejecuta:

```bash
npm run dev
```

Si todo va bien, deberías ver en la terminal un mensaje parecido a:

`Servidor escuchando en http://localhost:3000`

Abre tu navegador y visita `http://localhost:3000` — deberías ver la página de inicio.

Comprobar la API de salud:

`GET /api/health`

Debería devolver JSON similar a:

```json
{
   "ok": true,
   "message": "API funcionando. TODO: agregar más rutas para el proyecto."
}
```

---

### 5. Problemas frecuentes

- ❌ Error de conexión a la base de datos
  - Revisa que MySQL esté encendido.
  - Revisa que `DATABASE_URL` en `.env` tenga el usuario, contraseña y nombre de BD correctos.

- ❌ El comando `npm` no existe
  - Significa que no tienes Node.js instalado o no está en el `PATH`.
  - Descarga Node desde: [https://nodejs.org](https://nodejs.org)

Cuando esto esté listo, ya tienes el proyecto “respirando” y puedes empezar a crear modelos, rutas y páginas 💪

Si quieres, puedo:

- Ejecutar `npm install` aquí en la contenedor y verificar que el servidor arranca.
- Convertir las rutas de ejemplo para que usen Prisma en vez de datos en memoria.

Dime cuál prefieres y lo hago.
