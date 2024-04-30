function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const weightUnit = document.getElementById('weight-unit').value;
  const heightUnit = document.getElementById('height-unit').value;

  if (isNaN(weight) || isNaN(height)) {
    alert('Please enter valid weight and height values.');
    return;
  }

  let bmi;
  if (weightUnit === 'kg' && heightUnit === 'cm') {
    bmi = weight / ((height / 100) ** 2);
  } else if (weightUnit === 'lb' && heightUnit === 'in') {
    bmi = (weight * 703) / (height ** 2);
  } else {
    alert('Please select valid weight and height units.');
    return;
  }

  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}