import { combineReducers } from 'redux';

import posts from './posts'
import auth from './auth'
import movieLists from './movieLists'

export default combineReducers({ posts, auth, movieLists });