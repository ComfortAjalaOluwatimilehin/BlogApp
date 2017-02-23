var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy,
User = require("../../models/user"),
google = require("./socialCredentials").google

module.exports = function(passport){
        /****************SERIALIZE USER*******/

            passport.serializeUser(function(user,done){
                done(null, user.id)
            })

        /************DESERIALIZE USER**********/
        passport.deserializeUser(function(id,done){
            User.findById(id, function(err, user){
                return done(err,user)
            } )
        })


        /****************FACEBOOK STRATEGY***********/
        passport.use(new GoogleStrategy(
          google,
           function(token, refreshToken, profile, done){
                process.nextTick(function(){
                        User.findOne({"google.id":profile.id}, function(err,user){
                            if(err) return done(err)

                            if(user) return done(null,user)
                            var newuser = new User()
                            newuser.google.id= profile.id
                            newuser.google.name = profile.name.givenName + " " + profile.name.familyName
                            newuser.google.token = token
                            newuser.google.email = profile.emails[0].value

                            newuser.save(function(err){
                                if(err) return done(err)
                                return done(null, newuser)
                            })
                        })
                })
           }
        ))
}
