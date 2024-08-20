const express=require("express");
const router=express();
const {protectedRoute} =require('../middleware/protectedRoute');
const {getUsers}=require('../controllers/userController');

router.get('/',protectedRoute,getUsers);

module.exports= router;