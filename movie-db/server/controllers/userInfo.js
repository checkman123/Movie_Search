//Desc: All handlers for routes
// status(2xx) - Success
// status(4xx) - Client error
import express from 'express';
import mongoose from 'mongoose';

import UserModel from '../models/user.js';

const router = express.Router();

export const getUser = async (req, res) => { 
    const { id } = req.params;
    
    try {
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: "User does not exist" });
    }
  }
  
  export const getUsers = async (req, res) => { 
    
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: "No user in database" });
    }
  }

  export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, profile_img, status } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = { name: `${firstName} ${lastName}`, email, profile_img, status };

    await UserModel.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}

export default router;