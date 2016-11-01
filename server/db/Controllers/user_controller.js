const sequelize = require('../database');
const cookieParser = require('cookie-parser');
const userSchema = require('../Models/user_model');
const session = require('express-session')
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;
// creates the User table
let User = sequelize.define('user', userSchema);

// defines all of the funtions that will be executed on the User table
let userController = {
  //creates a user
  createUser: (req, res, next) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                // Store hash in your password DB.
                req.body.password = hash;
                console.log(req.body);
        sequelize.sync({ logging: console.log }).then(() => {
          User.create(req.body)
            .then(() => {
              res.cookie('username', req.body.username);
              next();
            })
            .catch((error) => {
              console.log('error:', error)
              res.status(400).end();
            });
        });
      });
    });
  },

  //gets a user for validation on login
  getUser: (req, res, next) => {
    User.findOne({ where: { username: req.body.username } })
      .then((user) => {
        console.log(req.body.password);
        console.log(user.dataValues.password,'this is the hash?');
        console.log('testing?');
        bcrypt.compare(req.body.password, user.dataValues.password, function(err, val) {
          console.log(val,'is this true?');
          if (err || val === false) res.status(400).send('incorrect username or password.');
          res.cookie('username', user.username);
          req.session.user = user.dataValues.username;

          req.session.save(() => console.log('saving session'));
          res.status(200).end();
          })
        })
        .catch((err) => {
        console.log(err);
        res.status(400).end();
    })
  }

}


module.exports = userController;
