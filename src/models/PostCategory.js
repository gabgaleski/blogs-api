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
           field: 'post_id',
           references: {
            model: 'blog_posts',
            key: 'id',
           },
            onDelete: 'CASCADE',
          },
        categoryId: { 
          type: DataTypes.INTEGER,
          primaryKey: true,
          field: 'category_id',
          references: {
            model: 'categories',
            key: 'id',
          },
          onDelete: 'CASCADE',
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
        otherKey: 'postId',
        through: PostCategory,
        as: 'blogPosts',
      });
      
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
      });
    };
    
    return PostCategory;
  };