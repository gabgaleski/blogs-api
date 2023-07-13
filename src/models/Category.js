/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      'Category',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
      },
      {
        timestamps: false,
        tableName: 'categories',
        underscored: true,
      },
    );

     Category.associate = (models) => {
      Category.belongsToMany(models.Category, {
        through: 'posts_categories',
        as: 'category',
        foreignKey: 'categoryId',
        otherKey: 'post_id',
      });
     };


    return Category;
  };