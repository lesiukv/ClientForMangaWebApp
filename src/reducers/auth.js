import * as actionTypes from "../actions/actionTypes";

const auth = (
  auth = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"),
    user: localStorage.getItem("creds")
      ? JSON.parse(localStorage.getItem("creds"))
      : null,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...auth,
        isAuthenticated: true,
        token: action.token,
        user: action.user,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...auth,
        isAuthenticated: false,
        token: "",
        user: null,
      };
    case actionTypes.REGISTRATION_SUCCESS:
      return { ...auth, isAuthenticated: false };
    case actionTypes.AUTH_FAILURE:
      return { ...auth, isAuthenticated: false, error: action.error };
    default:
      return auth;
  }
};

export default auth;
