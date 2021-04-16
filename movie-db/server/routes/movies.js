//GOES WITH CONTROLLER FOLDER MOVIES
import express from "express";

import { getMovies, createMovie, deleteMovie } from "../controllers/movies.js";
import auth from '../middleware/auth.js';

const router = express.Router();

//Visit localhost:5000/movies   <= added in index,js to go to /movies
router.get('/', getMovies);
router.post('/', auth, createMovie);
router.delete('/:id', auth, deleteMovie);

export default router;