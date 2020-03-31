const Sequelize = require("sequelize");
const sequelizeConnection = require("./db.connection.js");

//IMPORT MODELS
const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");
const TweetModel = require("../models/tweet.model");
const FollowersModel = require("../models/followers.model");
const DirectMessageModel = require("../models/directMessage.model");

//INIT MODELS
const User = UserModel(sequelizeConnection, Sequelize);
const Post = PostModel(sequelizeConnection, Sequelize);
const Tweet = TweetModel(sequelizeConnection, Sequelize);
const Followers = FollowersModel(sequelizeConnection, Sequelize);
const DirectMessage = DirectMessageModel(sequelizeConnection, Sequelize);

User.hasMany(Post, { foreinKey: "idUser", sourceKey: "idUser" });
User.hasMany(Tweet, { foreinKey: "idUser", sourceKey: "idUser" });
User.hasMany(DirectMessage, { foreinKey: "idUser", sourceKey: "idUser" });

Post.belongsTo(User, { foreinKey: "idUser", sourceKey: "idUser" });
Tweet.belongsTo(User, { foreinKey: "idUser", sourceKey: "idUser" });

const models = {
  User: User,
  Post: Post,
  Tweet: Tweet,
  Followers: Followers,
  DirectMessage: DirectMessage
};

const db = {
  ...models,
  sequelizeConnection
};

module.exports = db;
