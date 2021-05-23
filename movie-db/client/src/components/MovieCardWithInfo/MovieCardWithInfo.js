import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField } from "@material-ui/core";
import Dotdotdot from 'react-dotdotdot'

import useStyles from './styles';
import './styles.scss';

const MovieCardWithInfo = ({movie}) => {

    const classes = useStyles();

    var str = 1;

    //console.log(movie);

    //convert ISO date to long date
    var date = new Date(movie.release_date).toUTCString().replace('00:00:00 GMT', '');

  return (
    <>
    <div className={classes.card}>    

      <Link to={{
      pathname: `/movie/${movie.movie_id}`,
      state: { movie },
      }}>
      
      <Grid container>
        <Grid item xs={2} className={classes.image}>
          
        <div className={classes.cardInner} key={1}>
          <div className="card-img">
            <img  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + ' poster'}/>
          </div>
        </div>
        </Grid>


        <Grid item xs={10}component={Paper} className={classes.info}>

          <div className="info-container">
            <Typography variant="h5">
              {movie.title}
            </Typography>
            <Typography variant="h8">
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

      </Link>


    </div>

    </>
  );
};

export default MovieCardWithInfo;