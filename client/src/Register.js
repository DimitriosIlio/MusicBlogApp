import React, { useState } from "react";
import "./form.css";
import axios from "axios";

function Register () {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (event) => {
        event.preventDefault();
        try {
            let user = { username, email, password };
            let res = await axios.post("http://localhost:8000/register", user);
            console.log(res.data);
        } catch (error) {}
    };
 
    return (
        <div className="form-container"> 
        <h1>SignUp</h1>
    )