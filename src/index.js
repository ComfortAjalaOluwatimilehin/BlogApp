import React from "react"
import {render} from "react-dom"
import App from "./js/app"
import userReducer from "./js/reducers/user"
import {Provider} from "react-redux"
import {createStore} from "redux"
require("./styles/main")


const preloadedState = window.__PRELOADED_STATE__
const store = createStore(userReducer, preloadedState)


delete  window.__PRELOADED_STATE__



console.log(store.getState())
render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById("app")
)
