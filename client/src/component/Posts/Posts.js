import React from "react";
import {useSelector} from "react-redux";
import Post from "./Post/Post";
import useStyle from "./styles";


const Posts =() => {
    const posts= useSelector((state) =>{
        // console.log(state);
        // console.log(state.posts);
        return state.posts;
    })

    // console.log(posts);
    const classes =useStyle();
    return (
        <>
        <h1>Posts</h1>
        <Post/>
        <Post/>
        </>
        
    );
}
export default Posts;