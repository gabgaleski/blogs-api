const { getPayload } = require('../auth/authValidate');

const extractToken = (bearerToken) => (
    bearerToken.includes(' ') ? bearerToken.split(' ')[1] : bearerToken
);

const tokenValidateBearer = (req, res, next) => {
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

module.exports = tokenValidateBearer;