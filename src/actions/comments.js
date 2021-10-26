import * as api from "../api";
import * as actionTypes from "./actionTypes";

export const getComments = (postId) => async (dispatch) => {
  try {
    const { data } = await api.getComments(postId);
    dispatch({ type: actionTypes.FETCH_COMMENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateComment = 
  (postId, commentId, updatedComment) => async (dispatch) => {
    try {
      const { data } = await api.updateComment(
        postId,
        commentId,
        updatedComment
      );
      dispatch({ type: actionTypes.UPDATE_COMMENT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await api.deleteComment(postId, commentId);
    dispatch({
      type: actionTypes.DELETE_COMMENT,
      payload: commentId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (postId, comment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(postId, comment);
    dispatch({ type: actionTypes.CREATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
