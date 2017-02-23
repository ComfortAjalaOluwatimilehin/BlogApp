var FacebookStrategy = require("passport-facebook").Strategy,
User = require("../../models/user"),
facebook = require("./socialCredentials").facebook

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
        passport.use(new FacebookStrategy(
          facebook,
           function(token, refreshToken, profile, done){
             console.log(token)
                process.nextTick(function(){
                        User.findOne({"facebook.id":profile.id}, function(err,user){
                            if(err) return done(err)

                            if(user) return done(null,user)
                            var newuser = new User()
                            newuser.facebook.id= profile.id
                            newuser.facebook.name = profile.name.givenName + " " + profile.name.familyName
                            newuser.facebook.token = token
                            newuser.facebook.email = profile.emails[0].value

                            newuser.save(function(err){
                                if(err) return done(err)
                                return done(null, newuser)
                            })
                        })
                })
           }
        ))
}
