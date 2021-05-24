import { FETCH_LIST_OF_MOVIES } from '../constants/actionTypes'

const listOfMoviesReducer = (listOfMovies = [], action) => {
    console.log(action);
    switch(action.type){
        case FETCH_LIST_OF_MOVIES:
            return action.payload;
        default:
            return listOfMovies;
    }
}

export default listOfMoviesReducer;