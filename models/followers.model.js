module.exports = (sequelize, Sequelize) => {
  const Tweet = sequelize.define(
    "followers",
    {
      idFollow: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idUserFollower: {
        type: Sequelize.STRING
      },
      idUser: {
        type: Sequelize.INTEGER
      }
    },
    {
      tableName: "followers"
    }
  );
  return Tweet;
};
