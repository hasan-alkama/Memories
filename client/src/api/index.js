import axios from "axios";
const URL = "http://localhost:5000/post";
export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
