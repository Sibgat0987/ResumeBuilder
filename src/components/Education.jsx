import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Education() {
  const [educationSection, setEducationSection] = useState([{ id: 1 }]);
  const [institutionName, setinstitutionName] = useState('');
  const [course, setcourse] = useState('');
  const[country,setcountry]=useState('');
  const[state,setState]=useState('');
  const[start,setStart]=useState('');
  const[finish,setFinish]=useState('');
  const navigate = useNavigate();
  const addEducationSection = () => {
    setEducationSection([...educationSection, { id: educationSection.length + 1 }]);
  };

  const deleteEducationSection = (id) => {
    setEducationSection(educationSection.filter(section => section.id !== id));
  };
  const handleBackClick = () => {

   navigate('/personal-info')
  };
  const handleNextClick=async()=>{
    if (institutionName && course && country && state && start && finish) {
      const educationData = {
        institutionName,
        course,
        country,
        state,
        start,
        finish,
      };
      try {
        await axios.post('http://localhost:5000/api/education', educationData);
        navigate('/experience');
      } 
      catch (err) {
        console.error('Error submitting education info:', err);
      }
    }
    };
  
  const isFormValid = institutionName && course && country && state && start && finish;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
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
              <h1 className='text-start font-nunito font-bold mb-3' 
         >Institution name</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
                   value={institutionName} 
                   onChange={(e)=>setinstitutionName(e.target.value)} required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'
              >Course</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
              value={course}
              onChange={(e)=>setcourse(e.target.value)} required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'
            >Country</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" 
                value={country}
                onChange={(e)=>setcountry(e.target.value)} required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3'>State</h1>
              <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required 
                value={state}
                onChange={(e)=>setState(e.target.value)}/>
            </div>
          </div>
          <h1 className='text-start font-nunito font-bold mb-3 mt-7'>Time period</h1>
          <div className='grid grid-cols-2 gap-7'>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3 text-gray-400'>Start</h1>
              <input type="date" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" 
                value={start}
                onChange={(e)=>setStart(e.target.value)}required />
            </div>
            <div>
              <h1 className='text-start font-nunito font-bold mb-3 text-gray-400'>Finish</h1>
              <input type="date" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" 
                value={finish}
                onChange={(e)=>setFinish(e.target.value)}required />
            </div>
          </div>
          <div className='flex flex-col items-end pr-16 pt-4 '>
            <img
              src='add.jpg'
              alt="Add"
              className='h-10 w-10 ml-11 mb-4 cursor-pointer '
              onClick={addEducationSection}
            />
            <button
        className={`bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white ${!isFormValid && 'opacity-50 cursor-not-allowed'}`} 

            onClick={handleNextClick}
            disabled={!isFormValid}>
              Next Session
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

export default Education;
