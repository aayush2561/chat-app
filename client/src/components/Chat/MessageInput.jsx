import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const MessageInput = () => {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleEmojiPicker = () => setIsEmojiPickerOpen(!isEmojiPickerOpen);

  const handleEmojiClick = (emojiData) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
    setIsEmojiPickerOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <i
        className="far fa-smile text-xl mr-2 cursor-pointer"
        onClick={toggleEmojiPicker}
      ></i>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="flex-1 p-2 rounded-lg bg-transparent border border-gray-600 text-white"
      />
      <i className="fas fa-paper-plane text-xl ml-2 cursor-pointer"></i>
      {isEmojiPickerOpen && (
        <div className="absolute bottom-16 bg-gray-800 p-2 rounded-lg border border-gray-600">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default MessageInput;
