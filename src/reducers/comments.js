import * as actionTypes from "../actions/actionTypes";

const comments = (
  comments = {
    commentsArr: [],
    isLoading: true,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.COMMENTS_LOADING: {
      return { ...comments, isLoading: true, error: null };
    }
    case actionTypes.FETCH_COMMENTS:
      return {
        ...comments,
        commentsArr: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.DELETE_COMMENT:
      return {
        ...comments,
        commentsArr: comments.commentsArr.filter(
          (comment) => comment._id !== action.payload
        ),
        isLoading: false,
        error: null,
      };
    case actionTypes.UPDATE_COMMENT:
      return {
        ...comments,
        commentsArr: comments.commentsArr.map((comment) =>
          comment._id === action.payload._id ? action.payload : comment
        ),
        isLoading: false,
        error: null,
      };
    case actionTypes.CREATE_COMMENT:
      return {
        ...comments,
        commentsArr: [...comments.commentsArr, action.payload],
        isLoading: false,
        error: null,
      };
    case actionTypes.COMMENTS_ERROR:
      return { ...comments, isLoading: false, error: action.error };
    default:
      return comments;
  }
};

export default comments;
