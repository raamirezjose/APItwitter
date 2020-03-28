module.exports = (sequelize, Sequelize) => {
  const Tweet = sequelize.define(
    "Tweet",
    {
      idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: Sequelize.STRING,
        unique: true
      }
    },
    {
      tableName: "Tweet"
    }
  );
  return Tweet;
};
