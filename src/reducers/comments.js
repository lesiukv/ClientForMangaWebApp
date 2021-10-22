import * as ActionTypes from "../actions/actionTypes";

const comments = (comments = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMMENTS:
      return action.payload;
    case ActionTypes.DELETE_COMMENT:
      return comments.filter((comment) => comment._id !== action.payload);
    case ActionTypes.UPDATE_COMMENT:
      return comments.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment
      );
    case ActionTypes.ADD_COMMENT:
        return [... comments, action.payload];
    default:
        return comments;
  }
};

export default comments;