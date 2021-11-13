import * as actionTypes from "./actionTypes";
import * as api from "../api";

const authFailure = (error) => {
  return {
    type: actionTypes.AUTH_FAILURE,
    error: error,
  };
};

export const loginUser = (creds) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(creds);
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "creds",
        JSON.stringify({ username: data.username, userId: data.userId, admin: data.admin })
      );
    }
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      token: data.token,
      user: { username: data.username, userId: data.userId}
    });
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("creds");
    dispatch({ type: actionTypes.LOGOUT_SUCCESS });
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const registerUser = (creds) => async (dispatch) => {
  try {
    await api.registerUser(creds);
    dispatch({ type: actionTypes.REGISTRATION_SUCCESS });
  } catch (error) {
    dispatch(authFailure(error));
  }
};
