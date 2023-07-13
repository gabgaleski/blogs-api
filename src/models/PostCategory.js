/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: { type: DataTypes.INTEGER, primaryKey: true },
        categoryId: { type: DataTypes.INTEGER, primaryKey: true },
      },
      {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
      },
    );

    PostCategory.associate = (models) => {
      PostCategory.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post',
      });
      PostCategory.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category',
      });
    };
    
    return PostCategory;
  };