const { loginTolken } = require('../services');
const { createToken } = require('../auth/authValidate');

const isValid = (email, password) => email && password;

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginTolken(email, password);
    if (!isValid(email, password)) { 
      return res.status(400).json({ message: 'Some required fields are missing' }); 
    }
    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    const { _password, ...payload } = user.dataValues;

    const token = createToken({ payload });

    res.status(200).json({ token });
};

module.exports = loginController;