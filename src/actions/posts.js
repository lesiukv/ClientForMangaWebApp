import * as api from "../api";
import * as actionTypes from "../actions/actionTypes.js";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: actionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: actionTypes.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const uploadPages = (pages) => async (dispatch) => {
  try {
    const formData = new FormData();
    pages.forEach(page => {
      formData.append("page", page)
    });
    axios({
      method: "POST",
      url: "http://localhost:5000/posts/uploads",
      data: formData,
      header: {
        "Content-Type": "multipart/form-data"
      }
    });
    dispatch({ type: actionTypes.UPLOAD_PAGES, payload: pages });
    
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: actionTypes.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: actionTypes.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
