// Acá nos falta express y el router
const express = require('express');
const router = express.Router();

// Aća nos falta traer el controller
const mainController = require('../controllers/mainController.js');

// Acá definimos las rutas
router.get('/', mainController.getHome);
router.get('/home', mainController.getHome);

router.get('/login', mainController.getLogin);
router.post('/login', mainController.postLogin);
router.get('/logout', mainController.getLogout);

// Acá exportamos el resultado
module.exports = router;