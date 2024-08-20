// src/Hooks/useLogin.js
import { useState } from 'react';
import axios from 'axios';
import { Api_config } from '../config/Api_config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response =await axios.post(Api_config.LOGIN_USER, { username, password, rememberme });
      toast.success('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 2000); 
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Invalid username or password';
      toast.error(errorMessage);
    }
  };

  const handleRemembermeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    rememberme,
    handleRemembermeChange,
    handleSubmit,
  };
};

export default useLogin;
