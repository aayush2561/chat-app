import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <App />
    <ToastContainer 
      position="bottom-right" 
      autoClose={5000} 
      hideProgressBar={false} 
      closeOnClick
      pauseOnHover
      draggable
    />
    </AuthContextProvider>
  </StrictMode>,
)
