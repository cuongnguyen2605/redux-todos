import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import { getPost }          from '../actions/post';
import Post                 from './Post';


class ListPost extends Component {

  static propTypes = {
    posts  : PropTypes.array.isRequired,
    getPost: PropTypes.func.isRequired,
  }

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


export default connect(
  mapStateToProps,
  { getPost }
)(ListPost);