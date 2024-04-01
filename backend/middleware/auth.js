const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const headers = req.headers.authorization;
     // console.log("headers",headers);
     if (!headers) {
        return res.status(403).send({ msg: "Token not found, unauthorized" });
     } 
     let clientToken = headers.split(" ")[1];
     let verifiedToken = jwt.verify(clientToken, process.env.SECRET_KEY);
      // console.log(verifiedToken);
       if (!verifiedToken) {
        return res.status(401).send({ msg: "Invalid token, unauthorized" });
       } else {
        req.user = verifiedToken; 
        next();
       }
};


module.exports = verifyToken;

