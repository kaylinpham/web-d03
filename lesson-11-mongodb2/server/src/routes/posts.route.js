const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts.controller");

router.get("/", postsController.getPosts);

router.get("/:id", postsController.getPostById);

router.post("/", postsController.createNewPost);

router.put("/:id", postsController.updatePostById);

router.delete("/:id", postsController.deletePostById);

module.exports = router;
