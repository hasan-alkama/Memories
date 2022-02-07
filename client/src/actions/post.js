import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";
import * as api from "../api/index";

// Action Creators are function which returns action, action is an object which has type and payload

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    // console.log(post);
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
    console.log("this is problem");
  }
};
