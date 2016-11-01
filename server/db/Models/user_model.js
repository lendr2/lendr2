
const Sequelize = require('sequelize');

// defining the user schema

userSchema = {
  // _id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  username: {
    type: Sequelize.STRING,
    unique: true,
    // allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    // allowNull: false
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
