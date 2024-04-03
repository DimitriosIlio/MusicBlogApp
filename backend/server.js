const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/userModel"); // Import the User model
const db = require("./connection")

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Import the userRoutes
app.use("/user", require("./routers/userRouters"));
app.use("blogs", require("./routers/blogRouters"));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Login endpoint
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ msg: "Both email and password are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ msg: "User not found, please check your email or register again" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ msg: "Invalid or wrong password" });
        }
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY);
        res.send({ msg: "Login successfully", token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal server error" });
    }
});

// Register endpoint
app.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send({ msg: "Username, email, and password are required" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send({ msg: "User already exists, please login or register with a new email" });
        }
        const hashPassword = await bcrypt.hash(password, +process.env.SALT_ROUND);
        await User.create({ username, email, password: hashPassword });
        res.status(201).send({ msg: "Registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal server error, cannot register" });
    }
});
