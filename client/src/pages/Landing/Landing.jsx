import React from 'react';
import Navbar from '../../components/Navbar';
import { useMediaQuery } from 'react-responsive';
import ChatMain from '../../components/Chat/ChatMain';
import ChatSidebar from '../../components/Chat/ChatSidebar';
import BrowseFriends from '../../components/BrowseFriends';
import StoriesList from '../../components/StoriesList';
import useSelectedSection from '../../Hooks/useSelectedSection';


const Landing = () => {
  const { selectedSection, handleNavClick } = useSelectedSection();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const renderContent = () => {
    switch (selectedSection) {
      case 'chat':
        return (
          <div className="flex h-full">
          <ChatSidebar />
          {!isMobile && (
            <div className="flex-grow">
              <ChatMain />
            </div>
          )}
        </div>
        );
      case 'browse':
        return <BrowseFriends />;
      case 'story':
        return <StoriesList />;
      default:
        return <div>Welcome! Please select an option.</div>;
    }
  };

  return (
    <div className="flex h-screen w-screen m-0 p-0 bg-gray-900 rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-500">
      <Navbar onNavClick={handleNavClick} />
      <div
        className={` h-full ${
          isMobile ? 'w-full' : 'flex-grow border-l border-gray-500 mr-4'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};
export default Landing;
