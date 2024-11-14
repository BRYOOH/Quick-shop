import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ClothingContextProvider from './Components/Context/ClothingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClothingContextProvider>
   <App />
  </ClothingContextProvider>
 
);
