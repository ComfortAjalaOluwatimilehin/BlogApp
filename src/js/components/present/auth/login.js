import React, {PropTypes} from "react"
import {Link} from "react-router"
import axios from "axios"
import Socials from "./socials"
const Login = ()=>{
  let username,password
    return (
      <div>
          <span id="errorMessage"></span>
          <i className="material-icons"><Link to="/">keyboard_return</Link></i>
          <form>
                  <input type="text" name="username" placeholder="Username" ref={node=>{username=node}}/>

                  <input type="password" name="password" placeholder="Password" ref={node=>{password=node}}/>

                  <input type="submit" value="login"  onClick={e=>{
                      e.preventDefault()
                      if(username.value.length < 0 || password.value.length < 0){
                        return document.getElementById("errorMessage").innerHTML ="A Field is empty."
                      }
                      var login = {username:username.value, password:password.value}
                      axios.post("/login",login)
                     .then(response=>{
                         window.location.href ="/profile/" + response.data.user._id
                          console.log(response)
                      })
                      .catch(error=>{
                          console.error(error)
                          document.getElementById("errorMessage").innerHTML =error.data
                      })
                  }}/>
           </form>
           <Socials/>
        </div>
    )
}


export default Login
