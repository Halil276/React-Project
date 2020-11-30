import { withStyles } from "@material-ui/core/styles";
import React from "react";
const styles = {
  root: {
    width: "500px",
    margin: "0 auto",
    padding: "20px",
  },
  input: {
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  boxSizing: "border-box",
  },
  post: {
    backgroundColor: "red",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  },
  content: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
  }
};
class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  onSubmit = (event) => {
    let id = Math.round(Math.random() * 100000000);
    let { title, content } = this.state;
    let { submitData } = this.props;
    let date = new Date();
    let data = { title: title, content: content, created_at: date, id: id };
    event.preventDefault();
    submitData(data);
    this.setState({ title: "", content: "" });
    // alert("A name was submitted: " + JSON.stringify(this.state));
  };

  onValueChanged = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    let { classes } = this.props;
    let { title, content } = this.state;
    return (
      <div>
        <form className={classes.root} onSubmit={this.onSubmit}>
          <input
            className={classes.input}
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.onValueChanged}
          /><br></br>
          <textarea
          className={classes.content}
            name="content"
            placeholder="Content"
            value={content}
            onChange={this.onValueChanged}
          ></textarea>
          <br></br>

          <input className={classes.post} type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(PostForm);
