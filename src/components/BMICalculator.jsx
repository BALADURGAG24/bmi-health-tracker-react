import React, { useState, useEffect } from 'react';
import BMIResult from './BMIResult';

export default function BMICalculator({ onNewEntry }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [targetBMI, setTargetBMI] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const savedGoal = JSON.parse(localStorage.getItem('bmi-goal') || '{}');
    setTargetWeight(savedGoal.targetWeight || '');
    setTargetBMI(savedGoal.targetBMI || '');
  }, []);

  const handleGoalSave = () => {
    localStorage.setItem('bmi-goal', JSON.stringify({ targetWeight, targetBMI }));
    alert('Goals saved!');
  };

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;

    const bmi = (w / (h * h)).toFixed(1);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    const entry = {
      date: new Date().toLocaleDateString(),
      bmi,
      category,
      weight,
      height,
      age,
      gender
    };

    setResult(entry);
    onNewEntry(entry);
  };

  return (
    <div className="grid gap-4">
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Weight (kg)" className="input" />
      <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="Height (cm)" className="input" />
      <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" className="input" />
      <select value={gender} onChange={e => setGender(e.target.value)} className="input">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <div className="grid grid-cols-2 gap-2">
        <input type="number" value={targetWeight} onChange={e => setTargetWeight(e.target.value)} placeholder="Target Weight (kg)" className="input" />
        <input type="number" value={targetBMI} onChange={e => setTargetBMI(e.target.value)} placeholder="Target BMI" className="input" />
      </div>

      <button onClick={handleGoalSave} className="bg-yellow-500 text-white py-2 rounded-xl">Save Goal</button>
      <button onClick={calculateBMI} className="bg-blue-600 text-white py-2 rounded-xl">Calculate BMI</button>

      {result && (
        <BMIResult data={result} targetWeight={targetWeight} targetBMI={targetBMI} />
      )}
    </div>
  );
}
