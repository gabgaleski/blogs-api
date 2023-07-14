const { Category } = require('../models');

const insertCategory = async (name) => {
    const category = await Category.create({ name });

    return category;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();

    return categories;
};

module.exports = {
    insertCategory,
    getAllCategories,
};