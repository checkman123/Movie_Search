import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import MovieListForm from "../MovieListForm/MovieListForm"
import { getMovieLists } from '../../actions/movieLists'
import { updateMovie, createMovie, getMovies } from '../../actions/movies';

import useStyles from './styles';
import './PopUpList.css'


const PopUpList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));
  var userId;

  //Check if user is login by us or Google
  if(user){
    if(user.result._id){
      userId = user.result._id;
    } else { 
      userId = user.result.googleId;
    }
  }

  console.log(props);
  const movieLists = props.movieLists;
  const movieInfo = props.movieInfo;

  //set to value._id to add movie into that list
  const [listToAdd, setListToAdd] = useState('');
  const [movieData, setMovieData] = useState({
    title: '',
    movie_id: 0,
    overview: '',
    poster_path: '',
    genres: [],
    release_date:'',
    movie_list_id: []
  })
  

  useEffect(() =>{
    dispatch(getMovies());
  }, [dispatch])

  const moviesData = useSelector((state) => state.movies);
  console.log("moviesData");
  console.log(moviesData);


  const handleSubmit = (e) => {
      console.log(listToAdd);

      let movieExist = moviesData.filter(movie => movie.title === movieInfo.title)[0];

      //If movie exist in database, update it
      if(movieExist){
        console.log("If movie exist in database, update it")

        let tempMovieListID = movieExist.movie_list_id;
        let existInList = movieExist.movie_list_id.find(id => id === listToAdd._id);

        if(existInList === "undefined"){
          tempMovieListID.push(listToAdd._id);
          dispatch(updateMovie(movieExist._id, {...movieExist, movie_list_id: tempMovieListID}))
          dispatch(getMovies());
        } else {
          console.log("Movie already exist in list")
        }

        console.log("moviesData");
        console.log(moviesData);

      } else {
        //if movie doesnt exist in database, create it
        console.log("if movie doesnt exist in database, create it")
        dispatch(createMovie({...movieData, title: movieInfo.title, movie_id: movieInfo.id, overview: movieInfo.overview, 
                              poster_path: movieInfo.poster_path, genres: movieInfo.genres, movie_list_id: [listToAdd._id] }));

      }

      props.setTrigger(false);


      // setMovieData({
      //     ...movieData, title: movieInfo.title, movie_id: movieInfo.id, overview: movieInfo.overview,
      //     poster_path: movieInfo.poster_path, genres: movieInfo.genres, release_date: movieInfo.release_date, movie_list_id: [...movieData.movie_list_id, listToAdd._id]
      // });

      //dispatch(updateMovie(movieData));


  }

  //return popup if trigger is true if not just empty ""
  return (props.trigger) ? (

    (props.listExist) ? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>
                        close
                    </button>
                    <div className="combo-box">
                        <Autocomplete
                            id="combo-box-movie-lists"
                            onChange={(e, value) => setListToAdd(value)}
                            options={movieLists}
                            getOptionLabel={(option) => option.title}
                            style={{ paddingTop: '20px'}}
                            renderInput={(params) => <TextField {...params} label="Movie List" variant="outlined" />}
                        />
                    </div>

                    <button onClick={handleSubmit}>add</button>
                    
                </div>
                
            </div>
            
        </div>
    ) : (
        <div>
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>
                        close
                    </button>
                    <MovieListForm/>
                </div>
            </div>
        </div>
       
    )
  ) : "";
};

export default PopUpList;
