import * as api from "../api";
import * as actionTypes from "./actionTypes.js";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: actionTypes.FETCH_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.getPostDetails(id);
    dispatch({ type: actionTypes.GET_POST_DETAILS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: actionTypes.CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: actionTypes.UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: actionTypes.DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};
