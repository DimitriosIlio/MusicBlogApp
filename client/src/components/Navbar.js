import React from "react";
import { Link } from "react-router-dom"; 
import { jwtDecode }  from "jwt-decode"; // Correct import statement for jwtDecode
import "./navbar.css";

function Navbar() {
    let token = localStorage.getItem("token");
    let decoded; 

    if (token) {
        decoded = jwtDecode(token);
        console.log(decoded);
    } else {
        token = null;
    }

    function handleLogout() {
        if (localStorage.getItem("token")) {
            if (window.confirm("Are you sure you want to Log Out?")) {
                localStorage.removeItem("token");
                alert("Logout");
            } else {
                return;
            }
        }
    }

    return (
        <div className="navbar">
          <div className="logo">
            <h1>Groovify</h1>
          </div>
          <div className="links"> 
            {token ? (
              <>
                <Link to="/profile">{decoded.email}</Link>
                <Link to="/">Blogs</Link>
                <Link to="/new">Post New Blog</Link>
                <Link onClick={handleLogout} to="/">Logout</Link>
              </>
            ) : (
              <>

<div className="logo">
            <h1>Music App</h1>
          </div>
                <div className="links">
                <Link to="/">Listen to Music</Link>
                <Link to="/login">Login</Link> 
                <Link to="/signup">Sign Up</Link> 
                <Link to="/logout">Log Out</Link> 
                </div>  
              </>
            )}
          </div> 
        </div> 
      );
      
}

export default Navbar;
