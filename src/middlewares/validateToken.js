const { getPayload } = require('../auth/authValidate');

const tokenValidateCategory = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization)res.status(401).json({ message: 'Token not found' });

        const payload = getPayload(authorization);
        req.payload = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = tokenValidateCategory;