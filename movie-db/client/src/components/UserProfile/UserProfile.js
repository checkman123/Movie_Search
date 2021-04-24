import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { TextField, Button, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import useStyles from './styles';

const UserProfile = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const userInfo = useSelector((state) => state.user);
    const classes = useStyles();

    const [popularMovies, setPopularMovies] = useState([]);

    const fetchData = async () => {
      try {
        const getPopular = axios.get("http://localhost:5000/user/60836f7ae2df2e0e7ceb0535");
        axios.all([getPopular]).then(
          axios.spread((...allData) => {
            //console.log(allData);
            setPopularMovies(allData[0].data);
          })
        )
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);

    console.log(popularMovies);
    
  return (
    <>

        <div className="card-list">

        </div> 
        <Typography className={classes.heading}variant="h5">Similar Movies</Typography>
        <div className="card-list">

        </div> 
    </>
  );
};

export default UserProfile;