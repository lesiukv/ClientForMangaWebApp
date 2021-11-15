import * as actionTypes from "./actionTypes";
import * as api from "../api";

const favoritesError = (error) => {
  return { type: actionTypes.FAVORITES_ERROR, error: error };
};

const favoritesLoading = () => {
  return { type: actionTypes.FAVORITES_LOADING };
};

const getFavorites = () => async (dispatch) => {
  dispatch(favoritesLoading());
  try {
    const { data } = await api.getFavorites();
    dispatch({ type: actionTypes.GET_FAVORITES, payload: data });
  } catch (error) {
    dispatch(favoritesError(error));
  }
};
