import { useState } from 'react';

const useSelectedSection = () => {
  const [selectedSection, setSelectedSection] = useState('chat');

  const handleNavClick = (section) => {
    setSelectedSection(section);
  };

  return {
    selectedSection,
    handleNavClick
  };
};

export default useSelectedSection;
