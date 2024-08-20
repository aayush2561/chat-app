import React from 'react';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40" // Replace with actual profile image URL
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">Username</p>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>
      <i className="fas fa-video text-2xl cursor-pointer"></i>
    </div>

  );
};

export default TopBar;
