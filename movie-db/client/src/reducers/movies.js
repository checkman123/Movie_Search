import { FETCH_ALL_MOVIES, CREATE_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from '../constants/actionTypes'

const movieReducer = (movies = [], action) => {
    console.log(action);
    switch(action.type){
        case FETCH_ALL_MOVIES:
            return action.payload;
        case CREATE_MOVIE:
            return [...movies, action.payload];
        case  UPDATE_MOVIE:
            return action.payload;
        case DELETE_MOVIE:
            return movies.filter((movie) => movie._id !== action.payload);
        default:
            return movies;
    }
}

export default movieReducer;