import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from 'axios';

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

  const handleSubmitClick = async () => {
    if (isFormValid) {
      try {
        const contactData = {
          email,
          phone,
          linkedin,
          github,
          portfolio,
          other,
        };

        // Submit contact information
        await axios.post('http://localhost:5000/api/contacts', contactData);

        // Generate the resume after submitting data
        const response = await axios.get('http://localhost:5000/api/generate-resume/generate', {
          responseType: 'blob',
        });

        // Trigger download of the generated PDF
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();

        alert('Contact information submitted successfully! Resume generated.');
      } catch (err) {
        console.error('Error submitting contact info or generating resume:', err);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className='shadow-custom bg-white rounded-2xl h-144 w-1000 p-7 pl-12 pr-12'>
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
              style={{
                backgroundColor: '#F7F9FA',
                borderColor: '#E5E7EB',
                padding: '10px',
                borderRadius: '8px',
              }}
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
        <div className='flex justify-between mt-7'>
          <button 
            className='w-24 p-2 h-10 rounded-lg bg-gray-400 text-white' 
            onClick={handleBackClick}
          >
            Back
          </button>
          <button 
            className={`w-24 p-2 h-10 rounded-lg text-white ${isFormValid ? 'bg-gray-700' : 'bg-gray-300'}`} 
            onClick={handleSubmitClick}
            disabled={!isFormValid}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

