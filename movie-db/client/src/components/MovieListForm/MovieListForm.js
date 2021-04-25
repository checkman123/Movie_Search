import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import useStyles from './styles';
import { createMovieList } from '../../actions/movieLists';

//Get Current ID

const MovieListForm = ({ currentId, setCurrentId }) => {
    const [listData, setListData] = useState({
        title: '',
        movie_id:[],
        description:'',
        user_list_id: ''
    })

    const list = useSelector((state) => currentId? state.lists.find((l) => l._id === currentId) : null);
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
    
    

    useEffect(() => {
        if(list) setListData(list);
    }, [list])

    const handleSubmit = async (e) => {
        e.preventDefault(); //not to get refresh in browser

        dispatch(createMovieList({...listData, user_list_id: userId}));
        clear();

      };

      if(!user?.result?._id && !user?.result?.googleId){
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Please Sign in to create and like posts
            </Typography>
          </Paper>
        )
      }
    
    const clear = () =>{
        setCurrentId(0);
        setListData({ title: '', description: ''});
    }

    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Edit a Movie List` : 'Add a Movie List'}</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={listData.title} onChange={(e) => setListData({ ...listData, title: e.target.value })} />
            <TextField name="description" variant="outlined" label="description" fullWidth value={listData.description} onChange={(e) => setListData({ ...listData, description: e.target.value })} />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
      );
}

export default MovieListForm;