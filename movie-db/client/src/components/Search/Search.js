import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import { Link, Route, Switch} from 'react-router-dom'
import SearchBars from '../SearchBars/SearchBars';
import MovieCardWithInfo from "../MovieCardWithInfo/MovieCardWithInfo"
import './styles.css';

var str = 1;

if(str !=1){
  str = 1;
}

const Search = (props) => {

  function refreshPage() {
    window.location.reload(false);
   // fetchData();
  }

  function nextPage() {
    str++;  
    fetchData();
   // refreshPage();
  }

  function firstPage() {
   
    refreshPage();
  }
  const classes = useStyles();

  const API_KEY = 'ee80e57743f7d18272a3bf37bab8828f';
  //const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

      //states- input query, movies
  const [query, setQuery] = useState('');

      const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.location.state.query}&page=${str}&include_adult=false`;
      
      str = str + 1;
      //create the state for movies, and update that state appropriate
  const [searchMovies, setSearchMovies] = useState([]);
    

 
  const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        nextPage();
      }
    };
  
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
    <div>
      <SearchBars/>
      <Typography className={classes.heading}variant="h5">Your Search</Typography>
      
      
      <div className="card-list">
        {searchMovies.map(movie => (
            <MovieCardWithInfo movie={movie}/>
        ))}
        </div> 
        <label class = "label">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
        {'  '}First {'  '}
            <button type="submit" class="clickButton2" onClick={firstPage}> 
            
            <i class="fa fa-angle-left"></i>
            </button> 
            
      </label>

      
      <label class = "label">
      {'  '} {'  '}  ...  {'  '}  {'  '} 
            <button type="submit" class="clickButton2" onClick={nextPage}> 
            <i class="fa fa-angle-right"></i>
            </button> 
            {'  '}  {'  '} Next  {'  '}  {'  '} 
            <i class="fa fa-arrow-right" aria-hidden="true"></i>

      </label>
    </div>
   
    
   
  );
};

export default Search;