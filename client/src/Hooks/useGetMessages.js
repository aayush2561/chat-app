import { useEffect, useState } from "react"
import useConversation from "../store/useConversation"
import { toast } from 'react-toastify';
import { Api_config } from "../config/Api_config";
import axios from "axios";

const useGetMessages = () => {
    const {messages,setmessages,selectedConversation}=useConversation();
    const [loading,setLoading]=useState(false);
    useEffect (() => {
        const getMessages =async () =>{
            setLoading(true);
            try {
                const response=await axios.get(Api_config.GET_MESSAGE(selectedConversation._id),   { withCredentials: true } );
                const data =await response.data;
                if(data.error ) throw new Error(data.error);
                setmessages(data);
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false);
            }
        }
        if(selectedConversation?._id) getMessages();

    },[selectedConversation?._id,setmessages]);

    return {messages,loading};
    }


export default useGetMessages
