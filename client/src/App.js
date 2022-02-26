import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import memories from "./images/memories.png";
import Posts from "./component/Posts/Posts";
import Form from "./component/Form/form";
import useStyle from "./style";
import { useDispatch } from "react-redux";
import { getPost } from "./actions/post";

const App = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [CurrentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getPost());
  }, [CurrentId,dispatch]);
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="Memories"
          height="60"
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form CurrentId={CurrentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
