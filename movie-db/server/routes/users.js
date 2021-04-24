//GOES WITH CONTROLLER FOLDER POSTS
import express from "express";

import { signin, signup, getUser } from "../controllers/users.js";

const router = express.Router();

//Visit localhost:5000/signin   <= added in index,js to go to /signin

router.post('/signin',signin);
router.post('/signup',signup);
router.get('/:id', getUser);

export default router;
