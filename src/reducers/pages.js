import * as actionTypes from "../actions/actionTypes.js";

const pages = (pages = [], action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_PAGES:
      return action.payload;
    default:
      return pages;
  }
};

export default pages;
