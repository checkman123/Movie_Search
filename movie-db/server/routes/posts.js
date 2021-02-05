import express from "express";

import { getPosts, createPosts } from "../controllers/posts.js";

const router = express.Router();

//Visit localhost:5000/posts   <= added in index,js to go to /posts
router.get("/", getPosts);
router.post("/", createPosts);

export default router;
