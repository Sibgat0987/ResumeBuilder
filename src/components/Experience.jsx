import React from 'react'

function Experience() {
  return (
    <div className='shadow-custom bg-white rounded-2xl h-144 w-1000 p-7 pl-12 pr-12 -mt-5'>
    <h2 className='text-start font-nunito font-bold text-xl mb-8'>Experience</h2>
    <div className='grid grid-cols-2 gap-7 '>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 '>Employer</h1>
      <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 '>Company</h1>
      <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 '>Address</h1>
      <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 '>Role</h1>
      <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    </div>
    <div className='mt-7'>
    <h1 className='text-start font-nunito  font-bold mb-3 '>About </h1>

    <textarea name="message" className='border-2 p-2 w-full min-h-28 rounded-lg bg-inputColor border-inputBorder max-h-36'></textarea>
    </div>
    <div className='flex justify-end mt-4'>
    <button className=' bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white'>Next Session</button>

</div>
  </div>
  )
}

export default Experience