import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Contacts() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [other, setOther] = useState('');
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/projects');
  };

  const isFormValid = email && phone && linkedin && github && portfolio;

  const handleSubmitClick = () => {
    if (isFormValid) {
      
    }
  };

  return (
    <div className='shadow-custom bg-white rounded-2xl h-144 w-1000 p-7 pl-12 pr-12 -mt-5'>
      <h2 className='text-start font-nunito font-bold text-xl mb-8'>Contact information</h2>
      <div className='grid grid-cols-2 gap-7'>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>Email address</h1>
          <input 
            type="text" 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>Phone number</h1>
          <PhoneInput 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
            value={phone}
            onChange={setPhone}
            required 
          />
        </div>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>LinkedIn profile Link</h1>
          <input 
            type="text" 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" 
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            required 
          />
        </div>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>Github profile Link</h1>
          <input 
            type="text" 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            required 
          />
        </div>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>Portfolio link</h1>
          <input 
            type="text" 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            required 
          />
        </div>
        <div>
          <h1 className='text-start font-nunito font-bold mb-3'>Any Other link</h1>
          <input 
            type="text" 
            className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder"
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-col items-end pr-16 pt-4'>
        <button 
          className={`bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
          onClick={handleSubmitClick}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
      <div className='flex items-start -mt-14'>
        <img src="back_arrow.png" alt="Back" className='h-16 w-16 cursor-pointer' onClick={handleBackClick} />
      </div>
    </div>
  );
}

export default Contacts;
