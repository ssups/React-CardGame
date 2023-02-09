const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        main: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        visited: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        thumb_nail: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Post",
        tableName: "posts",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
    db.Post.hasMany(db.Comment, {
      foreignKey: "post_id",
      sourceKey: "id",
    });
  }
}

module.exports = Post;
