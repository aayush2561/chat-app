import React from 'react';

const Messages = () => {
  return (
    <div className="flex-1 overflow-y-auto mb-4 p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
            <span className="text-sm font-bold">JD</span> 
          </div>
          <div className="bg-transparent border border-gray-500 p-3 rounded-full max-w-xs">
            <p className="text-white">Hey! How are you doing today?</p>
            <span className="text-xs text-gray-400 block mt-1">10:15 AM</span>
          </div>
        </div>

        <div className="flex items-start justify-end">
          <div className="bg-[#0462d4]  p-3 rounded-full max-w-xs">
            <p className="text-white">I'm good, thanks for asking!</p>
            <span className="text-xs text-gray-200 block mt-1 text-right">10:16 AM</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white ml-3">
            <span className="text-sm font-bold">ME</span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
