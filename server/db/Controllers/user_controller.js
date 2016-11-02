const sequelize = require('../database');
const cookieParser = require('cookie-parser');
const userSchema = require('../Models/user_model');
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;
const sessionSchema = require('../Models/sessions.js');

// creates the User table
let User = sequelize.define('user', userSchema);
let sessions = sequelize.define('sessions', sessionSchema);

// defines all of the funtions that will be executed on the User table
let userController = {
  //creates a user
  createUser: (req, res, next) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                // Store hash in your password DB.
                req.body.password = hash;
        sequelize.sync().then(() => {
          res.cookie('ssid',Math.floor(Math.random() * 2132131231)+1);
            User.create(req.body)
            .then((results) => { ssid: req.cookies.ssid })
            .catch((error) => {
              console.log('its gonna error');
              res.status(400).end() });
        }).then(() => next());
      });
    });
  },

  //gets a user for validation on login
  getUser: (req, res, next) => {
    sessions.find({where : {ssid: req.body.ssid}})
    .then((user) =>{
      res.cookie('username',user.username);
      res.status(200).end()
    })
    .catch((err) => {
    User.findOne({ where: { username: req.body.username } })
      .then((user) => {

        bcrypt.compare(req.body.password, user.dataValues.password, function(err, val) {
          if (err || val === false) res.status(400).send('incorrect username or password.');
          req.session.user = user.dataValues.username;
          res.cookie('username',user.username);
          req.session.save(() => console.log('saving session'));
          next();
          })
        })
        .catch((err) => {
        console.log(err);
        res.status(400).end();
    })
  })
  }


}


module.exports = userController;
