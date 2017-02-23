import React, {PropTypes} from "react"
import {Link} from "react-router"
const Home = ()=>{
    return (

          <div id="home">
              <ul>
                  <li className=""><Link to="/register">Register</Link></li>
                  <li className=""><Link to="/login">Login</Link></li>
              </ul>
          </div>

    )
}


export default Home
