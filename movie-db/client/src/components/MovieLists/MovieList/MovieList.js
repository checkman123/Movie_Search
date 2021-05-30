import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
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

        <Card className={classes.card}>
          <Grid container >
            <Grid item xs={10}>
              <Link className="link" to={{
                pathname: `/movie-list/${list._id}`,
                state: { list },
              }}>
                <Typography noWrap className={classes.title} variant="h5" component="h2">{list.title}</Typography>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.delete}>
                {//Check for name so only user who created it can delete it
                  (userId === list?.user_list_id ) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deleteMovieList(list._id))}>
                      <DeleteIcon fontSize="small" />
                    </Button>)
                  }
              </div>

            </Grid>
          </Grid>
          </Card>


        </>
      
    );
}

export default MovieList;