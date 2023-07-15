const { BlogPost, PostCategory, User, Category } = require('../models');

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

const getAllPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
    return posts;
};

module.exports = {
    createPost,
    getAllPosts,
};