import {
  ADD_POST,
  EDIT_POST,
  UPDATE_POST,
  DEL_POST
} from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    // Handle Add Post
    case ADD_POST:
      return [...state, action.post];
    // Handle Edit Post
    case EDIT_POST:
      return state.map(post => post.id === action.id ? {
        ...post,
        editing: !post.editing
      } : post);
    // Handle Update Post
    case UPDATE_POST:
      return state.map(post => post.id === action.id ? {
        ...post,
        title  : action.post.title,
        content: action.post.content,
        editing: !post.editing
      } : post);
    // Handle Delete Post
    case DEL_POST:
      return state.filter(post => post.id !== action.id);
    // Default
    default:
      return state;
  }
}
