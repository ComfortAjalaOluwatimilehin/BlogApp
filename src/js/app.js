import React from "react"
import {Router, Route, browserHistory} from "react-router"
import Home from "./components/present/home/index"
import Login from "./components/present/auth/login"
import Register from "./components/present/auth/register"


const App = () =>{

  return (

          <Router history={browserHistory}>
              <Route path="/" component={Home} />
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
          </Router>
  )
}


export default App
