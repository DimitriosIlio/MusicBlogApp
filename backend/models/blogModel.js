const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
 {  
     title: String,
     content: String,
     imgUrl: String,
     author: { type: mongoose.Schema.Types.ObjectId, ref: "User" };

 },
 { timestamps: true }
);

//Model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;