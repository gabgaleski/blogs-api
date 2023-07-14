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

module.exports = {
    insertUser,
    getAllUsers,
};