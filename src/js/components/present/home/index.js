import React, {PropTypes} from "react"
import {Link} from "react-router"
require("./style.css")

const Home = ()=>{
    return (

          <div id="home">
              <ul>
                  <li className="card"><Link to="/register">Register</Link></li>
                  <li className="card"><Link to="/login">Login</Link></li>
              </ul>
          </div>

    )
}


export default Home
