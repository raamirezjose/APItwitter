const dbManager = require("../database/db.manager");

function createUser(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newUserObject = {
    username: req.body.username,
    creation_date: red.body.creations_date
  };
  dbManager.User.create(newUserObject)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({
        menssage: "SOMENTHING HAPPENED, ERROR"
      });
    });
}

async function findAllUsers(req, res) {
  try {
    const allUsers = await dbManager.User.findAll();

    res.send({
      data: allUsers
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

async function findUserById(req, res) {
  try {
    const { idUser, idPost } = req.params;
    const user = await dbManager.user.findOne({
      where: {
        idUser: idUser
      }
    });

    res.json(user);
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

exports.createUser = createUser;
exports.findAllUsers = findAllUsers;
exports.findUserById = findUserById;
