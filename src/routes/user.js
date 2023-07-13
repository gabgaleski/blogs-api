const express = require('express');
const userController = require('../controller/userController');
const { validateCreateUser, validatePasswordEmail } = require('../middlewares/validateUser');

const route = express();

route.use(express.json());

route.post('/', validateCreateUser, validatePasswordEmail, userController.insertUser);

module.exports = route;