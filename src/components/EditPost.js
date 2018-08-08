import React, { Component }              from 'react';
import PropTypes                         from 'prop-types';
import { connect }                       from 'react-redux';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { updatePost, editPost }          from '../actions/post';


class EditPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id     : this.props.post.id,
      title  : this.props.post.title,
      content: this.props.post.content
    };
  }

  _updatePost = () => {
    let { id, title, content } = this.state;
    if (!title || !content) return;
    let post = {
      title,
      content
    };
    this.props.updatePost(id, post);
  };

  _cancelEdit = () => this.props.editPost(this.state.id);

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Form>
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
        <Button type="submit" onClick={this._cancelEdit}>
          Cancel
        </Button>
        <Button type="submit" onClick={this._updatePost}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePost: (id, post) => dispatch(updatePost(id, post)),
  editPost  : id => dispatch(editPost(id))
});

EditPost.propTypes = {
  post      : PropTypes.object,
  updatePost: PropTypes.func
};


export default connect(
  null,
  mapDispatchToProps
)(EditPost);
