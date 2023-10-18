// routes/show.js
const express = require('express');
const router = express.Router();

// Ruta de ejemplo para obtener datos de la colección "shows"
router.get('/', (req, res) => {
  // Aquí podrías utilizar Mongoose para consultar la base de datos y responder con los datos de "shows".
  res.json({ message: 'Obteniendo datos de shows' });
});

module.exports = router;