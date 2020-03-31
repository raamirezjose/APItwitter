const dbManager = require("../database/db.manager");

function createTweet(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newTweetObject = {
    idUser: req.body.idUser,
    text: req.body.text
  };
  dbManager.Tweet.create(newTweetObject)
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
async function findAllTweets(req, res) {
  try {
    const allTweets = await dbManager.Tweet.findAll();

    res.json({
      usuarios: allTweets
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

function deleteTweet(req, res) {
  const { tweet } = req.params;
  dbManager.Tweet.destroy({ where: { tweet: tweet } }).catch(error => {
    console.log(error);
    res.status(500).send({ message: "Some error occurred" });
  });
}

async function findAllUsers(req, res) {
  try {
    const allUsers = await dbManager.User.findAll();

    res.send({
      usuarios: allUsers
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
    const user = await dbManager.User.findOne({
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

async function authUser(req, res) {
  try {
    const { username, password } = req.body;
    //Execute query
    const user = await dbManager.User.findOne({
      //insertar autenticación
      where: {
        username: username,
        password: password
      }
    });
    //Send response
    if (user) res.json("usuario logeado correctamente");
    else res.json("usuario o contraseña incorrecta");
  } catch (e) {
    // Print error on console
    console.log(e);
    // Send error message as a response
    res.status(500).send({
      message: "Some error occurred"
    });
  }
}

exports.createTweet = createTweet;
exports.findAllTweets = findAlltweets;
exports.deleteTweet = deleteTweet;
