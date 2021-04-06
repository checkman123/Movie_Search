//GOES WITH CONTROLLER FOLDER POSTS
import express from "express";

import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from '../middleware/auth.js';

const router = express.Router();

//Visit localhost:5000/posts   <= added in index,js to go to /posts
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost); //update existing document
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;