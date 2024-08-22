import React  from 'react';
import useConversation from '../../store/useConversation';
import { Api_config } from '../../config/Api_config';
const TopBar = () => {
  const {selectedConversation,setselectedConversation}=useConversation ();

  return (
    
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          src={`${Api_config.UPLOAD_PROFILE}${selectedConversation.ProfileImage}`}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{selectedConversation.fullname}</p>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>
      <i className="fas fa-video text-2xl cursor-pointer  hover:text-green-500"></i>
    </div>

  );
};

export default TopBar;
