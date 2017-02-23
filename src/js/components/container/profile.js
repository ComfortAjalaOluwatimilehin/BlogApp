import Profile from "../present/profile/index"
import {connect} from "react-redux"


const mapPropsToState=(state)=>{
  return {
    user:state.user
  }
}
const mapPropsToDispatch=(dispatch)=>{
  return {
      follow:(user, target)=>{
        console.log("following target")
            return dispatch({
              type:"FOLLOW_USER",
              user,
              target
            })
      }
  }
}






export default connect(mapPropsToState, mapPropsToDispatch)(Profile)
