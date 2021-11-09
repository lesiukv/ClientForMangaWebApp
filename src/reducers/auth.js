import * as actionTypes from "../actions/actionTypes";

const auth = (
  auth = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"),
    user: localStorage.getItem("creds")
      ? JSON.parse(localStorage.getItem("creds"))
      : null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...auth,
        isAuthenticated: false,
        user: action.creds,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...auth,
        isAuthenticated: true,
        errMess: "",
        token: action.payload,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...auth,
        isAuthenticated: false,
        errMess: action.message,
      };
    case actionTypes.LOGOUT_REQUEST:
      return { ...auth, isAuthenticated: true };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...auth,
        isAuthenticated: false,
        token: "",
        user: null,
      };
    case actionTypes.REGISTRATION_SUCCESS: return { ...auth, isAuthenticated: false}
    default:
      return auth;
  }
};

export default auth;
