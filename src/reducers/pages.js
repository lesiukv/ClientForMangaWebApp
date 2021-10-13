import * as actionTypes from "../actions/actionTypes.js";

const pages = (pages = [], action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_PAGES:
      return [...pages];
    default:
      return pages;
  }
};

export default pages;
