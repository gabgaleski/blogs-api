const express = require('express');
const { loginController } = require('../controller');

const route = express();

route.use(express.json());

route.post('/', loginController);

module.exports = route;