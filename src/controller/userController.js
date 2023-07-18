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

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.payload.payload;
        const user = await userService.deleteUser(id);
        
        if (user.message === 'FAIL') {
            return res.status(404).json({ message: 'User does not exist' });
        }

        res.status(204).json({});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    insertUser,
    getAllUsers,
    getUserById,
    deleteUser,
};