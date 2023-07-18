const express = require('express');
const { postController } = require('../controller');
const tokenValidateBearer = require('../middlewares/tokenValidateBearer');
const { 
  fieldsValidate,
  validateUpdatePost,
  validateDeletedPost,
} = require('../middlewares/validatePost');

const route = express();

route.use(express.json());

route.post('/', tokenValidateBearer, fieldsValidate, postController.createPost);
route.get('/', tokenValidateBearer, postController.getAllPosts);
route.get('/search', tokenValidateBearer, postController.searchPost);
route.get('/:id', tokenValidateBearer, postController.getPostById);
route.put('/:id', tokenValidateBearer, validateUpdatePost, postController.updatePost);
route.delete('/:id', tokenValidateBearer, validateDeletedPost, postController.deletePost);

module.exports = route;