import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";



function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Blogs />} />
        <Route path="/newBlog" element={<BlogForm />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
