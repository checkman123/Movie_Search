import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route, Switch} from 'react-router-dom'
//import { SearchBar } from 'react-native-elements'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
//import { SearchBar } from 'material-ui-search-bar'
import useStyles from './styles';
//import {SearchBar} from 'react-native-search-bar';

const SearchBars = () => {

    const classes = useStyles();
      //states- input query, movies
      const [query, setQuery] = useState('');

      const BarStyling = {width:"20rem",height: "2rem", background:"#F2F1F9", borderRadius:"10%"};
      const BarStyling1 = {width:"7rem",height: "2rem", background:"#F2F1F9", borderRadius:"10%"};
  return (
    <>

    <input 
    style = {BarStyling}
    placeholder = "Search"
    onChange = {event => setQuery(event.target.value)} />
   
       
     
      <Link to={{
        pathname: `/search/`,
        state: { query },
        }}
      > <button
       icon="search"
        style = {BarStyling1}
      >         
          SEARCH</button>
            </Link>


    </>
  );
};

export default SearchBars;