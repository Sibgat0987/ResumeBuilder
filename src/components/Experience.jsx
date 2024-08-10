import React, { useState } from 'react';

function Experience() {
  const [experienceSection, setExperienceSection] = useState([{ id: 1 }]);

  const addExperienceSection = () => {
    setExperienceSection([...experienceSection, { id: experienceSection.length + 1 }]);
  };

  const deleteExperienceSection = (id) => {
    setExperienceSection(experienceSection.filter(section => section.id !== id));
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
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Company</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Address</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Role</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
          </div>

          <div className='mt-7'>
            <h1 className='text-start font-nunito font-bold mb-3'>About</h1>
            <textarea 
              name="message" 
              className='border-2 p-2 w-full min-h-28 rounded-lg bg-inputColor border-inputBorder max-h-36'>
            </textarea>
          </div>

          <div className='flex flex-col items-end pr-4 pt-4'>
            <img
              src='add.jpg'
              alt="Add"
              className='h-10 w-10 ml-11 cursor-pointer'
              onClick={addExperienceSection}
            />
            <button className='bg-customPurple pt-2 pb-2 pl-5 pr-5 mt-7 text-center text-lg font-nunito text-white'>
              Next Session
            </button>
          </div>

          <div className='flex items-start -mt-10'>
            <img src="back_arrow.png" alt="Back" className='h-12 w-14' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
