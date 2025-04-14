import React from 'react'
import img1 from '../assets/do.png'

function Calculator() {
  return (
    <div id='1' className='pt-12 h-96  bg-gray-100 '>
      <div className='ml-16 mr-16 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 h-96 relative'>
        <img className='h-96' src={img1} alt="Description" />
        <p className='ml-80 absolute bottom-8 right-8 bg-black bg-opacity-70 text-white px-2 py-4 rounded-lg'>
            BMI is a useful screening tool, it does not directly measure body fat or account for muscle mass.
            For a more accurate health assessment, 
            consider body composition, waist circumference, and lifestyle factors.
        </p>
      </div>
    </div>
  )
}

export default Calculator