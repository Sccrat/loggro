const authService = require("../services/authService")

function register(req, res) {
    const { username, password } = req.body;
    authService.crearUsuario(username, password, res);
}

function login(req, res) {
    const { username, password } = req.body;
    authService.ingresoUsuario(username, password, res);
}

module.exports = {
    register,
    login
};