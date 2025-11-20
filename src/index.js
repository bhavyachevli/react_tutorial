import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/Home';
import About from './About/About';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Shop from './Shop/Shop';
import Review from './Review/Review';
import Contact from './Contact/Contact';
import Admin from './Admin/Admin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/review" element={<Review/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </HashRouter>
  </>
);

