import * as api from "../api";
import * as actionTypes from "../actions/actionTypes";

export const getTopic = (topic) => async (dispatch) => {
  try {
    const { data } = await api.getTopic(topic);
    dispatch({ type: actionTypes.GET_TOPIC, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostDetailsTopics = (topic) => async (dispatch) => {
  try {
    const { data } = await api.getPostDetailsTopics(topic);
    dispatch({ type: actionTypes.GET_POST_DETAILS_TOPIC, payload: data });
  } catch (error) {
    console.log(error);
  }
};
