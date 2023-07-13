const { User } = require('../models');

const loginTolken = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) return null;
    return user;
};

module.exports = {
    loginTolken,
};