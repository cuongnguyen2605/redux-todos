import React, { Component }  from 'react';
import PropTypes             from 'prop-types';
import { connect }           from 'react-redux';
import { Button, Icon }      from 'semantic-ui-react';
import { delPost, editPost } from '../actions/post';
import EditPost              from './EditPost';


class Post extends Component {

  _editPost = id => this.props.editPost(id);

  _delPost = id => this.props.delPost(id);

  renderPost = post => (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <Button primary onClick={() => this._editPost(post.id)}>
        <Icon name="edit"/>Edit
      </Button>

      <Button negative onClick={() => this._delPost(post.id)}>
        <Icon name="delete"/>Remove
      </Button>

      <hr/>
    </div>
  );

  render() {
    const { post } = this.props;
    return post.editing ? <EditPost post={post}/> : this.renderPost(post);
  }

}

// const mapDispatchToProps = dispatch => ({
//   delPost : id => dispatch(delPost(id)),
//   editPost: id => dispatch(editPost(id))
// });

Post.propTypes = {
  editPost: PropTypes.func,
  delPost : PropTypes.func
};


export default connect(
  null,
  // mapDispatchToProps
  { delPost, editPost }
)(Post);
