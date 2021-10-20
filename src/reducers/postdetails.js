import * as actionTypes from "../actions/actionTypes.js";

const postdetails = (postdetails = [], action) => {
  switch (action.type) {
    case actionTypes.GET_POST_DETAILS:
      return action.payload;

    default:
      return postdetails;
  }
};

export default postdetails;
