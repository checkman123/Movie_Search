import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import {useDispatch } from 'react-redux'

import { deleteMovieList } from '../../../actions/movieLists'



const MovieList = ({ list, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);

    return (
        <Card className={classes.card}>
        <Typography className={classes.title} variant="h5" component="h2" gutterBottom>{list.title}</Typography>
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>{list.description}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {//Check for userId so only user who created it can delete it
            (user?.result?.name === list?.user_list_id ) && (
            <Button size="small" color="secondary" onClick={() => dispatch(deleteMovieList(list._id))}>
              <DeleteIcon fontSize="small" /> Delete
            </Button>)
          }
        </CardActions>
      </Card>
    );
}

export default MovieList;