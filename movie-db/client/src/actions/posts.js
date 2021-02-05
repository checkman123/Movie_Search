// ACTIONs AND API AND REDUCERS FOLDER GOES TOGETHER
//import everything from actions as api
import * as api from '../api'; 

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

export const createPost = (post) => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.createPost(post);

        dispatch ({type: 'CREATE', payload: data});
    }catch(error){
        console.log(error.message)
    }
}