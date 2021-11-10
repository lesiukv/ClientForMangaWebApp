import * as actionTypes from "./actionTypes";
import * as api from "../api";

export const loginUser = (creds) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(creds);
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "creds",
        JSON.stringify({ username: data.username, userId: data.userId })
      );
    }
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      token: data.token,
      username: data.username,
      userId: data.userId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("creds");
    dispatch({ type: actionTypes.LOGOUT_SUCCESS });
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (creds) => async (dispatch) => {
  try {
    await api.registerUser(creds);
    dispatch({ type: actionTypes.REGISTRATION_SUCCESS });
  } catch (error) {
    console.log(error);
  }
};
