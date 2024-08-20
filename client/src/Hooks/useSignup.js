import { useState } from 'react';
import axios from 'axios';
import { Api_config } from '../config/Api_config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('fullname', fullname);
    formData.append('password', password);
    if (file) {
      formData.append('profileImage', file);
    }

    try {
      await axios.post(Api_config.SIGNUP_USER, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000); 
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Signup failed. Please try again.';
      toast.error(errorMessage);
    }
  };

  return {
    username,
    setUsername,
    fullname,
    setFullname,
    password,
    setPassword,
    file,
    handleFileChange,
    handleSubmit,
  };
};

export default useSignup;
