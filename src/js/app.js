import React from "react"
import {Router,browserHistory} from "react-router"
import routes from  "./routes"
require("./components/present/auth/style")
require("./components/present/home/style")
const App = () =>{
  return (
          <Router history={browserHistory} routes={routes}/>
  )
}


export default App
