const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const secretKey = 'tu_clave_secreta';

async function crearUsuario(username, password, response) {
    const usuario = await User.findOne({ username, password });

    if (usuario) {
        throw new Error('El usuario ya existe en la base de datos');
    }
    const nuevoUsuario = new User({ username, password });
    await nuevoUsuario.save();



    if (response.statusCode === 200) {
        response.json({ message: 'Usuario registrado exitosamente.' });
    } else {
        response.status(500).json({ error: 'Error al registrar el usuario.' });
    }
}

async function ingresoUsuario(username, password, response) {
    try {
        const usuario = await User.findOne({ username, password });
        console.log(usuario);
        if (!usuario) {
            response.status(401).json({ error: 'Usuario o contraseña incorrectos.' });
        } else {
            const token = jwt.sign({ userId: usuario._id }, secretKey);
            response.json({ token });
        }
    } catch (error) {
        response.status(500).json({ error: 'Error al iniciar sesión.' });
    }
}

module.exports = {
    crearUsuario,
    ingresoUsuario
};