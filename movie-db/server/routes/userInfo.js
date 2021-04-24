//GOES WITH CONTROLLER FOLDER POSTS
import express from "express";

import { getUser, getUsers } from "../controllers/userInfo.js";

const router = express.Router();

//Visit localhost:5000/user/:id   

router.get('/:id', getUser);
router.get('/', getUsers);

export default router;
