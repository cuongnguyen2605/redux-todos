import React, { Component }              from 'react';
import PropTypes                         from 'prop-types';
import { connect }                       from 'react-redux';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { addPost }                       from '../actions/post';


class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title  : '',
      content: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { title, content } = this.state;
    if (!title || !content) return;
    let post = {
      id: Date(),
      title,
      content
    };
    this.props.addPost(post);
    this.setState({
      title  : '',
      content: ''
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title:</label>
          <Input fluid={true}
                 name="title"
                 value={this.state.title}
                 onChange={this.handleChange}
                 placeholder="Title"/>
        </Form.Field>
        <Form.Field>
          <label>Content:</label>
          <TextArea fluid="true"
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="Content"/>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post))
});

PostForm.propTypes = {
  addPost: PropTypes.func
};


export default connect(
  null,
  mapDispatchToProps
)(PostForm);
