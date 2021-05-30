import { FETCH_ALL_MOVIE_LISTS, CREATE_MOVIE_LIST, UPDATE_MOVIE_LIST, DELETE_MOVIE_LIST, FETCH_LIST_OF_MOVIES, FETCH_MOVIE_LIST } from '../constants/actionTypes'

const movieListsReducer = (movieLists = [], action) => {
    console.log(action);
    switch(action.type){
        case FETCH_ALL_MOVIE_LISTS:
        case FETCH_MOVIE_LIST:
        case FETCH_LIST_OF_MOVIES:
            return action.payload;
        case CREATE_MOVIE_LIST:
            return [...movieLists, action.payload];
        case  UPDATE_MOVIE_LIST:
            return movieLists.map((movieList) => movieList._id === action.payload._id ? action.payload : movieList)
        case DELETE_MOVIE_LIST:
            return movieLists.filter((movieList) => movieList._id !== action.payload);
        default:
            return movieLists;
    }
}

export default movieListsReducer;