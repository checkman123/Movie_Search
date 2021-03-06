import mongoose from "mongoose";

const movieInfo = mongoose.Schema({
  title: String,
  movie_id: Number,
  overview: String,
  poster_path: String,
  genres : [{
    id : String,
    name : String
     }],
  release_date: String,
  movie_list_id: [String],
});

const Movie = mongoose.model("Movie", movieInfo);

export default Movie;
