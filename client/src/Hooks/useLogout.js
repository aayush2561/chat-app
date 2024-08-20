import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api_config } from '../config/Api_config';
import { toast } from 'react-toastify';
import { useAuthcontext } from '../context/AuthContext';

const useLogout = () => {
  const navigate = useNavigate();
  const {setAuthUser}=useAuthcontext();

  const logout = async () => {
    try {
      await axios.post(Api_config.LOGOUT_USER);
      toast.success('Logout successful!');
      localStorage.removeItem("chat-user");
      setAuthUser(null);
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
