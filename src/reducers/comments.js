import * as actionTypes from "../actions/actionTypes";

const comments = (comments = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMMENTS:
      return action.payload;
    case actionTypes.DELETE_COMMENT:
      return comments.filter((comment) => comment._id !== action.payload);
    case actionTypes.UPDATE_COMMENT:
      return comments.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment
      );
    case actionTypes.CREATE_COMMENT:
        return [...comments, action.payload];
    default:
        return comments;
  }
};

export default comments;