import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import {useDispatch } from 'react-redux'

import { deleteMovie } from '../../../actions/posts'


const Movie = ({ movie, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));


    return (
        <Card className={classes.card}>
        <CardMedia className={classes.media} image={movie.selectedFile} title={movie.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{movie.name}</Typography>
          <Typography variant="body2">{moment(movie.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(movie._id)}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{movie.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" component="h2" gutterBottom>{movie.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>{movie.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {//Check for userId so only user who created it can delete it
            (user?.result?.googleId === movie?.creator || user?.result?._id === movie?.creator) && (
            <Button size="small" color="secondary" onClick={() => dispatch(deleteMovie(movie._id))}>
              <DeleteIcon fontSize="small" /> Delete
            </Button>)
          }
        </CardActions>
      </Card>
    );
}

export default Movie;