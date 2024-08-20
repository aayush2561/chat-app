import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api_config } from '../config/Api_config';
import { toast } from 'react-toastify';

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(Api_config.LOGOUT_USER);
      toast.success('Logout successful!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Logout failed';
      toast.error(errorMessage);
    }
  };

  return {
    logout,
  };
};

export default useLogout;
