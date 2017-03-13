import React, {PropTypes} from "react"
import EachPost from "./eachpost"


const AllPosts = ({posts})=>{

        return (

            <ul>
                  {posts.map(post=>{
                          return <EachPost post={post} key={post._id} />
                  })}
            </ul>
        )
}

AllPosts.PropTypes = {
  posts:PropTypes.array
}


export default AllPosts
