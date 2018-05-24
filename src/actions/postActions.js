import axios from 'axios';

import { GET_POSTS, NEW_POST, EDIT_POST, GET_POST, DELETE_POST } from './types';

export const getPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => dispatch({
            type   : GET_POSTS,
            payload: res.data
        }))
    ;
};

export const getPost = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => dispatch({
            type   : GET_POST,
            payload: res.data
        }))
    ;
};

export const createPost = postData => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body   : JSON.stringify(postData)
    })
        .then(post => dispatch({
            type   : NEW_POST,
            payload: post
        }))
    ;
};

export const editPost = editData => dispatch => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        method : 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body   : JSON.stringify(editData)
    })
        .then(post => dispatch({
            type   : EDIT_POST,
            payload: post
        }))
};

export const deletePost = id => dispatch => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
        method : 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body   : JSON.stringify(id)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type   : DELETE_POST,
            payload: post
        }))
};
