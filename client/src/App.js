// App.js
import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, AppBar, Typography } from '@mui/material';
import logo from './images/logo.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { appStyles } from './styles.js'; 
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js';


const App = () => {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [ dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" style={appStyles.appBar}>
        <Typography style={appStyles.heading} variant="h2" align="center">LifeLogs</Typography>
        <img src={logo} alt="icon" height="60" style={appStyles.image} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />

            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
