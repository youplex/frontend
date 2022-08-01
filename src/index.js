import React from 'react';
import './index.css';
import App from './App';
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
        
      </Routes>
    
    
    </BrowserRouter>
  
);


