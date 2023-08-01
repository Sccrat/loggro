const jwt = require('jsonwebtoken');
const secretKey = 'tu_clave_secreta'; // Utiliza la misma clave secreta que usaste en auth.js

const verificarToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ error: 'No se proporcionó un token.' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido.' });
        }
        req.userId = decoded.userId;
        next();
    });
};

module.exports = verificarToken;
