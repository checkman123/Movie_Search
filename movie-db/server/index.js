import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import userInfoRoutes from "./routes/userInfo.js";
import movieRoutes from "./routes/movies.js";
import movieListRoutes from "./routes/movieLists.js";
import listOfMoviesRoutes from "./routes/listOfMovies.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/movies", movieRoutes);
app.use("/movie-lists", movieListRoutes);
app.use("/user-info", userInfoRoutes);
app.use("/movie-list", listOfMoviesRoutes);

app.get('/', (req, res) => {
  res.send("Hello to Movie Stack API");
});


// https;//www.mongodb.com/cloud/atlas

const PORT = process.env.PORT || 5000;

mongoose
  .connect('mongodb+srv://safe:safe123@cluster0.xmpmy.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
