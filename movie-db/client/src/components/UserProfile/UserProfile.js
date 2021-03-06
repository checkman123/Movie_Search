import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Container, Button } from '@material-ui/core';
import {
  withStyles,
} from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { getUser } from '../../actions/userInfo'
import {getMovieLists} from '../../actions/movieLists'

import useStyles from './styles';
import './UserProfile.css'
import defaultAvatar from '../../Images/default-avatar.jpg'


const UserProfile = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const userInfo = useSelector((state) => state.userInfo);
    const movieLists = useSelector((state) => state.movieLists);
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
  

    useEffect(() => {
      dispatch(getUser(userId));
      dispatch(getMovieLists(userId));
    }, [dispatch])

    const CssTextField = withStyles({
      root: {
        '& label.Mui-root': {
          color: '#ef981c',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#ef981c',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: '#ef981c',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#ef981c',
          },
        },
      },
    })(TextField);

    console.log(userInfo);
    return (
        <Container disableGutters={true} maxWidth="inherit">
          <div className="mainContainer">
            <div>
              <img className="user-image"
                style={{width:"160px",height:"160px",boderRadius:"80px"}}
                src={userInfo.profile_img ? userInfo.profile_img : defaultAvatar} alt={"userImg"}/>
            </div>
            <div style={{padding:"10px"}}>
              <Typography variant="h2">
                {userInfo.name}
              </Typography>
              <Link className="edit" to={{
                pathname: '/profile-editor',
                state: { userInfo },
                }}>
                <Button variant="contained"color="primary">Edit Profile</Button>
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
                      {movieLists.length}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>

          <div>
            <CssTextField name="message" className="label" variant="outlined" label="Status" value={userInfo.status} fullWidth/>
          </div>
        </Container>
    );
}

export default UserProfile;