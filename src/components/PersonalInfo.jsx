import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalInfo() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('');
  const [address, setAddress] = useState('');
  const [aboutMyself, setAboutMyself] = useState('');

  const handleNextClick = () => {
    if (firstName && lastName && profession && address && aboutMyself) {
      navigate('/education');
    }
  };

  const isFormValid = firstName && lastName && profession && address && aboutMyself;

  return (
    <div className='shadow-custom bg-white rounded-2xl h-144 w-1000 p-7 pl-12 pr-12 -mt-5'>
      <h2 className='text-start font-nunito font-bold text-xl mb-8'>Personal information</h2>
      <div className='grid grid-cols-2 gap-7'>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>First name</h1>
          <input 
            type="text" 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>Last name</h1>
          <input 
            type="text" 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>Profession</h1>
          <input 
            type="text" 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" 
            value={profession} 
            onChange={(e) => setProfession(e.target.value)} 
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
      </div>
      <div className='mt-7'>
        <h1 className='text-start font-nunito font-bold mb-3'>About Myself</h1>
        <textarea 
          name="message" 
          className='border-2 p-2 w-full min-h-28 rounded-lg bg-inputColor border-inputBorder max-h-36' 
          value={aboutMyself} 
          onChange={(e) => setAboutMyself(e.target.value)}
        />
      </div>
      <div className='flex justify-end mt-4'>
        <button 
          className={`bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white ${!isFormValid && 'opacity-50 cursor-not-allowed'}`} 
          onClick={handleNextClick}
          disabled={!isFormValid}
        >
          Next Session
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
