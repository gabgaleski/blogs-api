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

const validateUpdatePost = async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const { id: idUser } = req.payload.payload;
    if (Number(id) !== Number(idUser)) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
};

module.exports = {
    fieldsValidate,
    validateUpdatePost,
};