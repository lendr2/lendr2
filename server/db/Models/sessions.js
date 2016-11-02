const Sequelize = require('sequelize');
// defining the request schema

sessionSchema = {
  ssid: {
    type: Sequelize.STRING,
    allowNull:false
  },
  username: {
    type: Sequelize.STRING,
    allowNull:false
  },
};

module.exports = sessionSchema;
