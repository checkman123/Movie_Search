// ACTIONs AND API AND REDUCERS FOLDER GOES TOGETHER
//import everything from actions as api
import { FETCH_LIST_OF_MOVIES } from '../constants/actionTypes'
import * as api from '../api'; 

// Action Creators
// Function that return action

export const getListOfMovies = (id) => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.fetchListOfMovies(id);

        dispatch ({type: FETCH_LIST_OF_MOVIES, payload: data});
    }catch(error){
        console.log(error)
    }
}