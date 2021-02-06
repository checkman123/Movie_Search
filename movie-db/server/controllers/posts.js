//Desc: All handlers for routes
// status(2xx) - Success
// status(4xx) - Client error

import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {}
  res.status(409).json({ message: error.message });
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  
  //is ID is valid?
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);


  const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

  res.json(updatedPost);
}

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  console.log('DELETE!');

  res.json({message: 'Post deleted successfully'})
}

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, { new: true });



  res.json(updatedPost);
}