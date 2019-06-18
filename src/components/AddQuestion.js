import React from "react";
import axios from "axios";
import uuid from "uuid";
import store from "../store";
import { Link } from "react-router-dom";
import { ADD_QUESTION } from "../actions/index";

import { Grid, Form, Input, Button, TextArea } from "semantic-ui-react";

class AddQuestion extends React.Component {
  state = {
    title: "",
    body: "",
    answer:""
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    const { title, body, answer } = this.state;
    e.preventDefault();

    if (title === "" || body === "" || answer === "") {
      alert("Vui long điền thông tin !");
    } else {
      axios({
        method: "POST",
        url: "https://huebj.sse.codesandbox.io/posts",
        data: {
          title: title,
          body: body,
          answer: answer,
          id: uuid()
        }
      }).then(res => {
        store.dispatch({ type: ADD_QUESTION, payload: res.data });
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <Grid.Column width={12}>
        <Form>
          <Form.Field
            name="title"
            control={Input}
            label="Title"
            placeholder="Title..."
            onChange={this.handleChange}
          />

          <Form.Field
            name="body"
            control={TextArea}
            label="Question"
            placeholder="Question..."
            onChange={this.handleChange}
          />

          <Form.Field
            name="answer"
            control={TextArea}
            label="Answer"
            placeholder="Answer..."
            onChange={this.handleChange}
          />
          <Link to="/">
            <Button
              color="blue"
              inverted
            >
              Back
            </Button>
          </Link>
          <Button
            color="red"
            inverted
            onClick={this.handleClick}
          >
            Submit !
          </Button>
        </Form>
      </Grid.Column>
    );
  }
}

export default AddQuestion;
