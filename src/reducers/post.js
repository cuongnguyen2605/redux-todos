import {
  ADD_POST,
  EDIT_POST,
  UPDATE_POST,
  DEL_POST
} from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.post];
    case EDIT_POST:
      return state.map(post => post.id === action.id ? {
        ...post,
        editing: !post.editing
      } : post);
    case UPDATE_POST:
      return state.map(post => post.id === action.id ? {
        ...post,
        title  : action.post.title,
        content: action.post.content,
        editing: !post.editing
      } : post);
    case DEL_POST:
      return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
}
