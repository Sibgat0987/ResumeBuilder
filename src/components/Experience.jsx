import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Experience() {
  const [experienceSection, setExperienceSection] = useState([{ id: 1 }]);
  const [employer, setEmployer] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');
  const [about, setAbout] = useState('');
  const navigate = useNavigate();

  const addExperienceSection = () => {
    setExperienceSection([...experienceSection, { id: experienceSection.length + 1 }]);
  };

  const deleteExperienceSection = (id) => {
    setExperienceSection(experienceSection.filter(section => section.id !== id));
  };

  const handleBackClick = () => {
    navigate('/education');
  };

  const handleNextClick = async () => {
    if (employer && company && address && role && about) {
      const experienceData = {
        employer,
        company,
        address,
        role,
        about,
      };
      try {
        await axios.post('http://localhost:5000/api/experience', experienceData);
        navigate('/projects');
      } catch (err) {
        console.error('Error submitting experience info:', err);
      }
    }
  };

  const isFormValid = employer && company && address && role;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className='shadow-custom bg-white rounded-2xl w-1000 min-h-full p-10 pl-12 pr-12 -mt-5'>
        <h2 className='text-start font-nunito font-bold text-xl mb-8'>Experience</h2>
        {experienceSection.map((section) => (
          <div key={section.id} className='mb-10'>
            {section.id >= 2 && (
              <div className='flex justify-end '>
                <img 
                  src="delete.jpg" 
                  alt="Delete" 
                  className='w-12 h-10 cursor-pointer mr-16'
                  onClick={() => deleteExperienceSection(section.id)} 
                />
              </div>
            )}
            <div className='grid grid-cols-2 gap-7'>
              <div>
                <h1 className='text-start font-nunito font-bold mb-3'>Employer</h1>
                <input 
                  type="text" 
                  className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
                  value={employer} 
                  onChange={(e) => setEmployer(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <h1 className='text-start font-nunito font-bold mb-3'>Company</h1>
                <input 
                  type="text" 
                  className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
                  value={company} 
                  onChange={(e) => setCompany(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <h1 className='text-start font-nunito font-bold mb-3'>Address</h1>
                <input 
                  type="text" 
                  className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <h1 className='text-start font-nunito font-bold mb-3'>Role</h1>
                <input 
                  type="text" 
                  className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
                  value={role} 
                  onChange={(e) => setRole(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <div className='mt-7'>
              <h1 className='text-start font-nunito font-bold mb-3'>About</h1>
              <textarea 
                className='border-2 p-2 w-full min-h-28 rounded-lg bg-inputColor border-inputBorder max-h-36'
                value={about} 
                onChange={(e) => setAbout(e.target.value)} 
              />
            </div>
            <div className='flex flex-col items-end pr-1 pt-4'>
              <img
                src='add.jpg'
                alt="Add"
                className='h-10 w-10 ml-11 mb-4 cursor-pointer'
                onClick={addExperienceSection}
              />
              <button
                className={`bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white ${!isFormValid && 'opacity-50 cursor-not-allowed'}`} 
                onClick={handleNextClick}
                disabled={!isFormValid}>
                Next Section
              </button>
            </div>
            <div className='flex items-start -mt-14'>
              <img src="back_arrow.png" alt="Back" className='h-16 w-16' onClick={handleBackClick} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;