import { FETCH_ALL_USERS, FETCH_USER, UPDATE_USER } from '../constants/actionTypes'

const userReducer = (userInfo = [], action) => {
    console.log(action);
    switch(action.type){
        case FETCH_ALL_USERS:
        case FETCH_USER:
            return action.payload;
        case UPDATE_USER:
            return action.payload;
        default:
            return userInfo;
    }
}

export default userReducer;