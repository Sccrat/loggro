const express = require('express');
const router = express.Router();


const authController = require("./controllers/authController");


// Ruta para registrar un nuevo usuario
router.post('/registro', authController.register);

// Ruta para iniciar sesión y obtener un token JWT
router.post('/login', authController.login);


module.exports = router;
