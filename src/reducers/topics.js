import * as ActionTypes from "../actions/actionTypes";

const topic = (topic = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_TOPIC:
      return action.payload;
    case ActionTypes.GET_POST_DETAILS_TOPIC:
      return action.payload;
    default:
      return topic;
  }
};

export default topic;
