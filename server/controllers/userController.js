const User = require("../models/userModel");

async function getUsers(req, res) {
try{
 const loggedInusers=req.user._id;
 const filteredUser=await User.find({_id:{ $ne :loggedInusers}}).select("-password");
 res.status(200).json(filteredUser);
}
catch(error)
{
    res.status(500).json({error: "Internal server error"});
}
}

module.exports ={getUsers};