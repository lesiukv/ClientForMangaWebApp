import * as actionTypes from "./actionTypes";

export const handleError = (error) => {
  return { type: actionTypes.ERROR_HANDLER, error: error };
};

export const removeError = () => (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ERROR })
}