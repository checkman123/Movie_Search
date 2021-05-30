import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { TextField, Button, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import MovieCardWithInfo from "../MovieCardWithInfo/MovieCardWithInfo"
import VideoEmbed from "../VideoEmbed/VideoEmbed"
import { getListOfMovies } from '../../actions/listOfMovies';
import { getMovieList } from '../../actions/movieLists'

import useStyles from './styles';

const UserListMovies = (props) => {
  const [share, setShare] = useState(false);
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
  const movieList = useSelector((state) => state.movieList);

  const classes = useStyles();
  const dispatch = useDispatch();

  const listID = window.location.pathname.replace('/movie-list/','');
  var list;

  useEffect(() =>{
    dispatch(getListOfMovies(listID));
    dispatch(getMovieList(listID));
  }, [dispatch])


  console.log("listID");
  console.log(listID);
  console.log(listOfMovies);
  console.log(movieList);
  //const movies = props.location.state.list;

  //Copy Current Url
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setShare(true);
  }

  return (
    <>
      <Typography className={classes.title} variant="h4">List: {movieList.title}</Typography>
      <p className={classes.description}>{movieList.description !== "" ? "Description: " + movieList.description : ""}</p>
      <Button className={classes.addBtn} variant="contained" color="primary" size="large" type="submit" onClick={copy} fullWidth>
        {!share ? "Share link" : "Copied!"}
      </Button>
      <br/>
      <br/>
      {listOfMovies.map(movie => (
          <MovieCardWithInfo movie={movie}/>
      ))}
    </>
  );
};

export default UserListMovies;