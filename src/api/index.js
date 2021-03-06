import axios from "axios";

const url = "http://localhost:5000";

const topics = "topics";
const posts = "posts";
const comments = "comments";
const uploads = "uploads";
const users = "users";
const favorite = "favorite";

axios.interceptors.request.use((config) => {
  const token = "Bearer " + localStorage.getItem("token");
  config.headers.Authorization = token;
  return config;
});

export const getTopic = (topic) => axios.get(`${url}/${topics}/${topic}`);

export const fetchPosts = () => axios.get(`${url}/${posts}/`);
export const getPostDetails = (postId) =>
  axios.get(`${url}/${posts}/${postId}`);
export const createPost = (newPost) => axios.post(`${url}/${posts}/`, newPost);
export const updatePost = (postId, post) =>
  axios.patch(`${url}/${posts}/${postId}`, post);
export const deletePost = (postId) => axios.delete(`${url}/${posts}/${postId}`);

export const getComments = (postId) =>
  axios.get(`${url}/${comments}/${postId}`);
export const createComment = (postId, comment) =>
  axios.post(`${url}/${comments}/${postId}`, comment);
export const deleteComment = (commentId) =>
  axios.delete(`${url}/${comments}/${commentId}`);
export const updateComment = (commentId, updatedComment) =>
  axios.patch(`${url}/${comments}/${commentId}`, updatedComment);

export const getPages = (postId) => axios.get(`${url}/${uploads}/${postId}`);
export const uploadPage = (pages, onUploadProgress) => {
  axios({
    method: "POST",
    url: `${url}/${uploads}`,
    data: pages,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export const loginUser = (creds) => axios.post(`${url}/${users}/login`, creds);
export const registerUser = (creds) =>
  axios.post(`${url}/${users}/signup`, creds);

export const getProfileData = (profileId) =>
  axios.get(`${url}/${users}/${profileId}`);

export const getFavorites = () => axios.get(`${url}/${favorite}/`);
export const addFavorite = (postId) =>
  axios.post(`${url}/${favorite}/${postId}`);
export const removeFavorite = (postId) =>
  axios.delete(`${url}/${favorite}/${postId}`);
