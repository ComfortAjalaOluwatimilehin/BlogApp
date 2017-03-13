import {showDashboard, followUser, updateUser, fetchUser,fetchPost,updatePost} from "../actions/reducerActions"
import {axios} from "axios"

var initialState = {
  user:null,
  fetching:false,
  fetching_post:false,
  posts:null
}

const reducer = (state = initialState, action)=>{

      switch (action.type) {
        case  showDashboard:
            return state;
          break;
        case followUser:
          return state;
        break;
        case updateUser:
            return Object.assign({}, state, {user:action.user, fetching:false})
        break;
        case fetchUser:
            return Object.assign({}, state, {fetching:true})
        break;
        case fetchPost:
        return Object.assign({}, state, {fetching_post:true})
        break;
        case updatePost:
          return Object.assign({}, state, {posts:action.posts})
        default:
        return state;

      }
}



export default reducer
