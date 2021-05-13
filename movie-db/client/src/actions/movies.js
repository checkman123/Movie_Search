// ACTIONs AND API AND REDUCERS FOLDER GOES TOGETHER
//import everything from actions as api
import { FETCH_ALL_MOVIES, CREATE_MOVIE, DELETE_MOVIE, UPDATE_MOVIE } from '../constants/actionTypes'
import * as api from '../api'; 

// Action Creators
// Function that return action

export const getMovies = () => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.fetchMovies();

        dispatch ({type: FETCH_ALL_MOVIES, payload: data});
    }catch(error){
        console.log(error)
    }
}

export const createMovie = (movie) => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.createMovie(movie);

        dispatch ({type: CREATE_MOVIE, payload: data});
    }catch(error){
        console.log(error)
    }
}

export const updateMovie = (id, movie) => async (dispatch) => {
    try{
        const { data } = await api.updateMovie(id, movie);

        dispatch({ type: UPDATE_MOVIE, payload: data });

    }catch(error){
        console.log(error)
    }
}

export const deleteMovie = (id) => async (dispatch) => {
    try {
        await api.deleteMovie(id);

        dispatch({type:  DELETE_MOVIE, payload: id});
    }catch(error) {
        console.log(error)
    }
}
