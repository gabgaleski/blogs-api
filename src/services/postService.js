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

const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
    return post;
};

const updatePost = async (id, title, content) => {
    await BlogPost.update({ title, content }, { where: { id } });
    const post = await getPostById(id);
    return post;
};

const deletePost = async (id) => {
    await BlogPost.destroy({ where: { id } });
    return { message: 'DELETED' };
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};