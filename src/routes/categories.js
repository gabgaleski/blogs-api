const express = require('express');
const categoriesController = require('../controller/categoriesController');
const tokenValidate = require('../middlewares/validateToken');
const tokenValidateBearer = require('../middlewares/tokenValidateBearer');
const { validateInsert } = require('../middlewares/validateCategory');

const route = express();

route.use(express.json());

route.post('/', tokenValidate, validateInsert, categoriesController.insertCategory);
route.get('/', tokenValidateBearer, categoriesController.getAllCategories);

module.exports = route;