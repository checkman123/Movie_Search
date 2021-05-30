import { FETCH_MOVIE_LIST } from '../constants/actionTypes'

const movieListReducer = (movieLists = [], action) => {
    console.log(action);
    switch(action.type){
        case FETCH_MOVIE_LIST:
            return action.payload;
        default:
            return movieLists;
    }
}

export default movieListReducer;