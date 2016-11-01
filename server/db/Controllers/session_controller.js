module.exports = {
  isLoggedIn : (req,res,next) => {
     if (!req.cookies.username){
       res.redirect('/login');
       res.end();
     } else next();
  }
}
