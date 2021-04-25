//GOES WITH CONTROLLER FOLDER MOVIES
import express from "express";

import { getMovieLists, createList, deleteList } from "../controllers/movieLists.js";
import auth from '../middleware/auth.js';

const router = express.Router();

//Visit localhost:5000/movie-list  <= added in index,js to go to /movie-list
router.get('/:id', getMovieLists);
router.post('/', auth, createList);
router.delete('/:id', auth, deleteList);

export default router;