const categoriesService = require('../services/categoriesService');

const insertCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoriesService.insertCategory(name);

    res.status(201).json(category);
};

module.exports = {
    insertCategory,
};