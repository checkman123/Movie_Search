import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid, Button } from "@material-ui/core";
import useStyles from './styles';
import { Link, Route, Switch} from 'react-router-dom'
import SearchBars from '../SearchBars/SearchBars';
import { useHistory } from 'react-router-dom'
import MovieCardWithInfo from "../MovieCardWithInfo/MovieCardWithInfo"

//Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Search = (props) => {

  const history = useHistory();

  const [page, setPage] = useState(1);

  const nextPage = () => {
    console.log("NEXT")
    setPage(page + 1);
  }

  const prevPage = () => {
    if(page > 1){
      console.log("Prev")
      setPage(page - 1);
    }
  }
  const classes = useStyles();

  const API_KEY = 'ee80e57743f7d18272a3bf37bab8828f';
  //const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

  //states- input query, movies. take the pathurl and use it
  const [query, setQuery] = useState(window.location.pathname.replace('/search/','').replace('#', '').replace('%20', ' '));

  const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
  
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

  useEffect(() => {
    fetchData();
    //console.log(searchMovies);
  }, [page]); //Whenever the page state change, it will call fetchData() 

  return (
    <div>
      <SearchBars/>
      <NavButtons/>
      <Typography className={classes.page} variant="h5">Page: {page}</Typography>
      <Typography className={classes.heading} variant="h4">Your Search: {query}</Typography>
      
      <div className="card-list">
        {searchMovies.length > 0 ? searchMovies.map(movie => (
            <MovieCardWithInfo movie={movie} id={movie.id}/>
        )) : 
        <Typography className={classes.heading} variant="h4">Oops, No search result</Typography>}
      </div> 

      <NavButtons/>
    </div>
  );

    //Previous and Next Button
    function NavButtons(){
      return(
        <div className={classes.navButtons}>
          <Button className={classes.prevPage} variant="contained" color="primary" size="large" type="submit" onClick={prevPage}>
            <ArrowBackIcon/>
            <h3>Prev</h3>
          </Button> 
          <Button className={classes.nextPage} variant="contained" color="primary" size="large" type="submit" onClick={nextPage}>
            <h3>Next</h3>
            <ArrowForwardIcon/>
          </Button> 
        </div>
      );
      }

};

export default Search;