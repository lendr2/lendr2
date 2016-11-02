const sequelize = require('../database');
const sessionSchema = require('../Models/sessions.js');
let sessions = sequelize.define('sessions', sessionSchema);

module.exports = {

  isLoggedIn : (req,res,next) => {
     if (!req.cookies.ssid){
       res.status(200).end();
     } else {
       const obj = {ssid:req.cookies.ssid, username:req.body.username};
       sequelize.sync().then(() => {
       sessions.create(obj)
       .then( () => res.status(200).end() )
       .catch( error => res.status(400).end());
   })
  }
},
  checkSession: (req,res,next) => {
    sessions.findOne({ssid: req.body.ssid})
    .then( results => {
      if (!results) this.isLoggedIn(req,res,next);
      else res.status(200).send(results)
    })
    .catch( error => console.log(error));
  }
}
