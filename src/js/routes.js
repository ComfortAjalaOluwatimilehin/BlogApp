import React from "react"
import {Router, Route, browserHistory,IndexRoute} from "react-router"
import Home from "./components/present/home/index"
import Login from "./components/present/auth/login"
import Register from "./components/present/auth/register"
import Profile from "./components/container/profile"
import NotFoundPage from "./components/present/notfound/nopage"

const routes =(
        <Route path="/">
              <IndexRoute  component={Home} />
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route path="/profile/:id" component={Profile}/>
        </Route>
  )



export default routes
