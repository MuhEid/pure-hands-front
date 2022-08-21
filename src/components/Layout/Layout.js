import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../routes/About';
import Home from '../routes/Home';
import Footer from './Footer';
import Header from './Header/Header';

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
