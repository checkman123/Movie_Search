//Desc: All handlers for routes
// status(2xx) - Success
// status(4xx) - Client error
import express from 'express';
import mongoose from 'mongoose';

import MovieList from '../models/movieList.js';

const router = express.Router();

export const getMovieLists = async (req, res) => { 
    try {
        const { id } = req.params;
        const objectId = {user_list_id: id};
        const movieLists = await MovieList.find(objectId);
                
        res.status(200).json(movieLists);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getList = async (req, res) => { 
    const { id } = req.params;

    try {
        const movieList = await MovieList.findById(id);
        
        res.status(200).json(movieList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createList = async (req, res) => {
    const movieList = req.body;

    const newMovieList = new MovieList({ ...movieList})

    try {
        await newMovieList.save();

        res.status(201).json( newMovieList );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteList = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No movie list with id: ${id}`);

    await MovieList.findByIdAndRemove(id);

    res.json({ message: "Movie List deleted successfully." });
}

export default router;