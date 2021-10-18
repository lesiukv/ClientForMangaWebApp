import * as ActionTypes from "../actions/actionTypes";

const topic = (topic = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_TOPICS:
      return action.payload;
    case ActionTypes.GET_TOPICS_NUMBER:
      return action.payload;
    default:
      return topic;
  }
};

export default topic;
