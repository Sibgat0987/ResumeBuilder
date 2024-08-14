import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="flex justify-center items-center min-h-screen pl-16">
      <nav className='w-64 h-144 shadow-custom rounded-2xl  p-5 bg-white flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-5 w-full'>
          <Link to="/personal-info" className='bg-customPurple rounded-2xl
            pt-3 pb-3 pl-5 pr-5 text-center text-lg font-nunito text-white'>
            Personal Information
          </Link>
          <Link to="/education" className='bg-customPurple rounded-2xl
            pt-3 pb-3 pl-5 pr-5 text-center text-lg font-nunito text-white'>
            Education
          </Link>
          <Link to="/experience" className='bg-customPurple rounded-2xl
            pt-3 pb-3 pl-5 pr-5 text-center text-lg font-nunito text-white'>
            Experience
          </Link>
          <Link to="/projects" className='bg-customPurple rounded-2xl
            pt-3 pb-3 pl-5 pr-5 text-center text-lg font-nunito text-white'>
            Projects
          </Link>
          <Link to="/contact" className='bg-customPurple rounded-2xl
            pt-3 pb-3 pl-5 pr-5 text-center text-lg font-nunito text-white'>
            Contact Information
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
