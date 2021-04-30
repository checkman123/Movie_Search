import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { TextField, Button, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import MovieCard from "../MovieCard/MovieCard"
import VideoEmbed from "../VideoEmbed/VideoEmbed"
import { createMovie } from '../../actions/movies';

import useStyles from './styles';

const MovieInfo = (props) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  
  const [movieData, setMovieData] = useState({
    title: '',
    movie_id: 0,
    overview: '',
    poster_path: '',
    genres: []
  })


    const classes = useStyles();
    const dispatch = useDispatch();

    console.log(props.location.state.movie);

    const movie = props.location.state.movie;

    

    const API_KEY = 'ee80e57743f7d18272a3bf37bab8828f';
    //const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const GET_MOVIE_VIDEOS = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
    const GET_SIMILAR_MOVIES = `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    const GET_MOVIE_INFO = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`
    

    
    const [videos, setVideos] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);

    //fetch videos and similar movies from moviedb api
    const fetchData = async () => {
      try {
        const getVideo = axios.get(GET_MOVIE_VIDEOS);
        const getSimilarMovie = axios.get(GET_SIMILAR_MOVIES);
        const getMovieInfo = axios.get(GET_MOVIE_INFO);
        axios.all([getVideo, getSimilarMovie, getMovieInfo]).then(
          axios.spread((...allData) => {
            console.log(allData);
            setVideos(allData[0].data.results);
            setSimilarMovies(allData[1].data.results);
            setMovieInfo(allData[2].data);
          })
        )
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault(); //not to get refresh in browser

      if(!user){
        window.alert("Please Sign in first");
      } else {
      //console.log("CLICKED")
      setMovieData({ ...movieData, title: movieInfo.title, movie_id: movieInfo.id, overview: movieInfo.overview, poster_path: movieInfo.poster_path, genres: movieInfo.genres });

      dispatch(createMovie({...movieData, title: movieInfo.title, movie_id: movieInfo.id, overview: movieInfo.overview, poster_path: movieInfo.poster_path, genres: movieInfo.genres }));
      }

    };

    /*if(!user?.result?.name){
      return (
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Please Sign in to create and like posts
          </Typography>
        </Paper>
      )
    }*/

  return (
    <>
      <div className={classes.card} key={movie.id}>
          <img className="card-image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieInfo.poster_path}`}
              alt={movieInfo.title + ' poster'}
              />
          <div className="card-content">
              <h3 className="card-title">{movieInfo.title}</h3>
              <p><small>RELEASE DATE: {movieInfo.release_date}</small></p>
              <p><small>RATING: {movieInfo.vote_average}</small></p>
              <p><small>Genre: &nbsp;         
                {
                  movieInfo?.genres?.map(function(genre, index) {
                    return <span key={index}>{ (index ? ', ' : '') + genre.name }</span>;
                  }) 
                }
              </small></p>
              <p className="card-desc">{movieInfo.overview}</p>
          </div>
          <Button className="" variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>ADD TO WATCHLIST</Button>
      </div>
      <Typography className={classes.heading}variant="h5">Videos</Typography>
      <div className="card-list">
        {videos.map(video => (
            <VideoEmbed video={video}/>
        ))}
      </div> 
      <Typography className={classes.heading}variant="h5">Similar Movies</Typography>
      <div className="card-list">
        {similarMovies.map(movie => (
            <MovieCard movie={movie}/>
        ))}
      </div> 
    </>
  );
};

export default MovieInfo;