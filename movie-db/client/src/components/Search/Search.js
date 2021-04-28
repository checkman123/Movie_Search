import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

import MovieCard from "../MovieCard/MovieCard"

const Search = () => {

  const classes = useStyles();

  const API_KEY = 'ee80e57743f7d18272a3bf37bab8828f';
  //const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  
      //states- input query, movies
      const [query, setQuery] = useState('');
      
     
      const onSubmit = () => {
        console.log("Search")
        setQuery("marry");
        
        fetchData();
      }

      const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
      
      //create the state for movies, and update that state appropriate
      const [popularMovies, setPopularMovies] = useState([]);

      const fetchData = async () => {
        try {
          const getPopular = axios.get(SEARCH_API_URL);
          axios.all([getPopular]).then(
            axios.spread((...allData) => {
              //console.log(allData);
              setPopularMovies(allData[0].data.results);
            })
          )
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {

      }, []);
      
      

  return (
<>
    <button onClick={onSubmit}>SEARCH</button>
    <Typography className={classes.heading}variant="h5">upcoming</Typography>
    <div className="card-list">
      {popularMovies.map(movie => (
          <MovieCard movie={movie}/>
      ))}
      </div> 

    </>
  );
};

export default Search;