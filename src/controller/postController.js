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

const deletePost = async (req, res) => {
    const { id } = req.params;
    await postService.deletePost(id);

    res.status(204).json({ message: 'Post deleted successfully' });
};

const searchPost = async (req, res) => {
    try {
        const { q } = req.query;
        const posts = await postService.searchPost(q);
    
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    searchPost,
};