import React from 'react'
import { Api_config } from '../../config/Api_config'
import useConversation from '../../store/useConversation'
import { useSocketContext } from '../../context/SocketContext.jsX'

const Conversation = ({conversation}) => {
  const {selectedConversation,setselectedConversation}=useConversation ();
  const isSelected =selectedConversation?._id === conversation._id;
  const {onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(conversation._id);
  return (
   
    <div className={`flex gap-2 items-center hover:bg-[#0462d4] rounded-full p-2 py-4 my-2  cursor-pointer
    ${isSelected ? "bg-[#0462d4]":""}`}
    onClick={() =>setselectedConversation(conversation)}>
    <div className={`avatar ${isOnline ? "online" :" "}`}>
     <div className="w-12 rounded-full">
    <img
      src={`${Api_config.UPLOAD_PROFILE}${conversation.ProfileImage}`}
      alt="user"
    />
    </div>
    </div>
    <div className="flex flex-col flex-1">
     <div className="flex gap-3 justify-between">
    <p className="font-bold text-white">{conversation.fullname}</p>
  </div>
</div>
</div>
  )
}

export default Conversation
