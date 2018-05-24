import { GET_POSTS, GET_POST, NEW_POST, EDIT_POST, DELETE_POST } from '../actions/types';

const initialState = {
    items: [],
    item : {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case GET_POST:
            return {
                ...state,
                item: action.payload
            };
        case NEW_POST:
            return {
                ...state
            };
        case EDIT_POST:
            return {
                ...state
            };
        case DELETE_POST:
            return {
                ...state
            };
        default:
            return state;
    }
}