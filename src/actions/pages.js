import * as api from "../api";

export const uploadPage = async (page, onUploadProgress) => {
  try {
    const formData = new FormData();
    formData.append("page", page, page.dest);
    return api.uploadPage(formData, onUploadProgress);
  } catch (error) {
    console.log(error);
  }
};
