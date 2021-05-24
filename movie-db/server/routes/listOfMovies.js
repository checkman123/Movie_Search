//GOES WITH CONTROLLER FOLDER MOVIES
import express from "express";

import { getListOfMovies } from "../controllers/listOfMovies.js";
import auth from '../middleware/auth.js';

const router = express.Router();

//Visit localhost:5000/movie-list/:id   
router.get('/:id', getListOfMovies);

export default router;