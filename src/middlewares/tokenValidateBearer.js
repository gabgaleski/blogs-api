const { getPayload } = require('../auth/authValidate');

function extractToken(bearerToken) {
    return bearerToken.split(' ')[1];
  }

const tokenValidate = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization)res.status(401).json({ message: 'Token not found' });

        const token = extractToken(authorization);

        const payload = getPayload(token);
        req.payload = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = tokenValidate;