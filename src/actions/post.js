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
      const response = [];
      dispatch({
        type: GET_POST,
        response
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const addPost = post => dispatch => dispatch({
  type: ADD_POST,
  post
});

export const editPost = id => dispatch => dispatch({
  type: EDIT_POST,
  id
});

export const updatePost = (id, post) => dispatch => dispatch({
  type: UPDATE_POST,
  id,
  post
});

export const delPost = id => dispatch => dispatch({
  type: DEL_POST,
  id
});
