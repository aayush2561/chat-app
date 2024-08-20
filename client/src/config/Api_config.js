const API_URL =import.meta.env.VITE_API_URL;

export const Api_config = {
  SIGNUP_USER:`${API_URL}/api/v1/auth/signup`,
  LOGIN_USER:`${API_URL}/api/v1/auth/login`,
  LOGOUT_USER:`${API_URL}/api/v1/auth/logout`,

  GET_USER:`${API_URL}/api/v1/users`,
  
};

