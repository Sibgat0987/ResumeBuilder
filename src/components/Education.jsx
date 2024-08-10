import React, { useState } from 'react';

function Education() {
  const [educationSection, setEducationSection] = useState([{ id: 1 }]);

  const addEducationSection = () => {
    setEducationSection([...educationSection, { id: educationSection.length + 1 }]);
  };

  const deleteEducationSection = (id) => {
    setEducationSection(educationSection.filter(section => section.id !== id));
  };

  return (
    <div className='shadow-custom bg-white rounded-2xl  w-1000 min-h-full p-10 pl-12 pr-12 -mt-5'>
      <h2 className='text-start font-nunito font-bold text-xl mb-8'>Education</h2>
      {educationSection.map((section) => (
        <div key={section.id} className='mb-10'>
          {section.id >= 2 && (
            <div className='flex justify-end '>
              <img 
                src="delete.jpg" 
                alt="Delete" 
                className='w-12 h-10 cursor-pointer mr-16'
                onClick={() => deleteEducationSection(section.id)} 
              />
            </div>
          )}
          <div className='grid grid-cols-2 gap-7'>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Institution name</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Course</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>Country</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>State</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
          </div>
          <h1 className='text-start font-nunito font-bold mb-3 mt-7'>Time period</h1>
          <div className='grid grid-cols-2 gap-7'>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3 text-gray-400'>Start</h1>
              <input type="date" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3 text-gray-400'>Finish</h1>
              <input type="date" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
            </div>
          </div>
          <div className='flex flex-col items-end pr-16 pt-4 '>
            <img
              src='add.jpg'
              alt="Add"
              className='h-10 w-10 ml-11 cursor-pointer '
              onClick={addEducationSection}
            />
            <button className='bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center mt-10 text-lg font-nunito text-white'>
              Next Session
            </button>
          </div>
          <div className='flex items-start -mt-14'>
            <img src="back_arrow.png" alt="Back" className='h-16 w-16' />
          </div>

        </div>
      ))}
    </div>
  );
}

export default Education;
