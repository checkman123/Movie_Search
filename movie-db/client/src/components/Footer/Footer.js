import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <div height="100px" className={classes.background}>
      <Grid>
        <Grid item xs = {3}>
          <Typography component={Link} to="/about" className={classes.heading} variant="h5">About Us</Typography>
        </Grid>
        <Grid item xs = {3}>
          <Typography component={Link} to="/privacy" className={classes.heading} variant="h5">Privacy Policy</Typography>
        </Grid>
        <Grid item xs = {3}>
          <Typography component={Link} to="/terms" className={classes.heading} variant="h5">Terms of Service</Typography>
        </Grid>
      </Grid> 
    </div>
  );
};

export default Footer;
