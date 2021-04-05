const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide the post name."],
    },
    content: {
      type: String,
      required: [true, "Please provide the content"],
    },
    author: {
      type: String,
      required: [true, "Please provide the author"],
    },
    description: String,
  },
  {
    timestamp: true,
  }
);
module.exports = model("Post", postSchema);
