import * as actionTypes from "../actions/actionTypes.js";

const posts = (
  posts = {
    posts: [],
    isLoading: true,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.POST_LOADING:
      return { ...posts, isLoading: true };
    case actionTypes.FETCH_POSTS:
      return {
        ...posts,
        posts: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.CREATE_POST:
      return {
        ...posts,
        posts: [posts.posts, action.payload],
        isLoading: false,
        error: null,
      };
    case actionTypes.DELETE_POST:
      return {
        ...posts,
        posts: posts.posts.filter((post) => post._id !== action.payload),
        isLoading: false,
        error: null,
      };
    case actionTypes.UPDATE_POST:
      return {
        ...posts,
        posts: posts.postArr.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        isLoading: false,
        error: null,
      };
    case actionTypes.POST_FAILURE:
      return { ...posts, isLoading: false, error: action.error };
    default:
      return posts;
  }
};

export default posts;
