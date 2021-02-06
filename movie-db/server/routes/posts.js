//GOES WITH CONTROLLER FOLDER POSTS
import express from "express";

import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";

const router = express.Router();

//Visit localhost:5000/posts   <= added in index,js to go to /posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //update existing document
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
