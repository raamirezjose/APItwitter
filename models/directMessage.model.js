module.exports = (sequelize, Sequelize) => {
  const directmessage = sequelize.define(
    "directmessage",
    {
      idUserTransmitter: {
        type: Sequelize.INTEGER
      },
      idUserReceiver: {
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING
      }
    },
    {
      tableName: "directmessage"
    }
  );
  return directmessage;
};
