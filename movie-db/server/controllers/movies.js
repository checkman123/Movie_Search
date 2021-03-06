//Desc: All handlers for routes
// status(2xx) - Success
// status(4xx) - Client error


import express from 'express';
import mongoose from 'mongoose';

import Movie from '../models/movie.js';

const router = express.Router();

export const getMovies = async (req, res) => { 
    try {
        const movies = await Movie.find();
                
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMovie = async (req, res) => { 
    const { id } = req.params;

    try {
        const movie = await Movie.findById(id);
        
        res.status(200).json(movie);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { movie_list_id } = req.body;

    //console.log(req);
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No movie with id: ${id}`);

    const updatedMovie = { movie_list_id };

    //console.log(updatedMovie);

    await Movie.findByIdAndUpdate(id, updatedMovie, { new: true });

    res.json(updatedMovie);
}

export const createMovie = async (req, res) => {
    const movie = req.body;
    const { title } = req.body;

    const movieExist = await Movie.findOne({ title });

    if (movieExist) return res.status(400).json({ message: "Movie already exists" });
    
    const newMovie = new Movie({ ...movie})

    try {
        await newMovie.save();

        res.status(201).json( newMovie );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteMovie = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No movie with id: ${id}`);

    await Movie.findByIdAndRemove(id);

    res.json({ message: "Movie deleted successfully." });
}

export default router;