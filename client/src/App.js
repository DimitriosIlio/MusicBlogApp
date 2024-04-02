import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter> 
      {/* Render NavBar component */}
      <NavBar />
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
