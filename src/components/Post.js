import React, { Component }  from 'react';
import PropTypes             from 'prop-types';
import { connect }           from 'react-redux';
import { Button }            from 'semantic-ui-react';
import { delPost, editPost } from '../actions/postActions';
import EditPost              from './EditPost';


class Post extends Component {

  _editPost = id => {
    this.props.editPost(id);
  };

  _delPost = id => {
    this.props.delPost(id);
  };

  render() {
    const { post } = this.props;
    return post.editing ?
      <EditPost post={post}/> :
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Button onClick={() => this._editPost(post.id)}>
          Edit
        </Button>
        <Button onClick={() => this._delPost(post.id)}>
          Remove
        </Button>
      </div>
  }

}

const mapDispatchToProps = dispatch => ({
  delPost : id => dispatch(delPost(id)),
  editPost: id => dispatch(editPost(id))
});

Post.propTypes = {
  editPost: PropTypes.func,
  delPost : PropTypes.func
};


export default connect(
  null,
  mapDispatchToProps
)(Post);
