var TwitterStrategy = require("passport-twitter").Strategy,
User = require("../../models/user"),
twitter = require("./socialCredentials").twitter

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
        passport.use(new TwitterStrategy(
          twitter,
           function(token, refreshToken, profile, done){
             console.log(token)
                process.nextTick(function(){
                        User.findOne({"twitter.id":profile.id}, function(err,user){
                            if(err) return done(err)

                            if(user) return done(null,user)
                            var newuser = new User()
                            newuser.twitter.id= profile.id
                            newuser.twitter.name = profile.name.givenName + " " + profile.name.familyName
                            newuser.twitter.token = token
                            newuser.twitter.email = profile.emails[0].value

                            newuser.save(function(err){
                                if(err) return done(err)
                                return done(null, newuser)
                            })
                        })
                })
           }
        ))
}
