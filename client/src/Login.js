import React, { useState } from "react";
import "./form.css";
import axios from "axios";

import { jwtDecode } from "jwt-decode";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let token;
    let decoded;

  
    const login = async (event) => {
        event.preventDefault();
        try{
            let user = { email,password };
            let res = await axios.post("http://localhost:8000/login", user);
             // console.log(res.data.token);
             alert(res.dara.token);
             token = res.data.token;
        }
    } 

}