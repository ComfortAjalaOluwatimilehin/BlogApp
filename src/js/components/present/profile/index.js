import React from "react"
import ProfileHeader from "./profileheader"
import AddPost from "./addPost"
import AllPosts from "./allposts"
 class Profile extends React.Component{

   constructor(props) {
        super(props);
        this.props = props;

      }

      componentWillMount(){
        let id = this.props.params.userid
        if(!id)
          return //stop Profile from rendering//redirect to login page with message
      this.props.fetchUser(id);
      return this.props.getPost();
      }
    render(){
            return(
              <div>

                  {this.props.user != null ? <ProfileHeader user={this.props.user} logout={this.props.logout}/>: <h1>Fetching</h1>}
                  <AddPost addpost={this.props.addpost} />
                  {this.props.posts ? <AllPosts posts={this.props.posts}/>: null}
              </div>
            )
    }
}
export default Profile;
