import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import { Link, Route, Switch} from 'react-router-dom'
import SearchBars from '../SearchBars/SearchBars';
import MovieCard from "../MovieCard/MovieCard"
import './styles.css';

var str = 1;

if(str !=1){
  str = 1;
}

const Search = (props) => {

  function refreshPage() {
    window.location.reload(false);
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
     
      const onSubmit = () => {
        console.log("Search")
        
        fetchData();
      }

      const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.location.state.query}&page=${str}&include_adult=false`;
      
      str = str + 1;
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

    <div>
         <div class="search">        
             <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange = {event => setQuery(event.target.value)}/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>  
                  <Link to={{ pathname: `search`, state: { query },}}>
                      <button type="submit" class="searchButton" onClick={refreshPage}> 
                      <i class="fa fa-search"></i>        
                     </button> 
                  </Link>                    
     </div>
    <Typography className={classes.heading}variant="h5">Your Search</Typography>
    <button type="submit" class="clickButton1" onClick={firstPage}> 
    <i class="fa fa-angle-left"></i>
    </button> 
    
    <label class = "label">
          First or next page: 
          <button type="submit" class="clickButton2" onClick={nextPage}> 
          <i class="fa fa-angle-right"></i>
           </button> 
          
    </label>
    
    <div className="card-list">
      {searchMovies.map(movie => (
          <MovieCard movie={movie}/>
      ))}
      </div> 
    </div>
   
  );
};

export default Search;