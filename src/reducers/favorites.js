import * as actionTypes from "../actions/actionTypes";

const favorites = (
  favorites = {
    postsArr: [],
    isLoading: true,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.FAVORITES_LOADING:
      return { loading: true, error: null };
    case actionTypes.GET_FAVORITES:
      return { loading: false, error: null, postsArr: action.payload };
    case actionTypes.FAVORITES_ERROR:
      return { isloading: false, error: action.error };
    case actionTypes.ADD_TO_FAVORITES:
      return { isLoading: false, error: null };
    case actionTypes.REMOVE_FROM_FAVORITES:
      return { isLoading: false, error: null };
    default:
      return favorites;
  }
};

export default favorites;
