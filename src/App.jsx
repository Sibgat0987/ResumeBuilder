import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
function App() {
  return (
    <Router>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ml-28">
          <Routes>
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/education" element={<Education />} />
            <Route path="/" element={<PersonalInfo />} /> {/* Default route */}
            <Route path="/experience" element={<Experience/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

