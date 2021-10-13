import * as ActionTypes from "../actions/actionTypes";

const topics = (topics = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_TOPICS:
      return action.payload;
    default:
      return topics;
  }
};

export default topics;
