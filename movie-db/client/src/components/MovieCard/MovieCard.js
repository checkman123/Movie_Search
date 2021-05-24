import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import noImageAvailable from '../../Images/noimageavailable.png'

import useStyles from './styles';
import './styles.scss';

const MovieCard = ({movie}) => {

    const classes = useStyles();

    //console.log(movie);

    const imageLink = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"


  return (
    <>
    <div className={classes.card}>    

      <Link to={{
      pathname: `/movie/${movie.id}`,
      state: { movie },
      }}>

      <div className={classes.cardInner} key={movie.id}>
        <div className="card-img">
          <img  src={ movie.poster_path ? `${imageLink}${movie.poster_path}` : noImageAvailable}
                alt={movie.title + ' poster'}/>
        </div>
        </div>
      </Link>


    </div>

    </>
  );
};

export default MovieCard;