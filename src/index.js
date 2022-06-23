import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Header from './Header.js';
import Search from './Search.js'
import Footer from './Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Search city="Paris" />
    <Footer />
  </React.StrictMode>
);
