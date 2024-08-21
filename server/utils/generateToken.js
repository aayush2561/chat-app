const jwt = require("jsonwebtoken");
const generateToken = (userId ,rememberMe, res ) => {
    const tokenExpiry = rememberMe ? "3d" : "20m";
    const cookieMaxAge = rememberMe ? 3 * 24 * 60 * 60 * 1000 : 20 * 60 * 1000; 

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: tokenExpiry,
    });
    
     res.cookie("jwt", token, {
        maxAge: cookieMaxAge,
        httpOnly: true,
    });
};

module.exports= generateToken;
