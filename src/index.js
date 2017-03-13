import React from "react"
import {render} from "react-dom"
import App from "./js/app"
import userReducer from "./js/reducers/user"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import thunkMiddleware from 'redux-thunk'

require("./styles/main")


const preloadedState = window.__PRELOADED_STATE__
const store = createStore(userReducer, preloadedState, applyMiddleware(thunkMiddleware))


delete  window.__PRELOADED_STATE__
console.log("in indexjs")
render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById("app")
)
