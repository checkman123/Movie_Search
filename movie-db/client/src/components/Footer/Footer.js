import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

import useStyles from './styles';

import defaultAvatar from '../../Images/default-avatar.jpg'

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.footer}>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <img className="user-image"
                      style={{width:"160px",height:"160px",boderRadius:"80px"}}
                      src={defaultAvatar} alt={"userImg"}/>
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Sign Up</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs = {6}>
          <Grid container> 
            <Grid item xs = {4}>
              <Typography component={Link} to="/about" className={classes.heading} variant="h5">About Us</Typography>
            </Grid>
            <Grid item xs = {4}>
              <Typography component={Link} to="/privacy" className={classes.heading} variant="h5">Privacy Policy</Typography>
            </Grid>
            <Grid item xs = {4}>
              <Typography component={Link} to="/terms" className={classes.heading} variant="h5">Terms of Service</Typography>
            </Grid>
          </Grid> 
        </Grid>

      </Grid> 
    </div>
  );
};

export default Footer;
