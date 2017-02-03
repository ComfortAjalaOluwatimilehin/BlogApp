
module.exports.validate=(value, format)=>{
    var res = {message:null}
      switch(format){
          case "firstname":
          case "lastname":
          case "username":
            if(value < 0){res.message = "Name should be Valid!"}
            break;
          case "password":
          case "password_again":
            if(!passwordValid(value)){res.message = "Password is Invalid"}
            break;
          case "phonenumber":
          if(!phonenumberValid(value)){res.message = "Phone Number is Invalid"}
          break;
          case "robot":
          if(!value){res.message ="Apparently you are a Robot! "}
          break;
          default:
          break;
      }
var node  = document.getElementById("errorMessage")
    return res.message != null ? node.innerHTML = res.message :node.innerHTML = ""
}

module.exports.cleanNodes=(...args)=>{

      args.forEach(node=>{
          node.value = ""
          node.checked =false
      })

      return "Cleaned"
}


const passwordValid = (value)=>{
  return (new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/,"g")).test(value)
}

const phonenumberValid = (value)=>{
  return (new RegExp(/^\d*$/, "g")).test(value)
}
