import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";
import { jwtDecode } from "jwt-decode";


function Navbar() {
    let token ;
    let decoded; 
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");
        decoded = jwtDecode(token);
            console.log(decoded);
    } else {
        return;
    }
    return (
        <div className="navbar"> {/* Remove the dot from className */}
            <div className="logo"> {/* Remove the dot from className */}
                <h1>MusicBlogApp</h1>
            </div>
            <div className="links"> {/* Remove the dot from className */}
                <Link to="/Blogs">Blogs</Link> {/* Use to instead of href */}
                <Link to="/new">Post New Blog</Link> {/* Use to instead of href */}
                <Link to="/login">Login</Link> {/* Use to instead of href */}
                <Link to="/register">Sign Up</Link> {/* Use to instead of href */}
            </div> {/* Close the div */}
        </div>
    );
}

export default Navbar;
