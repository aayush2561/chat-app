const express=require('express');
const {signup ,login ,logout} =require("../controllers/authController");
const upload=require('../config/Multerconfig')
const router=express.Router();

router.post("/signup" ,upload.single('profileImage'),signup);
router.post("/login",login);
router.post("/logout",logout);

module.exports=  router;