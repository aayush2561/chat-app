import {createContext,useContext,useEffect,useState} from "react";
import { useAuthcontext } from './AuthContext';
import io from "socket.io-client";

export const SocketContext =createContext();

export const useSocketContext =()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children }) => {
    const [socket,setSocket]=useState(null);
    const[onlineUsers,setOnlineUsers]=useState(null);
    const {authUser} =useAuthcontext();
    useEffect(() => {
        if(authUser){
            const socket=io(import.meta.env.VITE_API_URL,{
            query:{
                userId:authUser._id,
            }
        });
            setSocket(socket);
            socket.on("getOnlineUsers",(users)=> {
                setOnlineUsers(users);
            })
            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);
    return (
        <SocketContext.Provider value ={{socket,onlineUsers}}>{children}</SocketContext.Provider>
    )
}
