const express = require("express");
const router = express.Router();

const {
     getAllBlogs, 
     createNewBlog,
     deleteBlog,
     updateBlog,
     } = require("../controllers/blogController");


    
     router.post("/create", createNewBlog);
     router.get("/getAllBlogs");
     router.put("/:id",updateBlog);
     router.delete("/:id", deleteBlog);



module.exports = router;