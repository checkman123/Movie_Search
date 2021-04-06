import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index.js'; 

export const signin = (formData, history) => async (dispatch) => {
    try {
        //log in user
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});
        //go to homepage
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        //sign up user
        const { data } = await api.signUp(formData);

        console.log(data);

        dispatch({type: AUTH, data});

        //go to homepage
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}