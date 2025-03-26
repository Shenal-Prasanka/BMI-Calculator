
function calculateBMI() {
    // Get the weight and height values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    // Calculate BMI
    const bmiValue = weight / (height * height);
    const roundedBmi = bmiValue.toFixed(2);
    
    // Determine BMI class
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

    // Display BMI value and class
    const resultDiv = document.getElementById('li1');
    resultDiv.innerHTML = `<p>Your BMI is: ${roundedBmi}</p><p>BMI Class: ${bmiClass}</p>`;

    // Clear the input fields
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
}
