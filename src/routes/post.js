const express = require('express');
const { postController } = require('../controller');
const tokenValidateBearer = require('../middlewares/tokenValidateBearer');
const { fieldsValidate } = require('../middlewares/validatePost');

const route = express();

route.use(express.json());

route.post('/', tokenValidateBearer, fieldsValidate, postController.createPost);

module.exports = route;