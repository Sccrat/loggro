const Tasks = require('../models/Tasks.js');
const mongoose = require('mongoose');

async function createTask(username, description, status, response) {
    console.log('entro');
    const nuevaTarea = new Tasks({ username, description, status });
    await nuevaTarea.save();


    if (response.statusCode === 200) {
        response.json({ message: 'Tarea registrada exitosamente.' });
    } else {
        response.status(500).json({ error: 'Error al registrar la tarea.' });
    }
}

async function getTasks(req, res) {
    try {
        const tareas = await Tasks.find({});
        console.log('Todos los datos de la colección:', tareas);
        res.json(tareas);
    } catch (err) {
        console.error('Error al obtener los datos:', err);
    }
}

async function deleteTask(req, res) {
    const taskId = req.params.taskId;
    console.log(taskId);

    try {
        const deletedTask = await Tasks.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ error: 'Tarea no encontrado' });
        }

        res.json({ message: 'Tarea eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el tarea:', error);
        res.status(500).json({ error: 'Error al eliminar el tarea' });
    }
}

async function updateTask(req, res) {
    const taskId = req.params.taskId;
    const { username, description, status } = req.body;

    try {
        const updatedTask = await Tasks.findByIdAndUpdate(
            taskId,
            { username, description, status }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        res.json(updatedTask);
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
}

async function getTaskById(req, res) {
    const taskId = req.params.taskId;
    try {
        const tareas = await Tasks.findById(taskId);
        console.log('El datos de la colección:', tareas);
        res.json(tareas);
    } catch (err) {
        console.error('Error al obtener el dato:', err);
    }
}


module.exports = {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
    getTaskById
};