import React from 'react';
import { Link } from 'react-router-dom';
import usePasswordToggle from '../../Hooks/usePasswordToggle';
import useFileInput from '../../Hooks/useFileInput';
import useSignup from '../../Hooks/useSignup';

const Signup = () => {
  const { showPassword, togglePassword } = usePasswordToggle();
  const { fileInputRef, triggerFileInput } = useFileInput();
  const {
    username,
    setUsername,
    fullname,
    setFullname,
    password,
    setPassword,
    file,
    handleFileChange,
    handleSubmit,
  } = useSignup();

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-900 rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-500">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full h-10 pl-12 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 fas fa-user"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Fullname"
                className="w-full h-10 pl-12 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 fas fa-id-badge"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full h-10 pl-12 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 fas fa-lock"></i>
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Profile Image</span>
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="w-full h-10 pl-12 bg-transparent border border-gray-500 text-gray-300 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 hidden"
              />
              <button
                type="button"
                onClick={triggerFileInput}
                className="relative w-full h-10 bg-transparent border border-gray-500 text-gray-300 rounded-full flex items-center justify-center"
              >
                <i className="fas fa-image"></i>
                <span className="ml-2 text-sm">Upload Image</span>
              </button>
            </div>
          </div>
          <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </Link>
          <div>
            <button type="submit" className="w-full h-12 bg-transparent border border-gray-500 text-gray-300 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
