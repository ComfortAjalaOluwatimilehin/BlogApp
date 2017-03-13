'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../src/js/routes';
import NotFoundPage from "../src/js/components/present/notfound/nopage"
import userReducer from "../src/js/reducers/user"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import thunkMiddleware from 'redux-thunk'

var loginMiddleWare = require("./routes/api/callbacks").isLoggedIn

module.exports = function(app){
  //set engine
  app.set("view engine", "ejs")
  //set views directory
  app.set("views", path.join(__dirname,"views"));


app.use("/profile",loginMiddleWare, function(req,res,next){
      console.log("we are checking the profile")
      next()
})

  app.get("*",  function(req,res){
console.log(req.url)
console.log("this callback should happen after the function above ")


              //match req url to components

              match({routes,location:req.url},   (err, redirectLocation, renderProps) =>{

                        //IF ERR SEND status
                        if(err)
                          return res.status(400).send(err.message)

                        if(redirectLocation)
                          return res.redirect(302, redirectLocation.pathname + redirectLocation.search)


                        let markup;

                        const store = createStore(userReducer, applyMiddleware(thunkMiddleware)) //create the store for the Provider
                        //router has the user object

                        if(renderProps){

                              markup = renderToString(
                                <Provider store={store}>
                                <RouterContext {...renderProps} />
                                </Provider>
                              )
                        }

                        else{

                                markup = renderToString(
                                  <Provider store={store}>
                                  <NotFoundPage />
                                    </Provider>
                                )
                                //res.status(400)
                        }
                        console.log("I am markup")

                       res.render("index", {markup, state:JSON.stringify( store.getState() ) })
              })

  })
}
