// ACTIONs AND API AND REDUCERS FOLDER GOES TOGETHER
//import everything from actions as api
import { FETCH_ALL_USERS, FETCH_USER, UPDATE_USER } from '../constants/actionTypes'
import * as api from '../api'; 

// Action Creators
// Function that return action

export const getUsers = () => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.fetchUsers();
        
        dispatch ({type: FETCH_ALL_USERS, payload: data});
    }catch(error){
        console.log(error)
    }
}

export const getUser = (id) => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.fetchUser(id);
        
        dispatch ({type: FETCH_USER, payload: data});
    }catch(error){
        console.log(error)
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try{
        // Get response from API
        const { data } = await api.updateUser(id, user);
        
        dispatch ({type: UPDATE_USER, payload: data});
    }catch(error){
        console.log(error)
    }
}