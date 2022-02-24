import PostMessage from "../models/postMessege.js";
import mongoose from "mongoose";
export const getposts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const CreatePost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
     const { id } = req.params;
     const { title, message, creator, selectedFile, tags } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).send("this id doesn't exist");
  const updatedpost = { title, message, creator, selectedFile, tags, _id: id }
    try{
     await PostMessage.findByIdAndUpdate(id, updatedpost, {new: true });
     res.json(updatedpost);
  } catch (error) {
    console.log(error.message);
  }
};
export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("this id doesn't exist");
  try {
    const post = await PostMessage.findById(id);
    const updatedpost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    res.json(updatedpost);
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("this id doesn't exist");
  try {
    await PostMessage.findByIdAndRemove(id);
    res.json({ message:" post successfully deleted "});
  } catch (error) {
    console.log(error.message);
  }
};
