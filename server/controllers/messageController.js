const Conversation =require('../models/conversationModel');
const Message=require('../models/messageModel');
async function sendMessage(req, res) {
    try{
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;

        let conversation =await Conversation.findOne({
            participants :{$all :[senderId,receiverId]},

        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],

            })
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await conversation.save();
        await newMessage.save();
    }
    catch(error){
        console.log("Eroor in sending message",error.message)
        res.status(500).json({error:"Internal server error"});
    }
}

async function getMessage(req, res) {
    try{
        const {id:userToChatId}=req.params;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId , userToChatId]},
        }).populate('messages');
        if(!conversation) {
            res.status(200).json([])
       }
       const messages=conversation.messages;
        res.status(200).json(messages);
        

    }catch(error){
        res.status(500).json({error:"Internal Server Error"});
    }

}

module.exports ={sendMessage,getMessage}