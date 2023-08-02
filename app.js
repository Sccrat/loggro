const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000; // Puedes cambiar el puerto si es necesario

// Configura body-parser para procesar solicitudes JSON
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://iblu:test@iblu.3c4b9pu.mongodb.net/'; // Cambia 'nombre_de_tu_base_de_datos' por el nombre deseado para tu base de datos

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

const authRoutes = require('./auth');

const apiRoutes = require('./api');

// Usa las rutas en tu aplicación
app.use('/auth', authRoutes);

app.use('/api', apiRoutes);

app.listen(port);

console.log('Escuchando en el puerto: ' + port);



