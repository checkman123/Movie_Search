import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

import MovieCard from "../MovieCard/MovieCard"
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {


  

  const classes = useStyles();

  const API_KEY = 'ee80e57743f7d18272a3bf37bab8828f';
  //const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const UPCOMING_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
      //states- input query, movies
      const [query, setQuery] = useState('');
      
      //create the state for movies, and update that state appropriate
      const [popularMovies, setPopularMovies] = useState([]);
      const [upComingMovies, setUpComingMovies] = useState([]);

      const fetchData = async () => {
        try {
          const getPopular = axios.get(POPULAR_API_URL);
          const getUpcoming = axios.get(UPCOMING_API_URL);
          axios.all([getPopular, getUpcoming]).then(
            axios.spread((...allData) => {
              //console.log(allData);
              setPopularMovies(allData[0].data.results);
              setUpComingMovies(allData[1].data.results);
            })
          )
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);
      
      

  return (
    <>
    <SearchBar/>
    <Typography className={classes.heading}variant="h5">Popular</Typography>
    <div className="card-list">
      {popularMovies.map(movie => (
          <MovieCard movie={movie}/>
      ))}
    </div> 

    {/*upComingMovies.filter(movie => movie.poster_path).map(movie => (

    <MovieCard movie={movie}/>
    ))*/}

    <Typography className={classes.heading}variant="h5">upcoming</Typography>
    <div className="card-list">
      {upComingMovies.map(movie => (
          <MovieCard movie={movie}/>
      ))}
      </div> 

    </>
  );
};

export default Home;