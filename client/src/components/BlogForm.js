import React, { useState } from "react";
import axios from "axios";

function BlogForm() {
    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [content, setContent] = useState("");

    const createBlog = async (event) => {
        event.preventDefault(); 
        try { 
            let blogInfo ={ title, imgUrl, content };
            let res = await axios.post("http://localhost:8000/blogs/create", blogInfo);
            console.log(res.data); 
        } catch (error) {
            console.error(error); 
        }
    }; 

    return (
        <div>
            <form onSubmit={createBlog}>
                <input placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input placeholder="content" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                <input placeholder="imgUrl" type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                <input type="submit" value="Create Blog" />
            </form>
        </div>
    );
}

export default BlogForm;
