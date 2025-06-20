import React, { useState, useEffect } from 'react';
import BMICalculator from './components/BMICalculator';
import History from './components/History';

export default function App() {
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bmi-history') || '[]');
    setHistory(saved.reverse());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleNewEntry = (entry) => {
    const updated = [entry, ...history];
    localStorage.setItem('bmi-history', JSON.stringify(updated));
    setHistory(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 transition-colors duration-300">
      <div className="flex justify-between items-center max-w-xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">⚖️ BMI & Health Tracker</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-xl text-sm"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <BMICalculator onNewEntry={handleNewEntry} />
      </div>

      <div className="max-w-xl mx-auto mt-6">
        <History history={history} />
      </div>
    </div>
  );
}