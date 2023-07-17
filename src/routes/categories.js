const express = require('express');
const categoriesController = require('../controller/categoriesController');
const tokenValidateBearer = require('../middlewares/tokenValidateBearer');
const { validateInsert } = require('../middlewares/validateCategory');

const route = express();

route.use(express.json());

route.post('/', tokenValidateBearer, validateInsert, categoriesController.insertCategory);
route.get('/', tokenValidateBearer, categoriesController.getAllCategories);

module.exports = route;