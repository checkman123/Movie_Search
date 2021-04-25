import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import {getMovieLists} from '../../actions/movieLists'
import MovieLists from '../MovieLists/MovieLists'
import MovieListForm from '../MovieListForm/MovieListForm'
import useStyles from './styles';

export const ListBoard = () => {
  const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

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
  
    useEffect(() =>{
      dispatch(getMovieLists(userId));
    }, [currentId, dispatch])
    return (
      <Grow in>
      <Container>
        <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
              <MovieLists/>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MovieListForm currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
    )
}
