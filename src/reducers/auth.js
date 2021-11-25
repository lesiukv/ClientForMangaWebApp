import * as actionTypes from "../actions/actionTypes";
import jwt_decode from "jwt-decode";

const isTokenExpired = (token) => {
  if (token) {
    const { exp } = jwt_decode(token);
    const currentDate = new Date();
    console.log(exp);
    console.log("CurrentDate", currentDate.getTime());
    return exp * 1000 < currentDate.getTime();
  } else return false;
};

const auth = (
  auth = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token"),
    user: localStorage.getItem("creds")
      ? JSON.parse(localStorage.getItem("creds"))
      : null,
    error: null,
    isTokenExpired: isTokenExpired(localStorage.getItem("token")),
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
