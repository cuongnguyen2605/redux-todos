import React, { Component }    from 'react';
import PropTypes               from 'prop-types';
import { connect }             from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';
import { addPost }             from '../actions/postActions';


class PostForm extends Component {

  state = {
    title  : '',
    content: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.content) {
      return;
    }
    let post = {
      id     : new Date(),
      title  : this.state.title,
      content: this.state.content
    };
    this.props.addPost(post);
    this.setState({
      title  : '',
      content: ''
    });
  };

  render() {
    const { title, content } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title:</label>
          <Input fluid
                 name="title"
                 value={title}
                 onChange={this.handleChange}
                 placeholder="Title"/>
        </Form.Field>
        <Form.Field>
          <label>Content:</label>
          <Input fluid
                 name="content"
                 value={content}
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
