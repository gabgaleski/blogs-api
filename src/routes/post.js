const express = require('express');
const { postController } = require('../controller');
const tokenValidateBearer = require('../middlewares/tokenValidateBearer');
// const tokenValidate = require('../middlewares/validateToken');
const { fieldsValidate, validateUpdatePost } = require('../middlewares/validatePost');

const route = express();

route.use(express.json());

route.post('/', tokenValidateBearer, fieldsValidate, postController.createPost);
route.get('/', tokenValidateBearer, postController.getAllPosts);
route.get('/:id', tokenValidateBearer, postController.getPostById);
route.put('/:id', tokenValidateBearer, validateUpdatePost, postController.updatePost);

module.exports = route;