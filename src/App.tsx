import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import {DirectionContextProvider} from './components/DirectionContext'
import Navbar from './components/Navbar'
import About from './components/About/About'
import { AnimatePresence } from 'framer-motion';


function App() {
  const location =  useLocation();
  return (
    <div className=" bg-primary
    overflow-hidden h-screen w-full static  text-white">
      <DirectionContextProvider>
        <Navbar/>
        <AnimatePresence >
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </DirectionContextProvider>
    </div>
  );
}

export default App;


