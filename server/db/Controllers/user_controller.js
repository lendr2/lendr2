const sequelize = require('../database');
const cookieParser = require('cookie-parser');
const userSchema = require('../Models/user_model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const sessionSchema = require('../Models/sessions.js');

// creates the User table
const User = sequelize.define('user', userSchema);
const sessions = sequelize.define('sessions', sessionSchema);

// defines all of the funtions that will be executed on the User table
const userController = {
  //creates a user
  createUser: (req, res, next) => {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      //ed add null here
      bcrypt.hash(req.body.password, salt, null, function (err, hash) {
        req.body.password = hash;// Store hash in your password DB.
        res.cookie('ssid', Math.floor(Math.random() * 2132131231) + 1); //Generate cookie
        res.cookie('username', req.body.username); //generate username cookie
      });
    });
    sequelize.sync().then(() => {
      User.create(req.body).then(results => next())
        .catch(error => res.status(400).end());
    }).catch(() => res.status(400).send('error'));

  },

  //gets a user for validation on login
  getUser: (req, res, next) => {
    sessions.find({
      where: {
        ssid: req.body.ssid
      }
    }).then(user => {
      //user truthy
      if (user) res.cookie('username', user.username);

      //user falsy
      if (!user) {
        User.findOne({
          where: {
            username: req.body.username
          }
        }).then(user => {

          if (!user) return res.status(400).send('no user is the db')
          if (user) {
            bcrypt.compare(req.body.password, user.dataValues.password, (err, val) => {
              req.session.user = user.dataValues.username;
              res.cookie('username', user.username);
              req.session.save(() => console.log('saving session'));
              if (val === false) res.status(400).send('no user')
              else next();
            })
          }
        }).catch(err => res.status(400).end());
      }
    }).catch(err => res.status(400).send(err))
  }
}

module.exports = userController;
