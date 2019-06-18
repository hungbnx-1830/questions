import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import store from "../store";
import { UPDATED_QUESTION } from "../actions/index";

import { Grid, Form, Input, Button, TextArea } from "semantic-ui-react";

class EditQuestion extends React.Component {
  state = {
    title: "",
    body: "",
    answer: ""
  };

  async componentDidMount() {
    axios
      .get(`https://huebj.sse.codesandbox.io/posts/${this.props.post.id}`)
      .then(res => {
        const post = res.data;

        this.setState({
          title: post.title,
          body: post.body,
          answer: post.answer
        });
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = async e => {
    e.preventDefault();
    const { title, body, answer } = this.state;

    const upQuestion = {
      title,
      body,
      answer
    };
    const res = await axios.put(
      `https://huebj.sse.codesandbox.io/posts/${this.props.post.id}`,
      upQuestion
    );

    store.dispatch({ type: UPDATED_QUESTION, payload: res.data });

    this.setState({
      title: "",
      body: "",
      answer:""
    });
    this.props.history.push("/");
  };

  render() {
    const { title, body, answer } = this.state;
    return (
      <Grid.Column width={12}>
        <Form>
          <Form.Field
            name="title"
            value={title}
            control={Input}
            label="Update Title"
            placeholder="Update Title..."
            onChange={this.handleChange}
          />

          <Form.Field
            name="body"
            value={body}
            control={TextArea}
            label="Update Question"
            placeholder="Update Question..."
            onChange={this.handleChange}
          />

          <Form.Field
            name="answer"
            value={answer}
            control={TextArea}
            label="Update Answer"
            placeholder="Update Answer..."
            onChange={this.handleChange}
          />
          <Button color="blue"
                  inverted
                  onClick={this.handleClick}
          >
            Update Question!
          </Button>
        </Form>
      </Grid.Column>
    );
  }
}


function mapStateToProps(state) {
  return {
    post: state.post
  };
}

export default connect(mapStateToProps)(EditQuestion);
