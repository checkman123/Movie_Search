import React, {Component, useEffect} from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';

import {getUsers, getUser} from '../../actions/userInfo'

const ProfileEditor = () => {
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

    console.log(userInfo);
    return (
        <div>
            <Grid container align = "center">
                <Grid item sm = {4}>
                    <Typography variant="h5">
                      Name:
                    </Typography>
                </Grid>
                <Grid item sm = {4}>
                    <input placeholder='First Name'></input>
                </Grid>
                <Grid item sm = {4}>
                    <input placeholder='Last Name'></input>
                </Grid>
                <Grid item sm = {4}>
                    <Typography variant="h5">
                      Email:
                    </Typography>
                </Grid>
                <Grid item sm = {4}>
                    <input placeholder='Email'></input>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default ProfileEditor;