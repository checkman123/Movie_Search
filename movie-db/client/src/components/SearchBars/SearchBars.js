import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, NavLink, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import { Redirect } from 'react-router-dom';
import './styles.css'

const SearchBars = () => {
    
    const classes = useStyles();
      //states- input query, movies
      const [query, setQuery] = useState('');

      function handleKeyPress (event) {
        if(event.key === 'Enter'){
          console.log('enter press here! ');
          setQuery(event.target.value);
          console.log(query);
          return <Redirect to = {{ pathname: `/search/`, state: { query},}} />

        }
      }

  return (
  
    <div>
        <div class="search">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange = {event => setQuery(event.target.value)} onKeyPress={handleKeyPress} />

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