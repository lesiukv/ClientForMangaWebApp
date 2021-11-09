import axios from "axios";

const url = "http://localhost:5000";

export const getTopic = (topic) => axios.get(`${url}/topics/${topic}`);

export const fetchPosts = () => axios.get(`${url}/posts/`);
export const getPostDetails = (postId) => axios.get(`${url}/posts/${postId}`);
export const createPost = (newPost) => axios.post(`${url}/posts/`, newPost);
export const updatePost = (postId, post) =>
  axios.patch(`${url}posts/${postId}`, post);
export const deletePost = (postId) => axios.delete(`${url}/posts/${postId}`);

export const getComments = (postId) => axios.get(`${url}/comments/${postId}`);
export const createComment = (postId, comment) =>
  axios.post(`${url}/comments/${postId}`, comment);
export const deleteComment = (postId, commentId) =>
  axios.delete(`${url}/comments/${postId}/${commentId}`);
export const updateComment = (postId, commentId, updatedComment) =>
  axios.patch(`${url}/comments/${postId}/${commentId}`, updatedComment);

export const getPages = (postId) => axios.get(`${url}/uploads/${postId}`)
export const uploadPage = (pages, onUploadProgress) => {
  axios({
    method: "POST",
    url: `${url}/uploads`,
    data: pages,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress, 
  });
};

export const loginUser = (creds) => axios.post(`${url}/users/login`, creds);
export const registerUser = (creds) => axios.post(`${url}/users/signup`, creds);

