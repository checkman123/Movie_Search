import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment'

import {getUsers, getUser} from '../../actions/userInfo'

import useStyles from './styles';
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
        // If there is no post then it will show a circle loading animation
        <Container disableGutters={true} maxWidth="inherit">
          <div style={{display: "flex",justifyContent:"space-evenly",margin:"18px 0px",borderBottom:"2px solid"}}>
            <div>
              <img className="user-image"
                style={{width:"160px",height:"160px",boderRadius:"80px"}}
                src={defaultAvatar}/>
              </div>
            <div style={{color:"darkgrey"}}>
              <Typography variant="h2">
                {userInfo.name}
              </Typography>
              <div style={{display: "flex",justifyContent:"space-between",width:"auto", margin: "0px 16px"}}>
                <Grid container spacing ={2}>
                  <Grid item sm = {3}>
                    <Typography variant="h4">
                      Joined
                    </Typography>
                  </Grid>
                  <Grid item sm = {3}>
                    <Typography variant="h4">
                      List Created
                    </Typography>
                  </Grid>
                  <Grid item sm = {3}>
                    <Typography variant="h4">
                      Likes
                    </Typography>
                  </Grid>
                  <Grid item sm = {3}>
                    <Typography variant="h4">
                      Reviews
                    </Typography>
                  </Grid>
                  <Grid item sm = {3}>
                    <Typography variant="h5">
                      {moment(userInfo.createdAt).format('MMMM Do YYYY').toString()}
                    </Typography>
                  </Grid>
                  <Grid item sm = {3}>
                    <Typography variant="h5">
                      *list created number
                    </Typography>
                  </Grid>
                  <Grid item sm = {3}>
                    <Typography variant="h5">
                      *like numbers
                    </Typography>
                  </Grid>
                  <Grid item sm = {3}>
                    <Typography variant="h5">
                      *review numbers
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