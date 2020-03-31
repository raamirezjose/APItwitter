const dbManager = require("../database/db.manager");

function createDirectMessage(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newDirectMessage = {
    idUserTransmitter: req.body.idUserTransmitter,
    idUserReceiver: req.body.idUserReceiver,
    message: req.body.message
  };
  dbManager.DirectMessage.create(newDirectMessage)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        menssage: "SOMENTHING HAPPENED, ERROR"
      });
    });
}

async function getDirectMessages(req, res) {
  try {
    const { idUserTransmitter, idUserReceiver } = req.params;
    const directMessages = await dbManager.DirectMessage.findOne({
      where: {
        idUserTransmitter: idUserTransmitter,
        idUserReceiver: idUserReceiver
      }
    });
    res.json(directMessages);
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

exports.createDirectMessage = createDirectMessage;
exports.getDirectMessages = getDirectMessages;
