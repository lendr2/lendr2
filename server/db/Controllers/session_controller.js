module.exports = {
  isLoggedIn : (req,res,next) => {
     if (!req.cookies.user_id){
       res.redirect('/login');
       res.end();
     } else next();
  }
}
