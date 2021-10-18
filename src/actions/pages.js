import * as actionTypes from "./actionTypes";
import * as api from "../api";

export const uploadPages = (pages, setProgress) => async (dispatch) => {
  try {
    const formData = new FormData();
    pages.forEach((page) => {
      formData.append("page", page, page.dest);
    });
    await api.uploadPages(formData, setProgress);
    dispatch({ type: actionTypes.UPLOAD_PAGES });
  } catch (error) {
    console.log(error);
  }
};
