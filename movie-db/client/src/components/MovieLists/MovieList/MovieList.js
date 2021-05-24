import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { Link, Route, Switch} from 'react-router-dom'
import {useDispatch } from 'react-redux'

import useStyles from './styles';

import { deleteMovieList } from '../../../actions/movieLists'



const MovieList = ({ list, setCurrentId }) => {
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

    return (
      <>
      <Link to={{
        pathname: `/movie-list/${list._id}`,
        state: { list },
      }}>
        <Card className={classes.card}>
          <Typography className={classes.title} variant="h5" component="h2" gutterBottom>{list.title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>{list.description}</Typography>
          </CardContent>
          </Card>
      </Link>
          <CardActions className={classes.cardActions}>
            {//Check for name so only user who created it can delete it
              (userId === list?.user_list_id ) && (
              <Button size="small" color="secondary" onClick={() => dispatch(deleteMovieList(list._id))}>
                <DeleteIcon fontSize="small" /> Delete
              </Button>)
            }
          </CardActions>
        </>
      
    );
}

export default MovieList;