module.exports = (sequelize, Sequelize) => {
  const Tweet = sequelize.define(
    "Tweet",
    {
      idTweet: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: Sequelize.STRING,
        unique: true
      },
      idUser: {
        type: Sequelize.INTEGER
      }
    },

    {
      tableName: "Tweet"
    }
  );
  return Tweet;
};
