import * as actionTypes from "./actionTypes";
import * as api from "../api";

const favoritesError = (error) => {
  return { type: actionTypes.FAVORITES_ERROR, error: error };
};

const favoritesLoading = () => {
  return { type: actionTypes.FAVORITES_LOADING };
};

export const getFavorites = () => async (dispatch) => {
  dispatch(favoritesLoading());
  try {
    const {
      data: { posts },
    } = await api.getFavorites();
    dispatch({ type: actionTypes.GET_FAVORITES, payload: posts });
  } catch (error) {
    dispatch(favoritesError(error));
  }
};

export const addFavorite = (postId) => async (dispatch) => {
  try {
    await api.addFavorite(postId);
    dispatch(getFavorites);
  } catch (error) {
    dispatch(favoritesError(error));
  }
};

export const removeFavorite = (postId) => async (dispatch) => {
  try {
    await api.removeFavorite(postId);
    dispatch(getFavorites);
  } catch (error) {
    dispatch(favoritesError(error));
  }
};
