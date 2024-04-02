import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";
import {  jwtDecode } from "jwt-decode"; // Correct import statement for jwtDecode

function Navbar() {
    let token = localStorage.getItem("token");
    let decoded; 

    if (token) {
        decoded = jwtDecode(token);
        console.log(decoded);
    } else {
        token = null;
    }

    return (
        <div className="navbar"> {/* Remove dot from className */}
            <div className="logo"> {/* Remove dot from className */}
                <h1>MusicBlogApp</h1>
            </div>
            <div className="links"> {/* Remove dot from className */}
                {token ? ( // Use ternary operator for conditional rendering
                    <>
                        <Link to="/new">Post New Blog</Link>
                        <Link to="/blogs">Blogs</Link> {/* Correct path to "Blogs" */}
                        <Link to="/logout">Logout</Link> {/* Correct path to "Logout" */}
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link> 
                        <Link to="/register">Sign Up</Link> 
                    </>
                )}
            </div> 
        </div>
    );
}

export default Navbar;
