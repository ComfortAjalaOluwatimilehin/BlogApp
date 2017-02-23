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
import {createStore} from "redux"


module.exports = function(app){
  //set engine
  app.set("view engine", "ejs")
  //set views directory
  app.set("views", path.join(__dirname,"views"));



  app.get("*",  function(req,res){



              //match req url to components

              match({routes,location:req.url},   (err, redirectLocation, renderProps) =>{

                        //IF ERR SEND status
                        if(err)
                          return res.status(400).send(err.message)

                        if(redirectLocation)
                          return res.redirect(302, redirectLocation.pathname + redirectLocation.search)


                        let markup;

                        const store = createStore(userReducer) //create the store for the Provider
                        //router has the user object
                      
                        if(renderProps){

                              markup = renderToString(
                                <Provider store={store}>
                                <RouterContext {...renderProps} />
                                </Provider>
                              )
                        }

                        else{

                                markup = renderToString(<NotFoundPage />)
                                res.status(400)
                        }

                        return res.render("index", {markup, state:JSON.stringify(store.getState())})
              })
  })
}
