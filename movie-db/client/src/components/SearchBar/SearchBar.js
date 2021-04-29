import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import useStyles from './styles';


const SearchBar = ({movie}) => {

    const classes = useStyles();
      //states- input query, movies
      const [query, setQuery] = useState('');


  return (
    <>
    <input onChange = {event => setQuery(event.target.value)} />
   
    <div >    
     
      <Link to={{
        pathname: `/search/`,
        state: { query },
        }}
      > <button>         
          SEARCH</button>
            </Link>

    </div>

    </>
  );
};

export default SearchBar;