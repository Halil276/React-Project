import { withStyles } from "@material-ui/core/styles";
import React from "react";
import PostForm from "./Components/PostForm";
import PostCard from "./Components/PostCard";
import EditDialog from "./Components/EditForm"
const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      editDialogOpen:false,
      activePost:{}
    };
  }

  openDialog=(post)=>{
    this.setState({editDialogOpen:true,activePost:post})
  }

  closeDialog=()=>{
    this.setState({editDialogOpen:false})
  }

  editPost=(post)=>{
    console.log("post...:",post)
    let {posts}=this.state
    let _posts=posts.map(item=>{
      if(item.id==post.id){
        item.title=post.title
        item.content=post.content
      }
      return item
    })
    this.setState({posts:_posts})

  }

  submitData = (data) => {
    let { posts } = this.state;
    posts.push(data);
    this.setState({ posts: posts });
  };

  deletePost = (id) => {
    let { posts } = this.state;
    let _posts = posts.filter((item) => {
      return item.id != id;
    });
    this.setState({ posts: _posts });
  };

  render() {
    let { classes } = this.props;
    let { posts,editDialogOpen,activePost } = this.state;
    console.log(posts);
    return (
      <div className={classes.root}>
        <EditDialog open={editDialogOpen} handleClose={this.closeDialog} post={activePost} submitData={this.editPost}/>
        <div>
          <PostForm submitData={this.submitData} />
        </div>
        <div>
          {posts.map((item, index) => {
            return (
              <PostCard
                key={index}
                post={item}
                deletePost={this.deletePost}
                editPost={this.openDialog}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
