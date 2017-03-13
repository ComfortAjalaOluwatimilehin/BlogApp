var LocalStrategy = require("passport-local").Strategy,
User = require("../../models/user")
module.exports = function(passport){

      /******************************************USER SERIALIZE*****************/
      passport.serializeUser(function(user, done) {
         done(null, user.id);
     });

     // used to deserialize the user
     passport.deserializeUser(function(id, done) {
         User.findById(id, function(err, user) {
             done(err, user);
         });
     });


        /**************************LOCALSTRATEGRY***************************/
          /********Register******/
        passport.use("local-signup", new LocalStrategy({
          usernameField : 'username',
          passwordField : 'password',
            passReqToCallback : true
        },

           function(req,username,password,done){

                    process.nextTick(function(){
                              console.log(username)
                              //finds users
                              User.findOne({"local.username":username}, function(err, user){
                                    if(err)
                                      return done(err)

                                    if(user)
                                      return done(null,false, {message:"User already exists"})

                                    var newuser = new User()
                                      //console.log(req.body)
                                    newuser.local.username = username
                                    newuser.local.password = newuser.hashpassword(password)
                                    newuser.local.firstname = req.body.firstname
                                    newuser.local.lastname = req.body.lastname
                                    newuser.local.number = req.body.number



                                    newuser.save(function(err){
                                        if(err) return err
                                        return done(null, newuser)
                                    })
                              })
                    })
           }
      ))

        /********LOGIN******/

        passport.use("local-login", new LocalStrategy({
          usernameField : 'username',
          passwordField : 'password',
            passReqToCallback : true
        },

           function(req,username,password,done){

                    process.nextTick(function(){

                              //finds users
                              User.findOne({"local.username":username}, function(err, user){
                                    if(err)
                                      return done(err)

                                    if(!user)
                                      return done(null,false, {message:"User does not exists"})

                                    if(user.validPassword(password)){
                                        return done(null, user)
                                    }
                              })
                    })
           }
        ))

            /************************** END OF LOCALSTRATEGRY***************************/
}
