import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import MovieInfo from '../MovieInfo/MovieInfo'

const MovieCard = ({movie}) => {

    const classes = useStyles();

    var str = movie.title;
    str = str.replace(/\s+/g, '-').toLowerCase();
  return (
    <>
    <Link to={{
      pathname: `/movie/${str}`,
      state: { movie },
      }}>
     <div className={classes.card} key={movie.id}>
        <img className="card-image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
            />
        <div className="card-content">
          <h3 className="card-title">{movie.title}</h3>
        </div>
      </div>
    </Link>
    </>
  );
};

export default MovieCard;