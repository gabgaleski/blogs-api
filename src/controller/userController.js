const userService = require('../services/userService');
const { createToken } = require('../auth/authValidate');

const insertUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await userService.insertUser({ displayName, email, password, image });

    const { _password, ...payload } = user.dataValues;

    const token = createToken({ payload });

    res.status(201).json({ token });
};

module.exports = {
    insertUser,
};