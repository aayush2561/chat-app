import {React,useEffect} from 'react';
import TopBar from './TopBar';
import Messages from './Messages';
import MessageInput from './MessageInput';
import useConversation from '../../store/useConversation';

const ChatMain = () => {
  const {selectedConversation,setselectedConversation}=useConversation ();
  useEffect(() =>{
    return () =>setselectedConversation(null)
  },[setselectedConversation]);

  return (
    <div className="flex flex-col h-full p-4 text-white bg-transparent relative">
     
     
      {selectedConversation ? (
        <>
         <TopBar />
         <div className="divider my-0 py-0 h-1"></div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full rounded-lg shadow-lg p-4">
          <p className="text-gray-400 text-lg font-semibold mb-4">No chat selected</p>
          <p className="text-gray-500">Please select a conversation from the list to start chatting.</p>
        </div>
      )}
    </div>
  );
};

export default ChatMain;
