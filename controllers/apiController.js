const apiService = require("../services/apiService")

function createTask(req, res) {
    const { username, description, status } = req.body;
    apiService.createTask(username, description, status, res);
}

function getTasks(req, res) {
    apiService.getTasks(req, res);
}

function deleteTask(req, res) {
    apiService.deleteTask(req, res);
}

function updateTask(req, res) {
    apiService.updateTask(req, res);
}

function getTaskById(req, res) {
    apiService.getTaskById(req, res);
}

module.exports = {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
    getTaskById

};