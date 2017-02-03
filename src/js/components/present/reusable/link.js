import React, {PropTypes} from "react"

const Link = ({href,classname,children})=>{
    return (

        <a href={href} className={classname}>
            {children}
        </a>

    )
}

Link.PropTypes = {
  href:PropTypes.string.isRequired,
  classname:PropTypes.string.isRequired
}
export default Link
