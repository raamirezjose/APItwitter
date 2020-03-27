const Sequelize = require("sequelize");
const sequelizeConnection = require("./db.connection.js");

//IMPORT MODELS
const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");

//INIT MODELS
const User = UserModel(sequelizeConnection, Sequelize);
const Post = PostModel(sequelizeConnection, Sequelize);

User.hasMany(Post, { foreinKey: "idUser", sourceKey: "idUser" });
Post.belongsTo(User, { foreinKey: "idUser", sourceKey: "idUser" });

const models = {
  User: User,
  Post: Post
};

const db = {
  ...models,
  sequelizeConnection
};

module.exports = db;
