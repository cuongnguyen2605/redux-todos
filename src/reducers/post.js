import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    // Handle Get Post
    case types.GET_POST:
      return state = action.posts;

    // Handle Add Post
    case types.ADD_POST:
      return [...state, action.post];

    // Handle Edit Post
    case types.EDIT_POST:
      return state.map(post => post._id === action.id ? {
        ...post,
        editing: !post.editing
      } : post);

    // Handle Update Post
    case types.UPDATE_POST:
      return state.map(post => post._id === action.id ? {
        ...post,
        title  : action.post.title,
        content: action.post.content,
        editing: !post.editing
      } : post);

    // Handle Delete Post
    case types.DEL_POST:
      return state.filter(post => post._id !== action.id);

    // Default
    default:
      return state;
  }
}
