const userService = require('../services/userService');
const { createToken } = require('../auth/authValidate');

const insertUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await userService.insertUser({ displayName, email, password, image });

    const { _password, ...payload } = user.dataValues;

    const token = createToken({ payload });

    res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
    const users = await userService.getAllUsers();

    res.status(200).json(users);
};

module.exports = {
    insertUser,
    getAllUsers,
};