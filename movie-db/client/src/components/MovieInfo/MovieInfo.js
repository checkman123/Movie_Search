import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';

const MovieInfo = (props) => {

    const classes = useStyles();

    console.log(props.location.state.movie);

    const movie = props.location.state.movie;
  return (
    <>
    <div className={classes.card} key={movie.id}>
        <img className="card-image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
            />
        <div className="card-content">
            <h3 className="card-title">{movie.title}</h3>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p>
            <p className="card-desc">{movie.overview}</p>
        </div>
    </div>
    </>
  );
};

export default MovieInfo;