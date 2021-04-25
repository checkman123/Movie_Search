import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { TextField, Button, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import MovieCard from "../MovieCard/MovieCard"
import VideoEmbed from "../VideoEmbed/VideoEmbed"
import { createMovie } from '../../actions/movies';

import useStyles from './styles';

const UserMovies = (props) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const classes = useStyles();
    const dispatch = useDispatch();

    console.log(props.location.state.list);
    const movies = props.location.state.list;

  return (
    <>

        <div className="card-list">

        </div> 
        <Typography className={classes.heading}variant="h5">Similar Movies</Typography>
        <div className="card-list">

        </div> 
    </>
  );
};

export default UserMovies;