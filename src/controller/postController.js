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

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    if (!post) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    res.status(200).json(post);
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await postService.updatePost(id, title, content);
    res.status(200).json(post);
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
};