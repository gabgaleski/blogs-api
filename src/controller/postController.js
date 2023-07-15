const { postService } = require('../services');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.payload.payload;
    const post = await postService.createPost(title, content, id, categoryIds);
    res.status(201).json(post);
};

module.exports = {
    createPost,
};