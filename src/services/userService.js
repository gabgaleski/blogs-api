const { User } = require('../models');

const insertUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image });
    return user;
};

const getAllUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: 'password' },
    });

    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: 'password' },
    });

    return user;
};

const deleteUser = async (id) => {
    const user = await User.destroy({ where: { id } });

    if (user === 0) return { message: 'FAIL' };

    return { message: 'DELETED' };
};

module.exports = {
    insertUser,
    getAllUsers,
    getUserById,
    deleteUser,
};