import React from 'react'

function Education() {
  return (
    <div className='shadow-custom bg-white rounded-2xl h-144 w-1000 p-7 pl-12 pr-12 -mt-5'>
    <h2 className='text-start font-nunito font-bold text-xl mb-8'>Education</h2>
    <div className='grid grid-cols-2 gap-7 '>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 '>Institution name</h1>
      <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 '>Course</h1>
      <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 '>Country</h1>
      <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 '>State</h1>
      <input type="text" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    </div>
    <h1 className='text-start font-nunito  font-bold mb-3 mt-7 '>Time period </h1>

    <div className='grid grid-cols-2 gap-7'>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 text-gray-400'>Start</h1>
      <input type="date" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    <div >
      <h1 className='text-start font-nunito  font-bold mb-3 text-gray-400 '>Finish</h1>
      <input type="date" className="border-2 p-2 w-full max-w-xs rounded-lg bg-inputColor border-inputBorder" required />
    </div>
    </div>
    
    <div className='flex justify-end mt-4'>
    <button className=' bg-customPurple pt-2 pb-2 pl-5 pr-5 text-center text-lg font-nunito text-white'>Next Session</button>

</div>
  </div>
  )
}

export default Education