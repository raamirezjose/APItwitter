var express = require('express');
var router = express.Router();
const userController = require ('../controllers/user.controller'); 

router.get('/', userController.findAllUsers);

router.get('/:idUser', userController.findOneUser);

router.post ('/',userController.createUser);

router.post ('/:user_Pass',userController.authUser);

module.exports = router;