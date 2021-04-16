import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { TextField, Button, Paper} from '@material-ui/core';

import MovieCard from "../MovieCard/MovieCard"

import useStyles from './styles';

const MovieInfo = (props) => {

    const classes = useStyles();

    console.log(props.location.state.movie);

    const movie = props.location.state.movie;

    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const GET_MOVIE_VIDEOS = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
    const GET_SIMILAR_MOVIES = `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`

    
    const [videos, setVideos] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [videosUrl, setVideosUrl] = useState([]);

    //fetch videos and similar movies from moviedb api
    const fetchData = async () => {
      try {
        const getVideo = axios.get(GET_MOVIE_VIDEOS);
        const getSimilarMovie = axios.get(GET_SIMILAR_MOVIES);
        axios.all([getVideo, getSimilarMovie]).then(
          axios.spread((...allData) => {
            console.log(allData);
            setVideos(allData[0].data.results);
            setSimilarMovies(allData[1].data.results);
          })
        )

        var videoUrl = [];
        for(var i=0; i<videos.length; i++){
          if(videos[i].site === "Youtube"){
            videoUrl.push("https://www.youtube.com/watch?v=" + videos.key);
          }
        }

        setVideosUrl(videoUrl);

      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);

    

  return (
    <>
    <div className={classes.card} key={movie.id}>
        <img className="card-image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
            />
        <div className="card-content">
            <h3 className="card-title">{movie.title}</h3>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p>
            <p className="card-desc">{movie.overview}</p>
        </div>
        <Button className="" variant="contained" color="primary" size="large" type="submit" fullWidth>ADD TO WATCHLIST</Button>
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