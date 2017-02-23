import React, {PropTypes} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
import {validate,cleanNodes} from "./validation"
import axios from "axios"
const Register = ()=>{
  let firstname, lastname, username, password, password_again, number, robot;
  let errors={value:false}
    return (

      <div>
        <span id="errorMessage"></span>
          <i className="material-icons"><Link to="/">keyboard_return</Link></i>
          <form>

                  <input type="text" name="firstname" placeholder="First Name" ref={node=>{firstname = node}} onChange={(e)=>{
                       validate(e.target.value, e.target.name)
                  }}/>

                  <input type="text" name="lastname" placeholder="Last Name"  ref={node=>{lastname = node}} onChange={(e)=>{
                      validate(e.target.value, e.target.name)
                  }}/>

                  <input type="text" name="username" placeholder="Username"  ref={node=>{username = node}}  onChange={(e)=>{
                    validate(e.target.value, e.target.name)
                  }}/>

                  <input type="password" name="password" placeholder="Password"  ref={node=>{password = node}} onChange={(e)=>{
                      validate(e.target.value, e.target.name)
                  }}/>

                  <input type="password" name="password_again" placeholder="Type Password Again"  ref={node=>{password_again = node}} onChange={(e)=>{
                    validate(e.target.value, e.target.name)
                  }}/>

                  <input type="number" name="phonenumber" placeholder="Phone Number"  ref={node=>{number = node}}  onChange={(e)=>{
                      validate(e.target.value, e.target.name)
                  }}/>

                <label id="robotRow"><span>I am not A Robot</span>
                  <input type="checkbox" name="robot"  ref={node=>{robot = node}} onChange={(e)=>{
                      validate(e.target.checked, e.target.name)
                  }} />
                </label >
                  <input type="submit" value="register" className="card" onClick={e=>{
                      e.preventDefault()
                      if(password.value !== password_again.value || !robot.checked ){
                          return document.getElementById("errorMessage").innerHTML ="Your Passwords are not identical or you are still a Robot"
                      }
                        var user = {
                          firstname:firstname.value,
                          lastname:lastname.value,
                          username:username.value,
                          password:password.value,
                          number:number.value
                        }

                          axios.post("/register",user).then(function(user){
                              console.log(user)
                              document.getElementById("errorMessage").innerHTML = ""
                          })
                          .catch(error=>{
                              console.error(error)
                              document.getElementById("errorMessage").innerHTML = "Error while saving the User"
                          })
                          return cleanNodes(firstname, lastname, username, password, password_again, number, robot)


                  }}/>
           </form>

      </div>
    )
}


export default (Register)
