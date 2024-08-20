import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useLogout from '../Hooks/useLogout'; 

const Navbar = ({ onNavClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { logout } = useLogout();

  const handleClick = (section, e) => {
    e.preventDefault();
    onNavClick(section);
  };

  return (
    <nav className={`flex ${isMobile ? 'flex-row' : 'flex-col'} ${
      isMobile ? 'absolute bottom-0 w-full' : 'max-w-max space-y-10'
    }  ${isMobile ? 'justify-between items-center border-t border-gray-300' : 'flex-start' } p-4`}>
      <a href="/chat" onClick={(e) => handleClick('chat', e)} className="text-white text-2xl">
        <i className="fas fa-comments"></i>
      </a>
      <a href="/browse" onClick={(e) => handleClick('browse', e)} className="text-white text-2xl">
        <i className="fas fa-users"></i>
      </a>
      <a href="/story" onClick={(e) => handleClick('story', e)} className="text-white text-2xl">
        <i className="fas fa-book"></i>
      </a>
      <a href="/logout" onClick={(e) => { e.preventDefault(); logout(); }} className="text-white text-2xl">
        <i className="fas fa-sign-out-alt"></i>
      </a>
    </nav>
  );
};

export default Navbar;
