
const Sequelize = require('sequelize');

// defining the user schema

userSchema = {

  username: {
    type: Sequelize.STRING,
    unique: true,
    // allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  karma: {
    type: Sequelize.INTEGER,
    // allowNull: false
  }
}

module.exports = userSchema;
