import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyle from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => {
    // console.log(state.posts);
    return state.posts;
  });

  //   console.log(posts);
  const classes = useStyle();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
