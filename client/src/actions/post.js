import * as api from "../api";


// Action Creators are function which returns action, action is an object which has type and payload

export const getPost = () => async(dispatch)=>{


    try {
        const {data} = await api.fetchPosts();
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message);
    }
   

}