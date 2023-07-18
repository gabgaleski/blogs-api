const express = require('express');
const userController = require('../controller/userController');
const { validateCreateUser, validatePasswordEmail } = require('../middlewares/validateUser');
const tokenValidateBearer = require('../middlewares/tokenValidateBearer');

const route = express();

route.use(express.json());

route.post('/', validateCreateUser, validatePasswordEmail, userController.insertUser);
route.get('/', tokenValidateBearer, userController.getAllUsers);
route.get('/:id', tokenValidateBearer, userController.getUserById);
route.delete('/me', tokenValidateBearer, userController.deleteUser);

module.exports = route;