import axios from "axios";
const URL = "http://localhost:5000/post";
export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
// export const updatePost = (currentID, post) => axios.patch({ URL } / { $_id });
export const updatePost = (id, updatepost) => axios.patch(`${URL}/${id}`, updatepost);
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);
