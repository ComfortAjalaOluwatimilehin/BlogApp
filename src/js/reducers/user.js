import {showDashboard, followUser} from "../actions/reducerActions"

var initialState = {
  user:null
}

const reducer = (state = initialState, action)=>{

      switch (action.type) {
        case  showDashboard:
            return state;
          break;

        case followUser:
          return state;
        break;
        default:
        return state;

      }
}



export default reducer
