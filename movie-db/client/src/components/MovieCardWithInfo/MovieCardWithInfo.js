import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid, Paper, Button } from "@material-ui/core";
import Dotdotdot from 'react-dotdotdot'
import {useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

import noImageAvailable from '../../Images/noimageavailable.png'

import useStyles from './styles';
import './styles.scss';

import DeleteIcon from '@material-ui/icons/Delete';

const MovieCardWithInfo = ({movie, id}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    var userId;
    const movieLists = useSelector((state) => state.movieLists);
    //Check if user is login by us or Google
    if(user){
      if(user.result._id){
        userId = user.result._id;
      } else { 
        userId = user.result.googleId;
      }
    }
    const classes = useStyles();
    const dispatch = useDispatch();

    var str = 1;

    const imageLink = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"

    var isMovieList = window.location.pathname.includes('/movie-list');

    //convert ISO date to long date
    var date = new Date(movie.release_date).toUTCString().replace('00:00:00 GMT', '');

  return (
    <>
    <div className={classes.card}>    


      
      <Grid container>
        <Grid item xs={2} className={classes.image}>
          <Link className="link" to={{
            pathname: (id) ? `/movie/${id}`:`/movie/${movie.movie_id}`,
            state: { movie },
          }}>
          <div className={classes.cardInner} key={1}>
            <div className="card-img2">
              <img  src={ movie.poster_path ? `${imageLink}${movie.poster_path}` : noImageAvailable} alt={movie.title + ' poster'}/>
            </div>
          </div>
        </Link>
        </Grid>


        <Grid item xs={10}component={Paper} className={classes.info}>

          <div className="info-container">
            <Grid container>
              <Grid item xs={11}>
                <Link className="link" to={{
                  pathname: (id) ? `/movie/${id}`:`/movie/${movie.movie_id}`,
                  state: { movie },
                }}>
                  <h1 className="movieTitle">
                    {movie.title}
                  </h1>
                </Link>
              </Grid>
              <Grid item xs={1}>
                {
                  (isMovieList && (userId)) ?
                  //Check for name so only user who created it can delete it and if it is from movielist
                  //onClick={() => dispatch(deleteMovieList(list._id))}
                    <Button size="small" color="secondary" className={classes.deleteButton}>
                      <DeleteIcon fontSize="small" />
                    </Button>
                  : ""
                }
              </Grid>
            </Grid>
            <Typography variant="h5">
              {date}
            </Typography>

            <Dotdotdot clamp={4}>
              <p className="overview"> 
                {movie.overview}
              </p>
            </Dotdotdot>

          </div>

         
        </Grid>


      </Grid>
    </div>

    </>
  );
};

export default MovieCardWithInfo;