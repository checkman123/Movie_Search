import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Movie from './Movie/Movie';
import useStyles from './styles';


const Movies = ({ setCurrentId }) => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();

    //console.log(posts);
    return (
        // If there is no post then it will show a circle loading animation
        !movies.length ? <CircularProgress /> : (
            <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
                {
                    movies.map((movie) => (
                        <Grid key={movies._id} item xs={12} sm={6}>
                            <Movie movie={movie} setCurrentId={setCurrentId}/>
                        </Grid> 
                    ))
                }
            </Grid>
        )
    );
}

export default Movies;