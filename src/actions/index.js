export const FETCH_POSTS = "FETCH_POSTS";
export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const UPDATED_QUESTION = "UPDATED_QUESTION";

export function fetchPosts(payload) {
  return { type: FETCH_POSTS, payload };
}

export function addQuestion(payload) {
  return { type: ADD_QUESTION, payload };
}

export function updQuestion(payload) {
  return { type: UPDATE_QUESTION, payload };
}

export function upedQuestion(payload) {
  return { type: UPDATED_QUESTION, payload };
}
