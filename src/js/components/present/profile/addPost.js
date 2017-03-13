import React, {PropTypes} from "react"


const AddPost = ({addpost}) =>{
    let input;
        return (

                <div>

                        <textarea ref={node=>input = node}></textarea>
                        <button onClick={()=>{
                              if(input.value){

                                      addpost(input.value)
                                      input.value = ""
                              }
                        }}>
                        Add post
                        </button>


                </div>
        )
}

AddPost.PropTypes = {
  addpost:PropTypes.func.isRequired
}


export default AddPost
