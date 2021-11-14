import * as actionTypes from "../actions/actionTypes";

const errors = (errors = null, action) => {
  switch (action.type) {
    case actionTypes.ERROR_HANDLER:
      return action.error;
    case actionTypes.CLEAR_ERROR:
      return null;
    default:
      return errors;
  }
};

export default errors;