import { FETCH_ALL_USERS, FETCH_USER } from '../constants/actionTypes'

const userReducer = (userInfo = [], action) => {
    switch(action.type){
        case FETCH_ALL_USERS:
            return action.payload;
        case FETCH_USER:
            return action.payload;
        default:
            return userInfo;
    }
}

export default userReducer;