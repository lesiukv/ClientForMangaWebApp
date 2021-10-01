import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const getPage = (dest) => axios.get(`${url}/uploads/${dest}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const uploadPages = (pages) => {
  axios({
    method: "POST",
    url: url + "/uploads",
    data: pages,
    header: {
      "Content-Type": "multipart/form-data",
    },
  });
};
