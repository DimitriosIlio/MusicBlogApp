import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";

function Navbar() {
    return (
        <div>
            <div className=".navbar"> </div>
            <div className="logo"> {/* Place className inside curly braces */}
                <h1>MusicBlogApp</h1>
            </div>
            <div className="links"> {/* Place className inside curly braces */}
                <Link to="/Blogs">Login</Link> {/* Use to instead of href */}
                <Link to="/new">Post New Blog</Link> {/* Use to instead of href */}
                <Link to="/login">Login</Link> {/* Use to instead of href */}
                <Link to="/register">SignUp</Link> {/* Use to instead of href */}
            </div> {/* Add closing tag */}
        </div>
    );
}

export default Navbar;
