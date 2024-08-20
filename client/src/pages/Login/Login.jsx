import React from 'react';
import { Link } from 'react-router-dom';
import usePasswordToggle from '../../Hooks/usePasswordToggle';
import useLogin from '../../Hooks/useLogin';

const Login = () => {
  const { showPassword, togglePassword } = usePasswordToggle();
  const { username, setUsername, password, setPassword, rememberme, handleRemembermeChange, handleSubmit } = useLogin();

  return (
    <div className="flex flex-col items-center justify-center min-w-full p-4 md:p-6">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-500">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-300">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-base text-gray-300 mb-1">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full h-10 pl-10 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 fas fa-user"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-base text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full h-10 pl-10 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 fas fa-lock"></i>
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberme"
              checked={rememberme}
              onChange={handleRemembermeChange}
              className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2"
            />
            <label htmlFor="rememberme" className="text-gray-300 text-sm">
              Remember me
            </label>
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Don't have an account?
          </Link>
          <div className="mt-4">
            <button type="submit" className="w-full py-2 px-4 bg-transparent border border-gray-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
