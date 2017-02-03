var path = require("path"),
fs = require("fs"),
html = (path.join(__dirname, "..", "..", "..", "dist", "index.html")),
addUser = require("../authentication/adduser.js")
module.exports = {

    home:function(req,res){
        res.sendFile(html)
    },
    newUser:function(req,res){
       addUser(req,res)

     }
}
