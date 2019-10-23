import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import { getPost }          from '../actions/post';
import Post                 from './Post';


class ListPost extends Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    const { posts } = this.props;
    return posts.map((post, i) => <Post key={i} post={post}/>);
  }
}

const mapStateToProps = state => ({
  posts: state.post
});

ListPost.propTypes = {
  getPost: PropTypes.func.isRequired,
  posts: PropTypes.array
};


export default connect(
  mapStateToProps,
  { getPost }
)(ListPost);
