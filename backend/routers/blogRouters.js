const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");


// Import the controller functions for handling blog post operations
const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
} = require("../controllers/blogController");

// Routes for handling blog post operations
router.get("/", getAllBlogs); // Route to get all blog posts
router.get("/:id", getBlogById); // Route to get a specific blog post by its ID
router.post("/", verifyToken, createBlog); // Route to create a new blog post
router.put("/:id", updateBlog); // Route to update a specific blog post by its ID
router.delete("/:id", deleteBlog); // Route to delete a specific blog post by its ID

module.exports = router;
