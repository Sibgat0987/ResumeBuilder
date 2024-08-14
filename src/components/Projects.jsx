import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Projects() {
  const [projectSections, setProjectSections] = useState([{ id: 1 }]);
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const navigate = useNavigate();

  const addProjectSection = () => {
    setProjectSections([...projectSections, { id: projectSections.length + 1 }]);
  };

  const deleteProjectSection = (id) => {
    setProjectSections(projectSections.filter(section => section.id !== id));
  };

  const handleBackClick = () => {
    navigate('/experience');
  };

  const handleNextClick = async () => {
    if (projectName && projectLink && projectDescription) {
      const projectData = {
        projectName,
        projectLink,
        projectDescription,
      };
      try {
        await axios.post('http://localhost:5000/api/projects', projectData);
        navigate('/contact');
      } catch (err) {
        console.error('Error submitting project info:', err);
      }
    }
  };

  const isFormValid = projectName && projectLink && projectDescription;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className='shadow-custom bg-white rounded-2xl p-7 pl-12 pr-12 -mt-5 mr-7 w-full max-w-4xl'>
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
                  value={projectName} 
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                />
              </div>
              <div>
                <h1 className='text-start font-nunito font-bold mb-3'>Link</h1>
                <input
                  type="url"
                  className="border-2 p-2 w-full rounded-lg bg-inputColor border-inputBorder"
                  value={projectLink} 
                  onChange={(e) => setProjectLink(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='mt-7'>
              <h1 className='text-start font-nunito font-bold mb-3'>Description</h1>
              <textarea
                name="message"
                className='border-2 p-2 w-full min-h-28 rounded-lg bg-inputColor border-inputBorder max-h-36'
                value={projectDescription} 
                onChange={(e) => setProjectDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        ))}
        <div className='flex flex-col items-end pr-1 pt-4'>
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
            Next Section
          </button>
        </div>
        <div className='flex items-start -mt-14'>
          <img src="back_arrow.png" alt="Back" className='h-16 w-16 cursor-pointer' onClick={handleBackClick} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
