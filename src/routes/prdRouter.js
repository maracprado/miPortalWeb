// Acá nos falta express y el router
const express = require('express');
const router = express.Router();

// Aća nos falta traer el controller
const prdController = require('../controllers/prdController.js');

// Acá definimos las rutas
router.get('/', prdController.getAll);


// Acá exportamos el resultado
module.exports = router;