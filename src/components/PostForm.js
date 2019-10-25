import React, { Component }                    from 'react';
import PropTypes                               from 'prop-types';
import { connect }                             from 'react-redux';
import { Button, Form, Input, TextArea, Icon } from 'semantic-ui-react';
import { addPost }                             from '../actions/post';


class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title  : '',
      content: ''
    };
  }

  static propTypes = {
    addPost: PropTypes.func.isRequired,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;
    if (!title || !content) return;
    const post = {
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
    const { title, content } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Field>
          <label>Title:</label>
          <Input fluid={true}
                 name="title"
                 value={title}
                 onChange={this.handleChange}
                 placeholder="Title"/>
        </Form.Field>

        <Form.Field>
          <label>Content:</label>
          <TextArea fluid="true"
                    name="content"
                    value={content}
                    onChange={this.handleChange}
                    placeholder="Content"/>
        </Form.Field>

        <Button primary type="submit">
          <Icon name="check"/>Submit
        </Button>

      </Form>
    );
  }

}

// const mapDispatchToProps = dispatch => ({
//   addPost: post => dispatch(addPost(post))
// });


export default connect(
  null,
  // mapDispatchToProps
  { addPost }
)(PostForm);
