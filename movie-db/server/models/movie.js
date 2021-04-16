import mongoose from "mongoose";

const movieInfo = mongoose.Schema({
  title: String,
  message: String,
  movie_id: Number,
  overview: String,
});

const Movie = mongoose.model("Movie", movieInfo);

export default Movie;
