const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        if (!email || !username || !password) {
            return res.send({ msg: "All data is required" });
        }
        let oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.send({ 
                msg: "User already exists, please login or register with a new email",
            });
        }

        let hashPassword = await bcrypt.hash(password, +process.env.SALT_ROUND);
        await User.create({ username, email, password: hashPassword });
        return res.send({ msg: "Registered successfully" });
    } catch (error) {
        console.log(error);
        return res.send({ msg: "Internal server error, cannot register" });
    }
};

 let token = jwt.sign(
    { email: user.email, id:user._id };
    process.env.SECRET_KEY
 );
 res.send({ msg: "Login successfully", token });
 } catch (error) {
    console.log(error);
    res.send({ msg: "Internal server error"});
 }
};


const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.send({ msg: "Both email and password are required" });
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.send({ msg: "User not found, please check your email or register again" });
        }
        let isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.send({ msg: "Invalid or wrong password" });
        }
        let token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.SECRET_KEY
        );
        res.send({ msg: "Login successfully", token });
    } catch (error) {
        console.log(error);
        res.send({ msg: "Internal server error" });
    }
};

module.exports = { login, register };
