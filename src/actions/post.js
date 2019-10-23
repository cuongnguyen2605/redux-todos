import axios from 'axios';
import {
  GET_POST,
  ADD_POST,
  EDIT_POST,
  UPDATE_POST,
  DEL_POST
} from '../constants/ActionTypes';

// export const addPost = post => ({
//   type: ADD_POST,
//   post
// });

// export const editPost = id => ({
//   type: EDIT_POST,
//   id
// });

// export const updatePost = (id, post) => ({
//   type: UPDATE_POST,
//   id,
//   post
// });

// export const delPost = id => ({
//   type: DEL_POST,
//   id
// });


export const getPost = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      const { data } = response;
      dispatch({
        type: GET_POST,
        data
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const addPost = post => {
  return async dispatch => {
    try {
      const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`);
      console.log(response);
      dispatch({
        type: ADD_POST,
        post
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const editPost = id => dispatch => dispatch({
  type: EDIT_POST,
  id
});

export const updatePost = (id, post) => {
  return async dispatch => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts`);
      console.log(response);
      dispatch({
        type: UPDATE_POST,
        id,
        post
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const delPost = id => {
  return async dispatch => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts`);
      console.log(response);
      dispatch({
        type: DEL_POST,
        id
      });
    } catch (error) {
      console.log(error);
    }
  }
};