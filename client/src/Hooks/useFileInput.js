import { useRef } from 'react';

const useFileInput = () => {
  const fileInputRef = useRef(null);

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return { fileInputRef, triggerFileInput };
};

export default useFileInput;
