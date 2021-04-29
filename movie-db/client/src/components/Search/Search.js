import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import SearchBar from '../SearchBar/SearchBar';
import MovieCard from "../MovieCard/MovieCard"

const Search = () => {

  const classes = useStyles();

  const API_KEY = 'ee80e57743f7d18272a3bf37bab8828f';
  //const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  
      //states- input query, movies
    //   const [query, setQuery] = useState('');
       const { state } = this.location.state;
       
      // const onSubmit = () => {
      //   fetchData();
      // } ${query}

      const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${state}&page=1&include_adult=false`;
      
      //create the state for movies, and update that state appropriate
      const [searchMovies, setSearchMovies] = useState([]);

      const fetchData = async () => {
        try {
          const searchMovies = axios.get(SEARCH_API_URL);
          axios.all([searchMovies]).then(
            axios.spread((...allData) => {
              //console.log(allData);
              setSearchMovies(allData[0].data.results);
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
   
    <Typography className={classes.heading}variant="h5">Your searched Movies</Typography>
    <div className="card-list">
      {searchMovies.map(movie => (
          <MovieCard movie={movie}/>
      ))}
      </div> 

    </>
  );
};

export default Search;