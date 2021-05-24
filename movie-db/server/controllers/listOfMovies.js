import express from 'express';
import mongoose from 'mongoose';

import Movie from '../models/movie.js';

const router = express.Router();

export const getListOfMovies = async (req, res) => { 
    try {
        const { id } = req.params;
        const objectId = {movie_list_id: id};
        const listOfMovies = await Movie.find(objectId);
                
        res.status(200).json(listOfMovies);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;