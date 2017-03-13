import React, {PropTypes} from "react"



const EachPost = ({post})=>{

      return (

          <div>
            <p>{post.text}</p>
            <i>{post.date}</i>
          </div>
      )
}


EachPost.PropTypes = {
  post:PropTypes.object.isRequired
}


export default EachPost
