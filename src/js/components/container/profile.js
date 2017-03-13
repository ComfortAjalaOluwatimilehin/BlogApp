import Profile from "../present/profile/index"
import {connect} from "react-redux"
import axios from "axios"
import fetch from 'isomorphic-fetch'
const mapPropsToState=(state)=>{
  return {
    user:state.user,
    posts:state.posts
  }
}
const mapPropsToDispatch=(dispatch)=>{
  return {
      fetchUser:(id)=>{

                 dispatch({type:"FETCHING_USER",id})
              axios.get("http://localhost:8000/User")
              .then(response=>{
                      if(response.data.user){
                          dispatch({  type:"UPDATE_USER", user:response.data.user})
                      }
                      else{

                      }
              })
              .catch(error=>console.error(error))




      },
      getPost:()=>{

              dispatch({type:"FETCHING_POSTS"})
              axios.get("http://localhost:8000/getpost")
              .then(response=>{dispatch({type:"UPDATE_POSTS", posts:response.data.posts})})
              .catch(error=>console.error(error))
      },
      logout:()=>{
          console.log("logging out")
            return axios.post("/logout")
            .then(response=>{
                  return window.location = response.data.redirect
            })
            .catch(error=>{

            })
      },
      addpost:(text)=>{

              return axios.post("/addpost",{post:{text}})
              .then(response=>console.log(response))
              .catch(error=>console.error(error))
      }
  }
}

export default connect(mapPropsToState, mapPropsToDispatch)(Profile)
