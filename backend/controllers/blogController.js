const { response } = require("express");
const Blog = require("../models/blogModel");

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("author");
        res.json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" }); status: false };
    };

// Get a single blog by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Create a new blog
const createBlog = async (req, res) => {
    try {
        console.log(req.user);
        const data = {
            title: req.body.title, 
            imgURL:req.body.imgUrl, 
            content: req.body.content,
            author: req.user.id,
        };

        const newBlog = await Blog.create(data);
        res.status(200).send({msg:"Blog created successfully", status:true, newBlog});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", status: false });
    }
};

// Update an existing blog by ID
const updateBlog = async (req, res) => {
    try {
     const { id } = req.params;
     const data = req.body;
     let updated = await Blog.updateOne({_id:id}, data);
     res.status(200).send({ msg: "updated successfully", status: true, updated  });
    }  catch (error) {
        res.status(500).send({ msg: "Internal server error", status: false });

     } 

};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await Blog.deleteOne({ _id: id });
        res.status(200).send({ msg: "deleted successfully", status:true })
    } catch (error) {
        res.status(500).send({ msg: "Internal server error", status: false });

    }
};
  


module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};
