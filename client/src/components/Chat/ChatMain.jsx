import React from 'react';
import TopBar from './TopBar';
import Messages from './Messages';
import MessageInput from './MessageInput';

const ChatMain = () => {
  return (
    <div className="flex flex-col h-full p-4 text-white bg-transparent relative">
      <TopBar />
      <div className="divider my-0 py-0 h-1" ></div>
      <Messages />
      <MessageInput />
    </div>
  );
};

export default ChatMain;
