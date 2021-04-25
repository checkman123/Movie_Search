import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {getUsers, getUser} from '../../actions/userInfo'

import useStyles from './styles';


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
        <div>
          HIIHIHIHIHHI
        </div>
    );
}

export default UserProfile;