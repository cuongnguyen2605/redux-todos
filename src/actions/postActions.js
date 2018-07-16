import {
  ADD_POST,
  EDIT_POST,
  UPDATE_POST,
  DEL_POST
} from '../constants/actionTypes';

export const addPost = post => ({
  type: ADD_POST,
  post
});

export const editPost = id => ({
  type: EDIT_POST,
  id
});

export const updatePost = (id, post) => ({
  type: UPDATE_POST,
  id,
  post
});

export const delPost = id => ({
  type: DEL_POST,
  id
});
