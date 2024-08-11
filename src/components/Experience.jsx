import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Experience({ prevPath }) {
  const [experienceSection, setExperienceSection] = useState([{ id: 1, employer: '', company: '', address: '', role: '', about: '' }]);
  const navigate = useNavigate();

  const addExperienceSection = () => {
    setExperienceSection([...experienceSection, { id: experienceSection.length + 1, employer: '', company: '', address: '', role: '', about: '' }]);
  };

  const deleteExperienceSection = (id) => {
    setExperienceSection(experienceSection.filter(section => section.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setExperienceSection(experienceSection.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ));
  };

  const isFormValid = experienceSection.every(section => section.employer && section.company && section.address && section.role);

  const handleNextClick = () => {
    if (isFormValid) {
      navigate('/projects');
    }
  };

  const handleBackClick = () => {
    navigate('/education');
  };

  return (
    <div className='shadow-custom bg-white rounded-2xl min-h-full w-1000 p-7 pl-12 pr-12 -mt-5'>
      <h2 className='text-start font-nunito font-bold text-xl mb-8'>Experience</h2>
      {experienceSection.map((section) => (
        <div key={section.id} className='mb-10'>
          {section.id >= 2 && (
            <div className='flex justify-end'>
              <img 
                src="delete.jpg" 
                alt="Delete" 
                className='w-12 h-10 cursor-pointer mr-4'
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
                value={section.employer}
                onChange={(e) => handleInputChange(section.id, 'employer', e.target.value)}
                required 
              />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Company</h1>
              <input 
                type="text" 
                className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
                value={section.company}
                onChange={(e) => handleInputChange(section.id, 'company', e.target.value)}
                required 
              />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Address</h1>
              <input 
                type="text" 
                className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
                value={section.address}
                onChange={(e) => handleInputChange(section.id, 'address', e.target.value)}
                required 
              />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Role</h1>
              <input 
                type="text" 
                className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
                value={section.role}
                onChange={(e) => handleInputChange(section.id, 'role', e.target.value)}
                required 
              />
            </div>
          </div>

          <div className='mt-7'>
            <h1 className='text-start font-nunito font-bold mb-3'>About</h1>
            <textarea 
              name="message" 
              className='border-2 p-2 w-full min-h-28 rounded-lg bg-inputColor border-inputBorder max-h-36'
              value={section.about}
              onChange={(e) => handleInputChange(section.id, 'about', e.target.value)}
            />
          </div>

          <div className='flex flex-col items-end pr-4 pt-4'>
            <img
              src='add.jpg'
              alt="Add"
              className='h-10 w-10 ml-11 cursor-pointer'
              onClick={addExperienceSection}
            />
          </div>

          <div className='flex justify-between mt-4'>
          <div className='flex items-start -mt-14'>
            <img src="back_arrow.png" alt="Back" className='h-16 w-16' onClick={handleBackClick} />
          </div>
            <button 
              className={`bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
              onClick={handleNextClick}
              disabled={!isFormValid}
            >
              Next Session
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
