const express = require('express');
const userController = require('../controller/userController');
const { validateCreateUser, validatePasswordEmail } = require('../middlewares/validateUser');
const tokenValidate = require('../middlewares/tokenValidate');

const route = express();

route.use(express.json());

route.post('/', validateCreateUser, validatePasswordEmail, userController.insertUser);
route.get('/', tokenValidate, userController.getAllUsers);
route.get('/:id', tokenValidate, userController.getUserById);

module.exports = route;