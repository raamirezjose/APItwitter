var express = require("express");
var router = express.Router();
const followersController = require("../controllers/followers.controller");

router.post("/", followersController.createFollower);
router.get("/followersbyuserid/:idUser", followersController.followersByUserID);
module.exports = router;
