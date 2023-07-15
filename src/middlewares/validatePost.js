const { Category } = require('../models');

const getAllCategorys = async () => {
    const categorys = await Category.findAll();
    return categorys.map(({ id, name }) => ({ id, name }));
};

const fieldsValidate = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const categorys = await getAllCategorys();

    const categoryIdsExists = categoryIds.every((categoryId) => {
        const isCategory = categorys.find((category) => category.id === Number(categoryId));
        return isCategory;
    });

    console.log(categoryIdsExists);
    if (!categoryIdsExists) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    next();
};

module.exports = {
    fieldsValidate,
};