var mongoose = require("mongoose"),
Schema = mongoose.Schema


var user = new Schema({
    firstname:{type:String},
    lastname:{type:String},
    password:{type:String},
    number:{type:Number},
    registerationDate:{type:Date, default:Date.now}
})


module.exports.user = mongoose.model("User", user)
