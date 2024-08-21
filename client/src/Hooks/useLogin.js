// src/Hooks/useLogin.js
import { useState } from 'react';
import axios from 'axios';
import { Api_config } from '../config/Api_config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthcontext } from '../context/AuthContext';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const{setAuthUser} =useAuthcontext();

  const handleSubmit = async (event) => {
    event.preventDefault();
      try{
      const response =await axios.post(Api_config.LOGIN_USER, { username, password, rememberme },
        { withCredentials: true } 
      );
      const data = await response.data;
      localStorage.setItem("chat-user",JSON.stringify(data));
      setAuthUser(data);
      toast.success('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 1000); 
      }
      catch(error){
        toast.error(error.message);
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
