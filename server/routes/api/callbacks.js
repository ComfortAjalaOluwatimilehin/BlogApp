var path = require("path"),
fs = require("fs"),
html = (path.join(__dirname, "..", "..", "..", "dist", "index.html")),
addUser = require("../authentication/adduser.js"),
User  = require("../../models/user"),
Post  = require("../../models/post")
module.exports.home = function(req,res){res.sendFile(html)}

module.exports.isLoggedIn = function(req,res,next){
  console.log("checking")
    if(req.isAuthenticated())
        return next()
    return res.redirect("/")
}
module.exports.renderProfile = function(req,res,next){
        return res.json({user:req.user}).end()
}
module.exports.getUser = function(req,res){
    var id = req.session.passport.user
    User.findOne({_id:id}, function(err,user){

              if(err)
                  res.status(400).json({user:null, error:err})
              if(!user)
                  res.status(400).json({user:null})
              else
                res.json({user:user}).end()

                return
    })
}

module.exports.logout = function(req,res,next){
      console.log("logging out")
        req.logout();
         res.send({redirect:"/"}).end()
}





module.exports.addPost = function(req,res,next){

          console.log("adding post")
          var newpost = new Post()
          newpost.author = req.session.passport.user
          newpost.text = req.body.post.text
          newpost.save(function(err){
              if(err)
                  res.status(400).json({error:err}).end()
            console.log("new post was added")
              res.json({message:"Post added!"})
          })

}


module.exports.getPost = function(req,res,next){

          console.log("getting post")

          Post.find({}, function(err, posts){
                  if(err)
                      res.status(400).json({err})
                  if(!posts)
                      res.json({posts:null}).end()

                  return res.json({posts})
          })
}
