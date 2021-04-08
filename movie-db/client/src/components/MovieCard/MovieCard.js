import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';

const MovieCard = ({id, poster_path, title, release_date, vote_average, overview}) => {

    const classes = useStyles();

    console.log(poster_path);
  return (
    <>
     <div className={classes.card} key={id}>
        <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
            alt={title + ' poster'}
            />
        <div className="card--content">
        <h3 className="card--title">{title}</h3>
        <p><small>RELEASE DATE: {release_date}</small></p>
        <p><small>RATING: {vote_average}</small></p>
        <p className="card--desc">{overview}</p>
        </div>
    </div>
    
    </>
  );
};

export default MovieCard;