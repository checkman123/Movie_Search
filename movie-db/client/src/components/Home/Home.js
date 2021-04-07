import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import useStyles from './styles';

const Home = () => {

    const classes = useStyles();

  return (
    
        <AppBar className = {classes.appBar} position="static" color="inherit">
        <Typography className = {classes.heading} variant="h2" align="center">
            Home Page
        </Typography>
        </AppBar>
  );
};

export default Home;