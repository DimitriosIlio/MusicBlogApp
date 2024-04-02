import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar."; 
import Login from "./components/Login";
import Register from "./components/Register";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <BrowserRouter> 
     <NavBar /> {/* Render NavBar component */}
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Blogs />} />
        <Route path="/new" element={<BlogForm />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
