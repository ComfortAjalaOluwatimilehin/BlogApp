import React, {PropTypes} from "react"

const ProfileHeader = ({user, logout}) =>{
      return (

          <div>
            <h1>My Username is: {user.local.username}</h1>
            <button onClick={()=>logout()}>LogOut</button>
          </div>

      )
}


ProfileHeader.PropTypes = {
    user:PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired
}



export default ProfileHeader
