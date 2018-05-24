import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import { connect }  from 'react-redux';
import { getPosts } from '../actions/postActions';

class ListPost extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h1>List Post</h1>
                {postItems}
            </div>
        );
    }

}

ListPost.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts   : PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, {getPosts})(ListPost);
