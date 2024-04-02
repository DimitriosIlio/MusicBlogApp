import React, { useState } from "react"; 
import axios from "axios";

function Register () {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const register = async (event) => {
        event.preventDefault();
        try {
            let user = { username, email, password };
            let res = await axios.post("http://localhost:8000/user/register", user);
            console.log(res.data);
        } catch (error) {
            console.error(error);
            setError("Registration failed. Please try again later.");
        }
    };
 
    return (
        <div className="form-container"> 
            <h1>Sign Up</h1>
            {error && <p>{error}</p>}
            <form onSubmit={register}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div> 
    );
}

export default Register;
