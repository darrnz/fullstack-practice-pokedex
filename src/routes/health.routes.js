// src/routes/health.routes.js
const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'API funcionando. TODO: agregar más rutas para el proyecto.'
  });
});

module.exports = router;
