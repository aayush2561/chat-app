import useConversation from "../store/useConversation";
import { Api_config } from '../config/Api_config';
import { toast } from 'react-toastify';
import axios from 'axios';
const useSendMessage =() =>
{
const {messages,setmessages,selectedConversation}=useConversation();

const sendMessage  =async (message) =>{
    try {
        const response=  await axios.post(Api_config.SEND_MESSAGE(selectedConversation._id),{message},
        { withCredentials: true ,} 
          );
          const data=await response.data;
          if(data.error) throw new Error(data.error) ;
          setmessages([...messages,data]);
    } catch (error) {
     toast.error(error.message);
    }
}
return {sendMessage}
}

export default useSendMessage;