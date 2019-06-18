import {
  FETCH_POSTS,
  ADD_QUESTION,
  UPDATE_QUESTION,
  UPDATED_QUESTION

} from "../actions/index";

const initialState = {
  posts: [],
  search: "",
  post: ""
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case ADD_QUESTION:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        post: action.payload
      };
    case UPDATED_QUESTION:
      return {
        ...state,
        posts: state.posts.map(e =>
          e.id === action.payload.id ? (e = action.payload) : e
        )
      };
    default:
      return state;
  }
}
