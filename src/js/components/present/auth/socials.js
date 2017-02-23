import axios from "axios"
import React from "react"
const links = {
  facebook:"/facebook",
  twitter:"/twitter",
  google:"/google"
}

const head = {
   method: 'get',
  headers:{
  "Access-Control-Allow-Origin":"*"
}}

const Socials = () =>{
    return (

                <div id="socials">
                          <span onClick={()=>{
                              axios(Object.assign({}, head,{url:links.facebook}))
                              .then(response=>{console.log(response)})
                          }

                        }>Facebook</span>
                        <span onClick={()=>{
                            axios(Object.assign({}, head,{url:links.twitter}))
                            .then(response=>{console.log(response)})

                        }

                      }>Twitter</span>
                      <span onClick={()=>{
                          axios(Object.assign({}, head,{url:links.google}))
                          .then(response=>{console.log(response)})

                      }

                    }>Google</span>
        </div>

    )
}


export default Socials
