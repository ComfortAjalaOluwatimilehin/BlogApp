var path = require("path"),
fs = require("fs"),
html = (path.join(__dirname, "..", "..", "..", "dist", "index.html")),
addUser = require("../authentication/adduser.js")



module.exports.home = function(req,res){res.sendFile(html)}

module.exports.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated())
        res.redirect("/profile/" +req.user._id, {user:req.user})
    res.redirect("/")
}
