import { combineReducers } from 'redux';

import posts from './posts'
import auth from './auth'
import movieLists from './movieLists'
import userInfo from './userInfo'

export default combineReducers({ posts,userInfo, auth, movieLists,  });