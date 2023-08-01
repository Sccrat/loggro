const express = require('express');
const router = express.Router();
const User = require('./models'); // Importa el modelo que definiste anteriormente
const jwt = require('jsonwebtoken');

const secretKey = 'tu_clave_secreta'; // Reemplaza 'tu_clave_secreta' con una clave secreta de tu elección para firmar los tokens JWT

// Ruta para registrar un nuevo usuario
router.post('/registro', async (req, res) => {
    try {
        const { username, password } = req.body;
        const nuevoUsuario = new User({ username, password });
        console.log(nuevoUsuario);
        await nuevoUsuario.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }));
        // res.json({ message: 'Usuario registrado exitosamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el usuario.' });
    }
});

// Ruta para iniciar sesión y obtener un token JWT
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const usuario = await User.findOne({ username, password });
        if (!usuario) {
            res.status(401).json({ error: 'Usuario o contraseña incorrectos.' });
        } else {
            const token = jwt.sign({ userId: usuario._id }, secretKey);
            res.json({ token });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión.' });
    }
});

// Otras rutas y controladores que necesites

module.exports = router;
