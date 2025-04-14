import React from 'react'

function About() {
  return (
    <div className=" bg-gray-100 pt-12 ">
      {/* Two description panels with gap */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left description panel */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg flex-1 ml-7 mr-7 ">
            <h3 className="font-bold text-xl mb-4 text-gray-800 text-center">What is BMI</h3>
            <div className="text-justify space-y-3">
              <p className="text-gray-700">
                Body Mass Index (BMI) is a simple calculation using your height and weight. 
                It helps categorize weight status but doesn't directly measure body fat.
              </p>
              <ul className="text-gray-700 space-y-2 pl-5">
                <li className="list-disc">Formula: weight (kg) / [height (m)]²</li>
                <li className="list-disc">Used worldwide as screening tool</li>
                <li className="list-disc">Doesn't account for muscle mass</li>
              </ul>
            </div>
          </div>

          {/* Right description panel */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg flex-1 mr-7 ml-7 ">
            <h3 className="font-bold text-xl mb-4 text-gray-800 text-center">Healthy Living Tips</h3>
            <div className="text-justify space-y-3">
              <ul className="text-gray-700 space-y-2 pl-5">
                <li className="list-disc">Aim for 150+ minutes exercise weekly</li>
                <li className="list-disc">Fill half your plate with vegetables</li>
                <li className="list-disc">Limit processed foods and sugars</li>
                <li className="list-disc">Prioritize 7-9 hours of quality sleep</li>
                <li className="list-disc">Manage stress through mindfulness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About