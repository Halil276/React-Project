import { withStyles } from "@material-ui/core/styles";

import React from "react";
const styles = {
  root: {
    width: "200px",
    border: "3px solid red",
    backgroundColor: "lightblue",
  },
  title: {
    color: "#fff",
  },
  content: {
    color: "#fff",
  },
  delete: {
    backgroundColor: "red",
    border: "none",
    color: "white",
    padding: "5px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
  },
  edit: {
    backgroundColor: "black",
    border: "none",
    color: "white",
    padding: "5px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
  },
  
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { classes, post, editPost, deletePost } = this.props;

    return (
      <div className={classes.root}>
        <h1 className={classes.title}>{post.title}</h1>
        <p className={classes.content}>{post.content}</p>

        <button className={classes.delete} onClick={() => deletePost(post.id)}>delete</button>

        <button className={classes.edit} onClick={() => editPost(post)}>edit</button>
      </div>
    );

  }
}

export default withStyles(styles)(App);
