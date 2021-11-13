import * as api from "../api";
import * as actionTypes from "../actions/actionTypes";

const topicError = (error) => {
  return { type: actionTypes.GET_TOPIC_FAILED, error: error };
};

const topicLoading = () => {
  return { type: actionTypes.GET_TOPIC_LOADING };
};

export const getTopic = (topic) => async (dispatch) => {
  dispatch(topicLoading());
  try {
    const { data } = await api.getTopic(topic);
    dispatch({ type: actionTypes.GET_TOPIC, payload: data });
  } catch (error) {
    dispatch(topicError(error));
  }
};
