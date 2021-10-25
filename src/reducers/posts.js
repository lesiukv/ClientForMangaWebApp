import * as actionTypes from "../actions/actionTypes.js";

const posts = (posts = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return action.payload;
    case actionTypes.CREATE_POST:
      return [...posts, action.payload];
    case actionTypes.DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);
    case actionTypes.UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};

export default posts;
