import React from 'react';

export default function BMIResult({ data, targetWeight, targetBMI }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl mt-4">
      <h2 className="text-lg font-semibold">📄 Your Result:</h2>
      <p><strong>BMI:</strong> {data.bmi} ({data.category})</p>
      <p><strong>Weight:</strong> {data.weight} kg</p>
      <p><strong>Height:</strong> {data.height} cm</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
      {targetWeight && <p><strong>🎯 Target Weight:</strong> {targetWeight} kg</p>}
      {targetBMI && <p><strong>🎯 Target BMI:</strong> {targetBMI}</p>}
    </div>
  );
}
