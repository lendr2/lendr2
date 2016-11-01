const Sequelize = require('sequelize');
// defining the request schema

requestSchema = {
  lendeename: {
    type: Sequelize.STRING,
    // allowNull:false
  },
  itemname: {
    type: Sequelize.STRING,
    // allowNull:false
  },
  note: {
    type: Sequelize.STRING,
    // allowNull:false
  }
};

module.exports = requestSchema;
