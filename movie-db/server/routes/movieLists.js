//GOES WITH CONTROLLER FOLDER MOVIES
import express from "express";

import { getMovieLists, createList, deleteList, getList } from "../controllers/movieLists.js";
import auth from '../middleware/auth.js';

const router = express.Router();

//Visit localhost:5000/movie-lists  <= added in index,js to go to /movie-list
router.get('/:id', getMovieLists);
router.get('/list/:id', getList);
router.post('/', auth, createList);
router.delete('/:id', auth, deleteList);

export default router;