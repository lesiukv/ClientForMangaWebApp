import * as actionTypes from "../actions/actionTypes";

const topic = (
  topic = {
    topicArr: [],
    isLoading: true,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_TOPIC:
      return { ...topic, topicArr: action.payload, isLoading: false };
    case actionTypes.GET_TOPIC_LOADING:
      return { ...topic, isLoading: true };
    case actionTypes.GET_TOPIC_FAILED:
      return { ...topic, error: action.error, isLoading: false };
    default:
      return topic;
  }
};

export default topic;
