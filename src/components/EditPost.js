import React, { Component }              from 'react';
import PropTypes                         from 'prop-types';
import { connect }                       from 'react-redux';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { updatePost }                    from '../actions/postActions';


class EditPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title  : this.props.post.title,
      content: this.props.post.content
    };
  }

  _updatePost = () => {
    let { id }             = this.props.post;
    let { title, content } = this.state;
    if (!title || !content) {
      return;
    }
    let post = {
      title,
      content
    };
    this.props.updatePost(id, post);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { title, content } = this.state;
    return (
      <Form onSubmit={this._updatePost}>
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
          <TextArea fluid
                    name="content"
                    value={content}
                    onChange={this.handleChange}
                    placeholder="Content"/>
        </Form.Field>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePost: (id, post) => dispatch(updatePost(id, post))
});

EditPost.propTypes = {
  post      : PropTypes.object,
  updatePost: PropTypes.func
};


export default connect(
  null,
  mapDispatchToProps
)(EditPost);
