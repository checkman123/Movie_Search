import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import $ from 'jquery'

//Carousel from Swiper
  import { Swiper, SwiperSlide } from "swiper/react";
  // import Swiper core and required modules
  import SwiperCore, {
    Pagination, Navigation, Scrollbar
  } from 'swiper/core';
  // Import Swiper styles
  import 'swiper/swiper.scss';
  import "swiper/components/pagination/pagination.min.css"
  import "swiper/components/navigation/navigation.min.css"

//Style
  import useStyles from './styles';
  import './styles.css'

//Components
import MovieCard from "../MovieCard/MovieCard"
import SearchBars from '../SearchBars/SearchBars';
import Footer from '../Footer/Footer'

const Home = () => {
  // install Swiper modules
  SwiperCore.use([Pagination, Navigation, Scrollbar]);

  const classes = useStyles();

  const API_KEY = 'ee80e57743f7d18272a3bf37bab8828f';
  //const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const UPCOMING_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
      //states- input query, movies
      const [query, setQuery] = useState('');
      
      //create the state for movies, and update that state appropriate
      const [popularMovies, setPopularMovies] = useState([]);
      const [upComingMovies, setUpComingMovies] = useState([]);

      const fetchData = async () => {
        try {
          const getPopular = axios.get(POPULAR_API_URL);
          const getUpcoming = axios.get(UPCOMING_API_URL);
          axios.all([getPopular, getUpcoming]).then(
            axios.spread((...allData) => {
              //console.log(allData);
              setPopularMovies(allData[0].data.results);
              setUpComingMovies(allData[1].data.results);
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
    <div>
    <SearchBars/>
    <Typography className={classes.heading}variant="h5">Popular</Typography>
    <Swiper
      spaceBetween={5}
      slidesPerView={4}
      navigation={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination
    >
      <div className={classes.cardList}>
        {popularMovies.map(movie => (
          <SwiperSlide>
            <MovieCard movie={movie}/>
          </SwiperSlide>
        ))}
      </div> 
    </Swiper>

    {/*upComingMovies.filter(movie => movie.poster_path).map(movie => (

    <MovieCard movie={movie}/>
    ))*/}

    <Typography className={classes.heading}variant="h5">upcoming</Typography>
    <Swiper
      spaceBetween={5}
      slidesPerView={4}
      navigation={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination
    >
      <div className={classes.cardList}>
        {upComingMovies.map(movie => (
          <SwiperSlide>
            <MovieCard movie={movie}/>
          </SwiperSlide>
        ))}
      </div> 
    </Swiper>


    <Footer/>

    </div>
  );
};

export default Home;