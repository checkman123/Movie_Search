import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import useStyles from './styles';
import './styles.scss';

const MovieCard = ({movie}) => {

    const classes = useStyles();

    //console.log(movie);

  return (
    <>
    <div className={classes.card}>    

      <Link to={{
      pathname: `/movie/${movie.id}`,
      state: { movie },
      }}>

      <div className={classes.cardInner} key={movie.id}>
        <div className="card-img">
          <img  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}/>
        </div>
        </div>
      </Link>


    </div>

    </>
  );
};

export default MovieCard;