import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ml-28">
          <Routes>
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/education" element={<Education/>} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contacts/>} />
            <Route path="/" element={<PersonalInfo />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;



