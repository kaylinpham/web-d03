const Post = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  return res.status(200).json({
    isSuccess: true,
    message: "Successfully received",
    posts,
  });
};

module.exports.getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  if (!post) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the post's id.",
    });
  }

  return res.status(200).json({
    isSuccess: true,
    message: "Successfully received",
    post,
  });
};

module.exports.createNewPost = (req, res) => {
  const { author, body } = req.body;

  if (!author || !body) {
    return res.status(400).json({
      isSuccess: false,
      message: "Missing required fields",
    });
  }

  const newPost = new Post({ ...req.body });

  newPost.save(function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: "Database error",
      });
    } else {
      return res.status(200).json({
        isSuccess: true,
        message: "Post is successfully posted",
        newPost: doc,
      });
    }
  });
};

module.exports.updatePostById = (req, res) => {
  const { id } = req.params;

  Post.findByIdAndUpdate(id, req.body, function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: "Not found the post's id",
      });
    }
    return res.status.json({
      isSuccess: true,
      message: "Successfully update post",
      updatedPost: { ...doc._doc, ...req.body },
    });
  });
};

module.exports.deletePostById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);

  if (!post) {
    return res.status(500).json({
      isSuccess: false,
      message: "Not found the post's id",
    });
  }
  return res.status(200).json({
    isSuccess: true,
    message: "Success delete.",
    post,
  });
};
