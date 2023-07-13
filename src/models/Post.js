/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
      'Post',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
      },
      {
        timestamps: true,
        tableName: 'blog_posts',
        underscored: true,
      },
    );
    Post.associate = (models) => {
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Post.hasOne(models.PostCategory, {
        through: 'posts_categories',
        as: 'post',
        foreignKey: 'post_id',
        otherKey: 'category_id',
      });
    };
    return Post;
  };