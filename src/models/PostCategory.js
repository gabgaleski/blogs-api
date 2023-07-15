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
        postId: {
           type: DataTypes.INTEGER, 
           primaryKey: true,
           references: {
            model: 'blog_posts',
            key: 'id',
           },
          },
        categoryId: { 
          type: DataTypes.INTEGER,
          primaryKey: true,
          references: {
            model: 'categories',
            key: 'id',
          },
        },
      },
      {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
      },
    );

    PostCategory.associate = (models) => {

      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        as: 'blogPost',
        otherKey: 'postId',
        through: 'posts_categories',
      });
      
      models.BlogPost.belongsToMany(models.Category, {
        through: 'posts_categories',
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
      });
    };
    
    return PostCategory;
  };