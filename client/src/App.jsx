import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Landing from './pages/Landing/Landing';
import { useAuthcontext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthcontext();
  
  return (
    <Router>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route 
            path="/" 
            element={authUser ? <Landing /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/login" 
            element={authUser ? <Navigate to="/" /> : <Login />} 
          />
          <Route 
            path="/signup" 
            element={authUser ? <Navigate to="/" /> : <Signup />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
