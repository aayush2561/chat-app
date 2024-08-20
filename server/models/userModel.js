const mongoose =require("mongoose");
const{Schema } =mongoose;
const userSchema = new Schema({

    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:50,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    ProfileImage:{
        type:String,
        default:"",
    },
})


const User=mongoose.model("User",userSchema);
module.exports = User;