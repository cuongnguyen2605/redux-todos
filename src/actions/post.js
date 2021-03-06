import axios from 'axios';
import config from '../config'
import * as types from '../constants/ActionTypes';

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
      const response = await axios.get(`${config.api}/post`);
      dispatch({
        type: types.GET_POST,
        posts: response.data
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const addPost = post => {
  return async dispatch => {
    try {
      const response = await axios.post(`${config.api}/post`, post);
      dispatch({
        type: types.ADD_POST,
        post: response.data
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const editPost = id => dispatch => dispatch({
  type: types.EDIT_POST,
  id
});

export const updatePost = (id, post) => {
  return async dispatch => {
    try {
      const response = await axios.put(`${config.api}/post/${id}`, post);
      dispatch({
        type: types.UPDATE_POST,
        id,
        post: response.data
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const delPost = id => {
  return async dispatch => {
    try {
      const response = await axios.delete(`${config.api}/post/${id}`);
      dispatch({
        type: types.DEL_POST,
        id: response.data._id
      });
    } catch (error) {
      console.log(error);
    }
  }
};