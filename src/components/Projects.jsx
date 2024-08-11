import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const [projectSections, setProjectSections] = useState([{ id: 1, name: '', link: '', description: '' }]);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/experience');
  };

  const addProjectSection = () => {
    setProjectSections([...projectSections, { id: projectSections.length + 1, name: '', link: '', description: '' }]);
  };

  const deleteProjectSection = (id) => {
    setProjectSections(projectSections.filter(section => section.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setProjectSections(projectSections.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ));
  };

  const isFormValid = projectSections.every(section => section.name && section.link);

  const handleNextClick = () => {
    if (isFormValid) {
      navigate('/contact');
    }
  };

  return (
    <div className='shadow-custom bg-white rounded-2xl p-7 pl-12 pr-12 -mt-5 mr-7'>
      <h2 className='text-start font-nunito font-bold text-2xl mb-8'>Projects</h2>
    
      {projectSections.map((section) => (
        <div key={section.id} className='mb-10'>
          {section.id >= 2 && (
            <div className='flex justify-end'>
              <img 
                src="delete.jpg" 
                alt="Delete" 
                className='w-12 h-12 cursor-pointer'
                onClick={() => deleteProjectSection(section.id)} 
              />
            </div>
          )}
          <div className='grid grid-cols-2 gap-7'>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Name</h1>
              <input
                type="text"
                className="border-2 p-2 w-full rounded-lg bg-inputColor border-inputBorder"
                value={section.name}
                onChange={(e) => handleInputChange(section.id, 'name', e.target.value)}
                required
              />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Link</h1>
              <input
                type="text"
                className="border-2 p-2 w-full rounded-lg bg-inputColor border-inputBorder"
                value={section.link}
                onChange={(e) => handleInputChange(section.id, 'link', e.target.value)}
                required
              />
            </div>
          </div>
          <div className='mt-7'>
            <h1 className='text-start font-nunito font-bold mb-3'>Description</h1>
            <textarea
              name="message"
              className='border-2 p-2 w-full min-h-28 rounded-lg bg-inputColor border-inputBorder max-h-36'
              value={section.description}
              onChange={(e) => handleInputChange(section.id, 'description', e.target.value)}
            ></textarea>
          </div>
        </div>
      ))}
      <div className='flex flex-col items-end pr-16 pt-4'>
        <img
          src='add.jpg'
          alt="Add"
          onClick={addProjectSection}
          className='h-10 w-10 ml-11 cursor-pointer'
        />
        <button 
          className={`bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center mt-12 text-lg font-nunito text-white ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
          onClick={handleNextClick}
          disabled={!isFormValid}
        >
          Next Session
        </button>
      </div>
      <div className='flex items-start -mt-14'>
        <img src="back_arrow.png" alt="Back" className='h-16 w-16 cursor-pointer' onClick={handleBackClick} />
      </div>
    </div>
  );
}

export default Projects;
