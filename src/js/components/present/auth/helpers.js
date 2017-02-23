
module.exports.passwordValid = (value)=>{
  return (new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/,"g")).test(value)
}

module.exports.phonenumberValid = (value)=>{
  return (new RegExp(/^\d*$/, "g")).test(value)
}
