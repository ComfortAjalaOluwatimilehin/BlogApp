var mongoose = require("mongoose"),
Schema = mongoose.Schema,
 bcrypt   = require('bcrypt-nodejs');

var user = new Schema({
    local:{
      firstname:{type:String},
      lastname:{type:String},
      password:{type:String},
      number:{type:String},
      username:{type:String},
      registerationDate:{type:Date, default:Date.now}
    },
    facebook:{
      id:{type:String},
      token:{type:String},
      email:{type:String},
      name:{type:String}
    },
    twitter:{
      id:{type:String},
      token:{type:String},
      email:{type:String},
      name:{type:String}
    },
    google:{
      id:{type:String},
      token:{type:String},
      email:{type:String},
      name:{type:String}
    }
})

user.methods.hashpassword = function(password){
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
user.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
module.exports= mongoose.model("User", user)
