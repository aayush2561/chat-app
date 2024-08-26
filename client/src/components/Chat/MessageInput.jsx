import React, { useState } from 'react';
import useSendMessage from '../../Hooks/useSendMessage';
import EmojiPicker from 'emoji-picker-react';

const MessageInput = () => {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { sendMessage } = useSendMessage();

  const toggleEmojiPicker = () => setIsEmojiPickerOpen(!isEmojiPickerOpen);

  const handleEmojiClick = (emojiData) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
    setIsEmojiPickerOpen(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Ensure message is not just whitespace
    try {
      await sendMessage(message);
      setMessage(""); // Clear the input field
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="relative flex items-end">
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
      <i
        className="fas fa-paper-plane text-xl ml-2 cursor-pointer"
        onClick={handleClick}
      ></i>
      {isEmojiPickerOpen && (
        <div className="absolute bottom-16 bg-gray-800 p-2 rounded-lg border border-gray-600">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default MessageInput;
