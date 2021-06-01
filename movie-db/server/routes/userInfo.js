//GOES WITH CONTROLLER FOLDER POSTS
import express from "express";

import { getUser, getUsers, updateUser } from "../controllers/userInfo.js";
import auth from '../middleware/auth.js';

const router = express.Router();

//Visit localhost:5000/user/:id   

router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.get('/', getUsers);

export default router;
