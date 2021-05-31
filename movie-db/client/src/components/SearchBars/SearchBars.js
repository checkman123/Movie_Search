import React, {useState, useEffect} from 'react';
import { Link, NavLink, Route, Switch} from 'react-router-dom'
import useStyles from './styles';
import { useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
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
            pathname: `/search/${query}&page=1`,
            state: { query }
          });

        //reload the page
        window.location.reload(false);
        }
      }

  return (
  
    <div>
        <div class="search">
          <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange = {event => setQuery(event.target.value)} onKeyPress={handleKeyPress} />

          <Link to={{ pathname: `/search/`, state: { query },}}>
            <button type="submit" class="searchButton" > 
              <SearchIcon/>
            </button>
          </Link>   
        </div> 
     </div>

  );
};


export default SearchBars;