var userModels = require("../../models/user"),
User = userModels.user
module.exports = function(req,res){
  var msg = {error:false, user:null}, newUser = req.body

    var newuser =
      {
        firstname:newUser.firstname,
        lastname:newUser.lastname,
        password: newUser.password,
        number:newUser.number
      }

    User.create(newuser, function(err,user){
      if(err){
          res.status(500).send("Error in Creating new User").end()
      }

          res.json({user:user}).end()
    })
}
