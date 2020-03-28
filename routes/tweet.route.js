var express = require("express");
var router = express.Router();
const tweetController = require("../controllers/tweet.controller");

/* router.get("/", tweetController.findAllUsers);

router.get("/:idUser", tweetController.findUserById); */

router.post("/createTweet", tweetController.createTweet);

module.exports = router;
