var express = require("express");
var router = express.Router();
const directMessageController = require("../controllers/directMessage.controller");

router.post(
  "/CreateDirectMessage",
  directMessageController.createDirectMessage
);

router.get(
  "/getdirectMessage/:idUserTransmitter/:idUserReceiver",
  directMessageController.getDirectMessages
);

module.exports = router;
