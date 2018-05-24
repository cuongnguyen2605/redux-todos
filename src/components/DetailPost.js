import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import { connect } from 'react-redux';
import { getPost } from '../actions/postActions';

class DetailPost extends Component {

    componentDidMount() {
        this.props.getPost();
    }

    render() {
        return (
            <div>
                <p><b>User Id:</b> {this.props.post.userId}</p>
                <p><b>Id:</b> {this.props.post.id}</p>
                <p><b>Title:</b> {this.props.post.title}</p>
                <p><b>Body:</b> {this.props.post.body}</p>
            </div>
        )
    }
}

DetailPost.propTypes = {
    getPost: PropTypes.func.isRequired,
    post   : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.posts.item
});

export default connect(mapStateToProps, {getPost})(DetailPost);
