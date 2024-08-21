const express =require('express')
const app=express();
const cors=require('cors');
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/authRoute');
const messageRoutes=require('./routes/messageRoutes');
const userRoutes=require('./routes/userRoutes')
const corsOptions=require('./config/Corsconfig');
const db=require('./config/db')
const path=require('path');
const port=3000;


app.use(express.json());
app.use(cors(corsOptions));
app.use('/uploads', express.static(path.join(__dirname ,'uploads')));
app.use(cookieParser());

db();

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/message",messageRoutes);

app.listen(port,() =>{
    console.log(`Server is listening at ${port}`);
})