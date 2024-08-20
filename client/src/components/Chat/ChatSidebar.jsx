import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Conversation from './Conversation'

const ChatSidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      className={`p-4 border-r border-gray-500 overflow-y-auto rounded-lg ${
        isMobile ? 'w-full' : 'w-1/3'
      }`}
    >

      <div className="mb-4 flex items-center  border border-gray-500 rounded-lg p-2">
        <i className="fas fa-search text-gray-500 mr-2"></i>
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent text-white outline-none placeholder-gray-400"
        />
      </div>


      <div className="divider my-0 py-0 h-1" />


      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default ChatSidebar;
