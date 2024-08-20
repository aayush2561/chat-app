const express =require("express");
const router=express();
const {sendMessage,getMessage}=require('../controllers/messageController');
const {protectedRoute} =require('../middleware/protectedRoute');

router.post("/send/:id",protectedRoute,sendMessage)
router.get("/:id",protectedRoute,getMessage)

module.exports= router;