import axios from "axios";

const url = "http://localhost:5000/posts";

export const getTopic = (topic) => axios.get(`${url}/topics/${topic}`);
export const getPostDetailsTopics = (topic) => axios.patch(`${url}/topics/postDetails`, topic);

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const uploadPages = (pages, setProgress) => {
  axios({
    method: "POST",
    url: `${url}/uploads`,
    data: pages,
    header: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: data => {
      setProgress(Math.round((100 * data.loaded) / data.total))
    },
  });
};
