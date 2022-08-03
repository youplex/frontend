import React from 'react';
import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
      </Routes>
    
    
    </BrowserRouter>
  
);


