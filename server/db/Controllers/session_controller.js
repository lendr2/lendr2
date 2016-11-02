const sequelize = require('../database');
const sessionSchema = require('../Models/sessions.js');
let sessions = sequelize.define('sessions', sessionSchema);

module.exports = {

  isLoggedIn : (req,res,next) => {
    console.log('HEREHERERHERHERe');
    console.log('req.cookies', req.cookies);

     if (!req.cookies.ssid){
       console.log('this happens?bad?');
       res.status(200).end();
     } else {
       var obj = {ssid:req.cookies.ssid, username:req.body.username};
       console.log(req.body)
       sequelize.sync().then(() => {
       sessions.create(obj)
       .then( () =>{
          return res.status(200).end();
        })
       .catch( (error) => {
         console.log('hits this shit -----------------------');
         console.log("Error in sessions.create", error);
         res.status(400).end();
       });
   })
  }
},
  checkSession: (req,res,next) => {
    sessions.findOne({ssid: req.body.ssid})
    .then((results) => {
      if (!results) this.isLoggedIn(req,res,next);
      else res.status(200).send(results)
    })
    .catch((error) => {console.log(error)})
  }
}
