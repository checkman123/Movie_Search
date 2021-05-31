import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Container, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

import {getUsers, getUser} from '../../actions/userInfo'

import useStyles from './styles';
import './UserProfile.css'
import defaultAvatar from '../../Images/default-avatar.jpg'


const UserProfile = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const userInfo = useSelector((state) => state.userInfo);
    const classes = useStyles();

    var userId;

    //Check if user is login by us or Google
    if(user){
      if(user.result._id){
        userId = user.result._id;
      } else { 
        userId = user.result.googleId;
      }
    }

    const dispatch = useDispatch();
  

    useEffect(() =>{
      dispatch(getUsers());
      dispatch(getUser(userId));
    }, [dispatch])

    // Use this path for picking one user instead of all user
    // http://localhost:3000/user-info/608354c1349f10485441a92a
    console.log(userInfo);
    return (
        <Container disableGutters={true} maxWidth="inherit">
          <div className="mainContainer">
            <div>
              <img className="user-image"
                style={{width:"160px",height:"160px",boderRadius:"80px"}}
                src={userInfo.profile_img ? userInfo.profile_img : defaultAvatar}/>
            </div>
            <div style={{padding:"10px"}}>
              <Typography variant="h2">
                {userInfo.name}
              </Typography>
              <Link to='/profile-editor'>
                <Button color="primary">Edit Profile</Button>
              </Link>
              <div className="userInfo">
                <Grid container spacing ={2} align = "center">
                  <Grid item sm = {6}>
                    <Typography variant="h4">
                      Joined
                    </Typography>
                  </Grid>
                  <Grid item sm = {6}>
                    <Typography variant="h4">
                      List Created
                    </Typography>
                  </Grid>
                  <Grid item sm = {6}>
                    <Typography variant="h5">
                      {moment(userInfo.createdAt).format('MMMM Do YYYY').toString()}
                    </Typography>
                  </Grid>
                  <Grid item sm = {6}>
                    <Typography variant="h5">
                      *list created number
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div>
            <div style={{color:"darkgrey"}}>
              <ul>
                <li>Email address: {userInfo.email}</li>
              </ul>
            </div>
          </div>
        </Container>
    );
}

export default UserProfile;