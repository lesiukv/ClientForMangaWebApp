import * as actionTypes from "../actions/actionTypes";

const topic = (topic = [], action) => {
  switch (action.type) {
    case actionTypes.GET_TOPIC:
      return action.payload;
    default:
      return topic;
  }
};

export default topic;
