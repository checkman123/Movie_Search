import { AUTH, LOGOUT } from '../constants/actionTypes'

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            //console.log(action?.data);    data recieved from google in component Auth
            //set it in localStorage
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
        return { ...state, authData: action?.data};

        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null};


    
        default:
            return state;;
    }
}

export default authReducer;