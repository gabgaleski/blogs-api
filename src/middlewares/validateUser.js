const { User } = require('../models');

const validateCreateUser = (req, res, next) => {
    const { displayName, email } = req.body;

    if (!displayName || displayName.length <= 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }

    if (!email || !email.includes('@')) {
        return res.status(400)
        .json({ message: '"email" must be a valid email' });
    }

    next();
};

const validatePasswordEmail = async (req, res, next) => {
    const { email, password } = req.body;

    if (!password || password.length < 6) {
        return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }

    const user = await User.findOne({ where: { email } });
    if (user) return res.status(409).json({ message: 'User already registered' }); 

    next();
};

module.exports = {
    validateCreateUser,
    validatePasswordEmail,
};