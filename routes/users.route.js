var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.findAllUsers);

router.get("/:idUser", userController.findUserById);

router.post("/", userController.createUser);

router.post("/authUser", userController.authUser);

module.exports = router;
