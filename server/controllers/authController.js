const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const path = require('path');
const generateToken =require('../utils/generateToken')

async function signup(req, res) {
  try {
    const { username, fullname, password } = req.body;
    const ProfileImage = req.file ? req.file.filename : '';

    if (!username || !fullname || !password || !ProfileImage) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      ProfileImage,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    if (error.message.includes('Invalid file type')) {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Server error' });
  }
}

async function login (req,res){
  try{
    const {username,password ,rememberme}=req.body;
    const user = await User.findOne ({username});
    const isPasswordCorrect =await bcrypt.compare(password ,user.password || "");

    if(!user || !isPasswordCorrect){
      return res.status(400).json({error:"Invalid username or password"});
    }
    generateToken(user._id,rememberme,res);
    res.status(201).json({ message: 'User Logged in successfully' });
  }
  catch(error)
  {
    console.log("Error",error.message)
    res.status(500).json({error:"Internal server error "})
  }
}

async function logout(req,res) {
  try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"Logged out successfully"});
  }catch(error) {
    console.log("Error in logout controller",error.message);
    res.status(500).json({error:"Internal Server Error"});
  }
};

module.exports = {
  signup,
  login,
  logout,
};
