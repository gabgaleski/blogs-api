const { postService } = require('../services');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.payload.payload;
    const post = await postService.createPost(title, content, id, categoryIds);
    res.status(201).json(post);
};

const getAllPosts = async (_req, res) => {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
};

module.exports = {
    createPost,
    getAllPosts,
};