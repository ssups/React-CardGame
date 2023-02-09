const Sequelize = require("sequelize");

class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        post_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        writer: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        text: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Comment",
        tableName: "comments",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.Post, {
      foreignKey: "post_id",
      targetKey: "id",
    });
    db.Comment.belongsTo(db.User, {
      foreignKey: "writer",
      targetKey: "user_id",
    });
  }
}

module.exports = Comment;
