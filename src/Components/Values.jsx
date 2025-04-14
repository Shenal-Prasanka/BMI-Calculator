import React from 'react';

function Values() {
  return (
    <div id='2'className='bg-gray-100  px-4 sm:px-6 lg:px-8'>
      <div className="bg-white bg-opacity-90 p-6 rounded-lg mx-auto max-w-7xl">
        <h3 className="font-bold text-xl mb-4 text-gray-800 text-center">BMI Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider sm:px-6 sm:text-center">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider sm:px-6 sm:text-center">
                  BMI Range
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider sm:px-6 sm:text-center">
                  Recommendation
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-100 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 sm:text-center">
                  Underweight
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 sm:text-center">
                  Less than 18.5
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 sm:text-center">
                  Strength training (weightlifting, resistance exercises) to build muscle.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 sm:text-center">
                  Healthy Weight
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 sm:text-center">
                  18.5 – 25
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 sm:text-center">
                  150+ minutes of moderate aerobic activity (walking, swimming) weekly.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 sm:text-center">
                  Overweight
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 sm:text-center">
                  25 – 30
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 sm:text-center">
                  Increase activity (brisk walking, cycling) to 200+ minutes/week.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 sm:text-center">
                  Obese
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 sm:text-center">
                  Over 30
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 sm:text-center">
                  Aim for 300+ minutes of moderate exercise weekly.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Values;