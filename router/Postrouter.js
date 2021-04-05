const express = require("express");
const router = require("express").Router();
// const router = express.Router();

const postController = require("../controllers/PostController");

router.get("/", postController.getAllPost);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
