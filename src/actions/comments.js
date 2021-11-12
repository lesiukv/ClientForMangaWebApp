import * as api from "../api";
import * as actionTypes from "./actionTypes";

const commentsLoading = () => {
  return { type: actionTypes.COMMENTS_LOADING, isLoading: true };
};

const commmentsError = (error) => {
  return {
    type: actionTypes.COMMENTS_ERROR,
    isLoading: false,
    error: error,
  };
};

export const getComments = (postId) => async (dispatch) => {
  dispatch(commentsLoading());
  try {
    const { data } = await api.getComments(postId);
    dispatch({
      type: actionTypes.FETCH_COMMENTS,
      payload: data,
      isLoading: false,
    });
  } catch (error) {
    dispatch(commmentsError(error))
  }
};

export const updateComment =
  (commentId, updatedComment) => async (dispatch) => {
    dispatch(commentsLoading());
    try {
      const { data } = await api.updateComment(commentId, updatedComment);
      dispatch({
        type: actionTypes.UPDATE_COMMENT,
        payload: data,
        isLoading: false,
      });
    } catch (error) {
      dispatch(commmentsError(error));
    }
  };

export const deleteComment = (commentId) => async (dispatch) => {
  dispatch(commentsLoading());
  try {
    await api.deleteComment(commentId);
    dispatch({
      type: actionTypes.DELETE_COMMENT,
      payload: commentId,
      isLoading: false,
    });
  } catch (error) {
    dispatch(commmentsError(error));
  }
};

export const createComment = (postId, comment) => async (dispatch) => {
  dispatch(commentsLoading());
  try {
    const { data } = await api.createComment(postId, comment);
    dispatch({
      type: actionTypes.CREATE_COMMENT,
      payload: data,
      isLoading: false,
    });
  } catch (error) {
    dispatch(commmentsError(error));
  }
};
