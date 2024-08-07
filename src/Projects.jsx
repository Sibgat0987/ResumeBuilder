import React, { useState } from 'react';

function Projects() {
  const [projectSections, setProjectSections] = useState([{ id: 1 }]);

  const addProjectSection = () => {
    setProjectSections([...projectSections, { id: projectSections.length + 1 }]);
  };

  const deleteProjectSection = (id) => {
    setProjectSections(projectSections.filter(section => section.id !== id));
  };

  return (
    <div className='shadow-custom bg-white rounded-2xl p-7 pl-12 pr-12 -mt-5 mr-7'>
      <h2 className='text-start font-nunito font-bold text-2xl mb-8'>Projects</h2>
    
      {projectSections.map((section) => (
        <div key={section.id} className='mb-10'>
          <div className='grid grid-cols-2 gap-7'>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Name</h1>
              <input
                type="text"
                className="border-2 p-2 w-full rounded-lg bg-inputColor border-inputBorder"
                required
              />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Link</h1>
              <input
                type="text"
                className="border-2 p-2 w-full rounded-lg bg-inputColor border-inputBorder"
                required
              />
            </div>
          </div>
          <div className='mt-7'>
            <h1 className='text-start font-nunito font-bold mb-3'>Description</h1>
            <textarea
              name="message"
              className='border-2 p-2 w-full min-h-28 rounded-lg bg-inputColor border-inputBorder max-h-36'
            ></textarea>
          </div>
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
        </div>
      ))}
      <div className='flex justify-between mt-4'>
        <button
          onClick={addProjectSection}
          className='bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white'
        >
          Add More
        </button>
        <button
          className='bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white'
        >
          Next Session
        </button>
      </div>
    </div>
  );
}

export default Projects;