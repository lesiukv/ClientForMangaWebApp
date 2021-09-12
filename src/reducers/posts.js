import * as ActionTypes from "../actions/actionTypes.js";

const posts = (posts = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL:
      return action.payload;
    case ActionTypes.CREATE:
      return [...posts, action.payload];
    case ActionTypes.GET_POSTDETAILS:
      return action.payload;
    case ActionTypes.DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case ActionTypes.UPDATE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    default:
      return posts;
  }
};

export default posts;
