const dbManager = require("../database/db.manager");

function createFollower(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newFollowerObject = {
    idUserFollower: req.body.idUserFollower,
    idUser: req.body.idUserFollower
  };
  dbManager.Followers.create(newFollowerObject)
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

async function followersByUserID(req, res) {
  try {
    const { idUser } = req.params;
    const userFollower = await dbManager.Followers.findOne({
      where: {
        idUser: idUser
      }
    });
    res.json(userFollower);
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

exports.createFollower = createFollower;
exports.followersByUserID = followersByUserID;
