import * as api from '../api'; //import everything from actions as api;

// Action Creators
// Function that return action

export const getPosts = () => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.fetchPosts();

        dispatch ({type: 'FETCH_ALL', payload: data});
    }catch(error){
        console.log(error.message)
    }
}