import * as ActionTypes from "../actions/actionTypes.js";

const pages = (pages = [], action) => {
  switch (action.type) {
    case ActionTypes.UPLOAD_PAGES:
      return [...pages];
    default:
      return pages;
  }
};

export default pages;
