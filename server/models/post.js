var mongoose = require("mongoose"),
schema = mongoose.Schema



var Post = new schema({
    text:{type:String, required:true},
    date:{type:Date, default:Date.now},
    author:{type:String, required:true}
})




module.exports =  mongoose.model("Post", Post)
