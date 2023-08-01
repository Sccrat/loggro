const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Configura body-parser para procesar solicitudes JSON
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://iblu:test@iblu.3c4b9pu.mongodb.net/'; // Cambia 'nombre_de_tu_base_de_datos' por el nombre deseado para tu base de datos

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

const authRoutes = require('./auth');

// ...

// Usa las rutas en tu aplicación
app.use('/auth', authRoutes);

const verificarToken = require('./middleware');

// ...

// Ejemplo de cómo proteger una ruta con el middleware
app.get('/ruta_protegida', verificarToken, (req, res) => {
    // Aquí puedes acceder al ID del usuario autenticado a través de req.userId
    // Realiza cualquier operación protegida que necesites
});

app.listen(port);

console.log('Escuchando en el puerto: ' + port);



