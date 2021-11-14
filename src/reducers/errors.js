import * as actionTypes from "../actions/actionTypes";

const errors = (errors = {
    err: null,
    isLoading: true,
}, action) => {
  switch (action.type) {
    case actionTypes.ERROR_HANDLER:
      return {...errors, err: action.error, isLoading: false}
    default:
      return errors;
  }
};

export default errors;