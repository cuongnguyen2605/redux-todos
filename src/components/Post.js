import React, { Component }  from 'react';
import PropTypes             from 'prop-types';
import { connect }           from 'react-redux';
import { Button }            from 'semantic-ui-react';
import { delPost, editPost } from '../actions/post';
import EditPost              from './EditPost';


class Post extends Component {

  _editPost = id => this.props.editPost(id);

  _delPost = id => this.props.delPost(id);

  render() {
    return this.props.post.editing ?
      <EditPost post={this.props.post}/> :
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.content}</p>
        <Button onClick={() => this._editPost(this.props.post.id)}>
          Edit
        </Button>
        <Button onClick={() => this._delPost(this.props.post.id)}>
          Remove
        </Button>
        <hr/>
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
  // { delPost, editPost }
)(Post);
