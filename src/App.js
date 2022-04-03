import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
