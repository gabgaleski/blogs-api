const express = require('express');
const categoriesController = require('../controller/categoriesController');
const tokenValidateCategory = require('../middlewares/validateToken');
const { validateInsert } = require('../middlewares/validateCategory');

const route = express();

route.use(express.json());

route.post('/', validateInsert, tokenValidateCategory, categoriesController.insertCategory);

module.exports = route;