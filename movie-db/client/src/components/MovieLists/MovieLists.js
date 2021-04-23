import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';

import MovieList from './MovieList/MovieList';

const MovieLists = ({ setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const movieLists = useSelector((state) => state.movieLists);
    const classes = useStyles();

    //console.log(posts);
    return (
        // If there is no post then it will show a circle loading animation
        !movieLists.length ? <CircularProgress /> : (
            <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
                {
                    movieLists.filter(movieList => movieList.user_list_id === user.result.name).map((movieList) => (
                       
                        <Grid key={movieList._id} item xs={12} sm={6}>
                            <MovieList list={movieList} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default MovieLists;