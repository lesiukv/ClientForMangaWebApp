import * as api from "../api";
import * as actionTypes from "../actions/actionTypes";

export const getTopics = (topic) => async (dispatch) => {
  try {
    const { data } = await api.getTopics(topic);
    dispatch({ type: actionTypes.GET_TOPICS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getTopicsNumber = (topic) => async (dispatch) => {
  try {
    const { data } = await api.getTopicsNumber(topic);
    dispatch({ type: actionTypes.GET_TOPICS_NUMBER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
