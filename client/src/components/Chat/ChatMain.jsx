import React, { useEffect,useRef } from 'react';
import TopBar from './TopBar';
import Messages from './Messages';
import MessageInput from './MessageInput';
import useConversation from '../../store/useConversation';
import useGetMessages from '../../Hooks/useGetMessages';
import Loading from './Loading';

const ChatMain = () => {
  const { selectedConversation, setselectedConversation } = useConversation();
  const { messages, loading } = useGetMessages();
  const lastMessage =useRef();

  useEffect(() => {
    return () => setselectedConversation(null);
  }, [setselectedConversation]);

  useEffect(() => {
    setTimeout (()=> {
    lastMessage.current?.scrollIntoView({behavior :"smooth"});
  },100)
  },[messages])
  return (
    <div className="flex flex-col h-full p-4 text-white bg-transparent relative">
      {selectedConversation ? (
        <div className="flex flex-col h-full">
          <TopBar />
          <div className="divider my-0 py-0 h-1"></div>
          <div className="flex-1 overflow-auto">
            {!loading && messages.length > 0 ? (
              messages.map((message) =>
               <div key={message._id} ref={lastMessage}>
                <Messages  message={message} />
               </div> )
            ) : loading ? (
              [...Array(6)].map((_, idx) => <Loading key={idx} />)
            ) : (
              <p className="text-center">Send a message first.</p>
            )}
          </div>
          <MessageInput />
        </div>
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
