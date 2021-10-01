import * as actionTypes from "./actionTypes";
import * as api from "../api";

export const uploadPages = (pages) => async (dispatch) => {
  try {
    const formData = new FormData();
    pages.forEach((page) => {
      formData.append("page", page, page.dest);
    });
    const { data } = await api.uploadPages(formData);
    dispatch({ type: actionTypes.UPLOAD_PAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPage = (dest) => async (dispatch) => {
  try {
    const { data } = await api.getPage(dest);
    dispatch({ type: actionTypes.GET_PAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
