import React, {Component, useEffect} from 'react';
import { Grid, Typography, Button, TextField, InputAdornment } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
import { AccountCircle, Email, Lock } from '@material-ui/icons';

import {getUsers, getUser} from '../../actions/userInfo'
import './ProfileEditor.css'

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
            <Grid container align = "left" allignItems="center">
                <Grid item xs = {2} spacing = {3}>
                    <Typography variant="h5">
                      Name:
                    </Typography>
                </Grid>
                <Grid item xs = {7} spacing = {3}>
                  <TextField
                    label="First Name"
                    style = {{width: '700px'}} 
                    InputProps={{
                      startAdornment:(
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                        
                      ), style: {color:'darkgray'}
                    }}
                    InputLabelProps={{style: { color: '#BFC4C9' }}}          
                  /> 
                </Grid>
                <Grid item xs = {3} spacing = {3}>
                  <TextField
                    label="Last Name" 
                    fullWidth
                    InputProps={{
                      startAdornment:(
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ), style: {color:'darkgray'}
                    }}
                    InputLabelProps={{style: { color: '#BFC4C9' }, width: 50}}          
                  />
                </Grid>
                <Grid item xs = {2} spacing = {3}>
                    <Typography variant="h5">
                      Password:
                    </Typography>
                </Grid>
                <Grid item xs = {10}>
                  <TextField
                    label="Password"
                    fullWidth 
                    InputProps={{
                      startAdornment:(
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ), style: {color:'darkgray'}
                    }}
                    InputLabelProps={{style: { color: '#BFC4C9' }, width: 50}}          
                  />
                </Grid>
                <Grid item xs = {2} spacing = {3}>
                    <Typography variant="h5">
                      Email:
                    </Typography>
                </Grid>
                <Grid item xs = {10} spacing = {3}>
                  <TextField
                    label="Email"
                     fullWidth
                    InputProps={{
                      startAdornment:(
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ), style: {color:'darkgray'}
                    }}
                    InputLabelProps={{style: { color: '#BFC4C9' }, width: 50}}          
                  />
                </Grid>
                <Grid item xs ={6} spacing = {3}>
                  <Button variant="contained" color="primary">Submit</Button>
                </Grid>
                <Grid item xs ={6} spacing = {3}>
                  <Button variant="contained">Cancel</Button>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default ProfileEditor;