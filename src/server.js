// src/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const healthRoutes = require('./routes/health.routes');

const app = express();

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Servir frontend estático desde /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta de prueba (healthcheck)
app.use('/api/health', healthRoutes);
app.use('/api/user', require('./routes/user.routes'));
// Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require(path.join(__dirname, '..', 'docs', 'openapi.json'));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// TODO: aquí agregarán más rutas:
// const usersRoutes = require('./routes/users.routes');
// app.use('/api/users', usersRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
