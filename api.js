const express = require('express');
const router = express.Router();


const apiController = require("./controllers/apiController");


// Ruta para registrar una nueva tarea
router.post('/createTask', apiController.createTask);

router.get('/getTasks', apiController.getTasks);

router.delete('/deleteTask/:taskId', apiController.deleteTask);

router.put('/updateTask/:taskId', apiController.updateTask);

router.get('/getTaskById/:taskId', apiController.getTaskById);


module.exports = router;
