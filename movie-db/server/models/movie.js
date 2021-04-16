import mongoose from "mongoose";

const movie = mongoose.Schema({
  title: String,
  message: String,
  movie_id: Number,
});

const movie = mongoose.model("Movie", movie);

export default movie;
