import axios from 'axios';

const url = 'http://localhost:5000/posts';
 
export const fetchPosts = () => axios.get(url);
export const fetchPostDetails = (id) => axios.get(`${url}/${id}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
