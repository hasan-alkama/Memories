import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyle from "./styles"; // style.css implemented for every post

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => {
    // console.log(state.posts);
    return state.posts; // return the whole post taken from database currently is in reducer(store)
  });

  //   console.log(posts);
  const classes = useStyle(); // importing styles as a classes so that we can use classes.

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3} >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
