import * as api from "../api";
import * as actionTypes from "./actionTypes.js";
import { handleError } from "./errors";

const postError = (error) => {
  return { type: actionTypes.POST_FAILURE, error: error };
};

const postLoading = () => {
  return { type: actionTypes.POST_LOADING };
};

const postDetailsError = (error) => {
  return {
    type: actionTypes.POST_DETAILS_FAILURE,
    error: error,
    isLoading: false,
  };
};

const postDetailsLoading = () => {
  return { type: actionTypes.POST_DETAILS_LOADING };
};

export const getPosts = () => async (dispatch) => {
  dispatch(postLoading());
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: actionTypes.FETCH_POSTS, payload: data });
  } catch (error) {
    dispatch(postError(error));
  }
};

export const getPostDetails = (id) => async (dispatch) => {
  dispatch(postDetailsLoading());
  try {
    const { data } = await api.getPostDetails();
    dispatch({ type: actionTypes.GET_POST_DETAILS, payload: data });
  } catch (error) {
    dispatch(handleError(error));
    dispatch(postDetailsError(error));

  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: actionTypes.CREATE_POST, payload: data });
    return data;
  } catch (error) {
    dispatch(postError(error));
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: actionTypes.UPDATE_POST, payload: data });
  } catch (error) {
    dispatch(postError(error));
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: actionTypes.DELETE_POST, payload: id });
  } catch (error) {
    dispatch(postError(error));
  }
};
