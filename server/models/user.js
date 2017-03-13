var mongoose = require("mongoose"),
Schema = mongoose.Schema,
 bcrypt   = require('bcrypt-nodejs');

var user = new Schema({
    local:{
      fullname:{type:String},
      firstname:{type:String},
      lastname:{type:String},
      password:{type:String},
      number:{type:String},
      username:{type:String, unique:true},
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
user.pre("save", function(next){
          var newperson = this
            this.fullname = newperson.firstname + " " + newperson.lastname;
            console.log(this.fullname)
        next()
})
user.methods.hashpassword = function(password){
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
user.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
module.exports= mongoose.model("User", user)
