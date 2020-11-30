import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
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
};

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      content: "",
    };
  }

  //   componentDidMount() {
  //     let { post } = this.props;
  //     this.setState({ id: post.id, title: post.title, content: post.content });
  //   }

  componentDidUpdate(prevProps, prevState) {
    let { post } = this.props;
    if (post != prevProps.post) {
      this.setState({ id: post.id, title: post.title, content: post.content });
    }
  }

  onValueChanged = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    let { id, title, content } = this.state;
    let { submitData, handleClose } = this.props;
    let date = new Date();
    let data = { id: id, title: title, content: content, created_at: date };
    event.preventDefault();
    submitData(data);
    handleClose();
    // alert("A name was submitted: " + JSON.stringify(this.state));
  };

  render() {
    let { handleClose, open, classes } = this.props;
    let { title, content } = this.state;
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Post edit
        </MuiDialogTitle>
        <MuiDialogContent dividers></MuiDialogContent>
        <form className={classes.root} onSubmit={this.onSubmit}>
          <input
            className={classes.input}
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.onValueChanged}
          />
          <textarea
            className={classes.input}
            name="content"
            placeholder="Content"
            value={content}
            onChange={this.onValueChanged}
          ></textarea>

          <input className={classes.post} type="submit" value="Save Post" />
        </form>
      </Dialog>
    );
  }
}

export default withStyles(styles)(EditForm);
