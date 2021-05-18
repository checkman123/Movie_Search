import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import { Link, Route, Switch} from 'react-router-dom'
import SearchBars from '../SearchBars/SearchBars';
import MovieCard from "../MovieCard/MovieCard"

const Search = (props) => {

  const classes = useStyles();

  const BarStyling = {width:"20rem",height: "2rem", background:"#F2F1F9", borderRadius:"10%"};
      const BarStyling1 = {width:"7rem",height: "2rem", background:"#F2F1F9", borderRadius:"10%"};

  const API_KEY = 'ee80e57743f7d18272a3bf37bab8828f';
  //const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  
      //states- input query, movies
      const [query, setQuery] = useState('');
     
      const onSubmit = () => {
        console.log("Search")
        
        fetchData();
      }

      const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.location.state.query}&page=1&include_adult=false`;
      
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
    <div>
         <div class="search"></div>          
             <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange = {event => setQuery(event.target.value)}/>
                  <Link to={{ pathname: `search`, state: { query },}}>
                      <button type="submit" class="searchButton"> 
                      <i class="fa fa-search"></i>        
                     </button>
                  </Link>                    
     </div>
    <Typography className={classes.heading}variant="h5">Your Search</Typography>
    <div className="card-list">
      {searchMovies.map(movie => (
          <MovieCard movie={movie}/>
      ))}
      </div> 

    </>
  );
};

export default Search;