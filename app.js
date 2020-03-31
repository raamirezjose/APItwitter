var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users.route");
var tweetRouter = require("./routes/tweet.route");
var followersRouter = require("./routes/followers.route");
var directmessageRouter = require("./routes/directMessage.route");

//IMPORT DB MANAGER
const dbManager = require("./database/db.manager");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tweet", tweetRouter);
app.use("/followers", followersRouter);
app.use("/directmessage", directmessageRouter);

dbManager.sequelizeConnection
  .authenticate()
  .then(() => {
    console.log("****Connection has been established****");

    dbManager.sequelizeConnection.sync().then(() => {
      console.log("Database Synced");
    });
  })
  .catch((error) => {
    console.log("Unable to connect to the database:", error);
  });

module.exports = app;
