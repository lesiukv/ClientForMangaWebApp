import * as actionTypes from "../actions/actionTypes.js";

const postdetails = (
  postdetails = {
    isLoading: true,
    error: null,
    postdetailsArr: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_POST_DETAILS:
      return {
        ...postdetails,
        postdetailsArr: action.payload,
        isLoading: false,
      };
    case actionTypes.POST_DETAILS_FAILURE:
      return { ...postdetails, error: action.error, isLoading: false };
    case actionTypes.POST_DETAILS_LOADING:
      return { ...postdetails, isLoading: true };
    default:
      return postdetails;
  }
};

export default postdetails;
