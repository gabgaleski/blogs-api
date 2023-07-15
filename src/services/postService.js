const { BlogPost, PostCategory } = require('../models');

const createPostCategory = async (postId, categoryId) => {
    await PostCategory.create({ postId, categoryId });
};

const createPost = async (title, content, userId, categoryIds) => {
    const published = new Date();
    const updated = new Date();
    const post = await BlogPost.create({ title, content, userId, published, updated });
    const postId = post.id;
    categoryIds.forEach((categoryId) => createPostCategory(postId, categoryId));
    return post;
};

module.exports = {
    createPost,
};