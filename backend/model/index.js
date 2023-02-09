const Sequelize = require("sequelize");
const config = require("../config");
const User = require("./user");
const Inventory = require("./inventory");
const Post = require("./post");
const Comment = require("./comment");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Inventory = Inventory;
db.Post = Post;
db.Comment = Comment;

// 테이블 생성
User.init(sequelize);
Inventory.init(sequelize);
Post.init(sequelize);
Comment.init(sequelize);

// 관계 연동
User.associate(db);
Inventory.associate(db);
Post.associate(db);
Comment.associate(db);

module.exports = db;
