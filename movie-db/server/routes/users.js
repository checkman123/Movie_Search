//GOES WITH CONTROLLER FOLDER POSTS
import express from "express";

import { signin, signup } from "../controllers/users.js";

const router = express.Router();

//Visit localhost:5000/signin   <= added in index,js to go to /signin

router.post('/signin',signin);
router.post('/signup',signup);

export default router;
