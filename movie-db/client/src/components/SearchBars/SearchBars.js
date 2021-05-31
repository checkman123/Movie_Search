import React, {useState, useEffect} from 'react';
import { Link, NavLink, Route, Switch} from 'react-router-dom'
import useStyles from './styles';
import { useHistory } from 'react-router-dom'
import './styles.css'

const SearchBars = () => {
    
    const classes = useStyles();
    const history = useHistory();
      //states- input query, movies
      const [query, setQuery] = useState('');

      function handleKeyPress (event) {
        if(event.key === 'Enter'){
          console.log('enter press here! ');
          setQuery(event.target.value);
          console.log(query);

          history.push({
            pathname: `/search/${query}`,
            state: { query }
        });

        //reload the page
        window.location.reload(false);
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