import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let token;

    const login = async (event) => {
        event.preventDefault();
        try {
            let user = { email, password };
            let res = await axios.post("http://localhost:8000/user/login", user);
            alert(res.data.token);
            token = res.data.token;
            localStorage.setItem("token", token);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
