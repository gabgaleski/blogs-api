const categoriesService = require('../services/categoriesService');

const insertCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoriesService.insertCategory(name);

    res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
    const categories = await categoriesService.getAllCategories();

    res.status(200).json(categories);
};

module.exports = {
    insertCategory,
    getAllCategories,
};