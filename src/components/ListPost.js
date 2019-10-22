import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import Post                 from './Post';


class ListPost extends Component {
  render() {
    const { posts } = this.props;
    return posts.map((post, i) => <Post key={i} post={post}/>);
  }
}

const mapStateToProps = state => ({
  posts: state.post
});

ListPost.propTypes = {
  posts: PropTypes.array
};


export default connect(mapStateToProps)(ListPost);
