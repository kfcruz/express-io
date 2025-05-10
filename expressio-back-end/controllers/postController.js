const Post = require("../models/postModel");
const mongoose = require("mongoose");

// get all posts
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// get a single post
const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post." });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: "No such post." });
  }

  res.status(200).json(post);
};

// create post
const createPost = async (req, res) => {
  const { user, desc } = req.body;

  // add doc to db
  try {
    const post = await Post.create({ user, desc });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({
      error: "Error: must include an image and message body into the field.",
    });
  }
};

// delete post
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post." });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(400).json({ error: "No such post." });
  }

  res.status(200).json(post);
};

// update post
const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post." });
  }

  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!post) {
    return res.status(400).json({ error: "No such post." });
  }

  res.status(200).json(post);
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
};
