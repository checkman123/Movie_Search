import mongoose from "mongoose";

const movieList = mongoose.Schema({
  title: {type: String, required: true},
  user_list_id: {type: String, required: true},
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const MovieList = mongoose.model("MovieList", movieList);

export default MovieList;