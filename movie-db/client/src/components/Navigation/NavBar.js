  
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import decode from 'jwt-decode';
import memories from '../../Images/movies.jpg';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const ExampleNav = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const getUser = JSON.parse(localStorage.getItem('profile'));
    var userId;

    const logout = () => {
      dispatch({ type: "LOGOUT" })

      history.push('/');

      setUser(null);
    }

    //[location] = when location changes -> update
    useEffect(() => {
      const token = user?.token;

      //check JWT, if it expired then log out
      if(token) {
        const decodedToken = decode(token);

        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      

      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    //Check if user is login by us or Google
    if(getUser){
      if(getUser.result._id){
        userId = getUser.result._id;
      } else { 
        userId = getUser.result.googleId;
      }
    }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        <Typography component={Link} to="/" className={classes.heading} variant="h5" align="center">Movie Stack</Typography>
        <Typography component={Link} to="/example" className={classes.heading} variant="h5" align="center">Example</Typography>
        <Typography component={Link} to="/about" className={classes.heading} variant="h5" align="center">About</Typography>
        <Typography component={Link} to={`/movie-lists/${userId}`} className={classes.heading} variant="h5" align="center">My List</Typography>
        <Typography component={Link} to="/user-info" className={classes.heading} variant="h5" align="center">My Users</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ExampleNav;