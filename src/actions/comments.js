import * as api from "../api";
import * as ActionTypes from "./actionTypes";

export const getComments = (postId) => async (dispatch) => {
  try {
    const { data } = await api.getComments(postId);
    dispatch({ type: ActionTypes.FETCH_COMMENTS, payload: data });
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
      dispatch({ type: ActionTypes.UPDATE_COMMENT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
