import { useEffect, useState } from "react"
import { Api_config } from '../config/Api_config';
import { toast } from 'react-toastify';
import axios from 'axios';

const usegetConversation = () => {
  const [conversations,setConversations]=useState([]);

  useEffect (() => {
    const getConversations =async () =>{
        try {
            const response =await axios.get(Api_config.GET_USER,{
              withCredentials: true ,
            });
            const data = await response.data;
            if(data.error){
                throw new Error(data.error);
            }
            setConversations(data);
        } catch (error) {
            toast.error(error.message);
        }
    }
    getConversations();
  },[])
  return {conversations};
}

export default usegetConversation;
