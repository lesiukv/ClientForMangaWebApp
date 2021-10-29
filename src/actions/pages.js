import * as actionTypes from "./actionTypes";
import * as api from "../api";

export const uploadPage = (page, onUploadProgress) => {
  try {
    const formData = new FormData();
    formData.append("page", page, page.dest);

    console.log(formData);

    return api.http.post("/uploads", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    })
  } catch (error) {
    console.log(error);
  }
};

export const getPages = (postId) => {
  try {
    return api.getPages(postId);
  } catch (error) {
    console.log(error);
  }
};
