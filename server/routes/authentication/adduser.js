var userModels = require("../../models/user"),
User = userModels.user
module.exports = function(req,res){
  var msg = {error:false, user:null}, newUser = req.body
    pw(newUser.password).hash(function(err,hash){
        if(err){
          res.status(500).send("Error while Hashing the Password").end()
        }

//NO ERROR
        var newuser =
          {
            firstname:newUser.firstname,
            lastname:newUser.lastname,
            password: hash,
            number:newUser.number,
            username:newUser.username
        }

        User.create(newuser, function(err,user){
          if(err){
              res.status(500).send("Error in Creating new User").end()
          }

              res.json({user:user}).end()
        })


    })
}
