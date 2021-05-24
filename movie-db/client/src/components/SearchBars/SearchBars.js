import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import './styles.css'


const SearchBars = () => {
    
    const classes = useStyles();
      //states- input query, movies
      const [query, setQuery] = useState('');

  return (
  
    <div>
        <div class="search">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
          <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange = {event => setQuery(event.target.value)}/>

          <Link to={{ pathname: `/search/`, state: { query },}}>
            <button type="submit" class="searchButton" > 
              <i class="fa fa-search"></i>
            </button>
          </Link>   
        </div> 
  
     </div>

  );
};


export default SearchBars;