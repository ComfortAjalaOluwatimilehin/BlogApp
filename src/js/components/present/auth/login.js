import React, {PropTypes} from "react"
import {Link} from "react-router"

const Login = ()=>{
    return (
      <div>
          <i className="material-icons"><Link to="/">keyboard_return</Link></i>
          <form>
                  <input type="text" name="username" placeholder="Username" />

                  <input type="password" name="password" placeholder="Password"/>

                  <input type="submit" value="login" />
           </form>
        </div>
    )
}


export default Login
