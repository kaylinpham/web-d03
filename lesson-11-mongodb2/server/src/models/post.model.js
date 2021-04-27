const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    author: String,
    body: String,
    reaction: {
      like: { type: Number, default: 0, min: 0 },
      smile: { type: Number, default: 0, min: 0 },
      love: { type: Number, default: 0, min: 0 },
      angry: { type: Number, default: 0, min: 0 },
      surprise: { type: Number, default: 0, min: 0 },
    },
    comments: [
      {
        author: String,
        body: String,
      },
    ],
    posted: { type: Date, default: Date.now },
  },
  {
    collection: "Posts",
  }
);

module.exports = mongoose.model("Post", postSchema);
