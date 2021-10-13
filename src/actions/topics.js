import * as api from "../api";
import * as actionTypes from "../actions/actionTypes";

export const getTopics = () => async (dispatch) => {
    try {
      const { data } = await api.getTopics();
      dispatch({ type: actionTypes.GET_TOPICS, payload: data });
    } catch (error) {
      console.log(error)
    }
  }