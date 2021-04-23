import mongoose from "mongoose";

const movieList = mongoose.Schema({
  title: {type: String, required: true},
  user_list_id: {type: String, required: true},
  movie_id: [String],
  description: String,
});

const MovieList = mongoose.model("MovieList", movieList);

export default MovieList;