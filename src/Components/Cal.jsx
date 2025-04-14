import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      alert("Please enter valid numbers for weight (kg) and height (m).");
      return;
    }

    const bmiValue = weightValue / (heightValue * heightValue);
    const roundedBmi = bmiValue.toFixed(2);

    let bmiClass;
    if (bmiValue < 18.5) {
      bmiClass = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiClass = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiClass = "Overweight";
    } else {
      bmiClass = "Obesity";
    }

    setBmiResult({
      value: roundedBmi,
      category: bmiClass,
    });

    // Optional: Clear inputs after calculation
    // setWeight('');
    // setHeight('');
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmiResult(null);
  };

  return (
    <div id='3' className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-24 pb-40 ">
      <div className="bg-white bg-opacity-90 p-9 rounded-lg mx-auto max-w-md border-1">
        <h2 className="text-2xl font-bold text-center mb-6">BMI Calculator</h2>
        <div className="space-y-4 ">
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Weight (kg)"
            required
          />
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Height (m)"
            required
          />
          <div className="flex space-x-4 mt-7">
            <button
              onClick={calculateBMI}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {bmiResult && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="font-semibold">Your BMI is: <span className="text-blue-700">{bmiResult.value}</span></p>
            <p className="font-semibold">Category: <span className="text-blue-700">{bmiResult.category}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;