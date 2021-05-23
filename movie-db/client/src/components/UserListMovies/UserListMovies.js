import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { TextField, Button, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import MovieCardWithInfo from "../MovieCardWithInfo/MovieCardWithInfo"
import VideoEmbed from "../VideoEmbed/VideoEmbed"
import { getListOfMovies } from '../../actions/listOfMovies';

import useStyles from './styles';

const UserListMovies = (props) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  var userId;

  //Check if user is login by us or Google
  if(user){
    if(user.result._id){
      userId = user.result._id;
    } else { 
      userId = user.result.googleId;
    }
  }  
  
  const listOfMovies = useSelector((state) => state.listOfMovies);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getListOfMovies(props.location.state.list._id));
  }, [dispatch])

  console.log("props.location.state.list");
  console.log(props.location.state.list);
  console.log(listOfMovies);
  //const movies = props.location.state.list;

  return (
    <>
      {listOfMovies.map(movie => (
          <MovieCardWithInfo movie={movie}/>
      ))}
    </>
  );
};

export default UserListMovies;