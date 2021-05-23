// ACTIONs AND API AND REDUCERS FOLDER GOES TOGETHER
//import everything from actions as api
import { FETCH_ALL_MOVIE_LISTS, CREATE_MOVIE_LIST, DELETE_MOVIE_LIST } from '../constants/actionTypes'
import * as api from '../api'; 

// Action Creators
// Function that return action

export const getMovieLists = (id) => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.fetchMovieLists(id);

        dispatch ({type: FETCH_ALL_MOVIE_LISTS, payload: data});
    }catch(error){
        console.log(error)
    }
}


export const createMovieList = (movieList) => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.createMovieList(movieList);

        dispatch ({type: CREATE_MOVIE_LIST, payload: data});
    }catch(error){
        console.log(error)
    }
}

export const deleteMovieList = (id) => async (dispatch) => {
    try {
        await api.deleteMovieList(id);

        dispatch({type:  DELETE_MOVIE_LIST, payload: id});
    }catch(error) {
        console.log(error)
    }
}
