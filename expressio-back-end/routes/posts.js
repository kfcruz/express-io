const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");

// creates instance of router
const router = express.Router();

// GET all posts
router.get("/", getPosts);

// GET a single post
router.get("/:id", getPost);

// POST a post
router.post("/", createPost);

// DELETE a post
router.delete("/:id", deletePost);

// UPDATE a post
router.patch("/:id", updatePost);

module.exports = router;
