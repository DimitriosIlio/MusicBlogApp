import axios from "axios"
import React, { useEffect, useState } from "react";

function Blogs() {
    const[blogs,setBlogs] = useState([]);
    const getAllBlogs = async () => {
        let res = await axios.get("http://localhost:8000/blogs");
        console.log(res.data);
        setBlogs(res.data);
    }; 
    useEffect(() => {
        getAllBlogs();
    }, []);
    return (
        <div>
        {blogs.map((blog) => (
            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <img src={blog.imgUrl} alt={blog.title} />
                <h3>{blog.author.email}</h3>
                <p>{blog.content}</p>
            </div>
        ))}
    </div>
);
}
           
                
export default Blogs;