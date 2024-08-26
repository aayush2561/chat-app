import React from 'react';
import { useAuthcontext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import { convertToNepaliTime} from '../../utils/useConvertoNepali'; 
import { Api_config } from '../../config/Api_config';
import useListenMessage from '../../Hooks/useListenMessage';


const Messages = ({ message }) => {
  const { authUser } = useAuthcontext();
  useListenMessage();
  const { selectedConversation } = useConversation();
  const fromme = message.senderId === authUser._id;
  const chatClassName = fromme ? 'chat-end ' : 'chat-start ';
  const profilepic = fromme
    ? `${Api_config.UPLOAD_PROFILE}${authUser.ProfileImage}`
    : `${Api_config.UPLOAD_PROFILE}${selectedConversation.ProfileImage}`;
  const bubbleBgcolor = fromme ? 'bg-[#0462d4]' : 'bg-transparent border border-gray-500';


  const formattedTime = convertToNepaliTime(message.createdAt || null) ;

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='profile' src={profilepic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgcolor}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  );
};

export default Messages;
