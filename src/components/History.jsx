import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function History({ history }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">📊 BMI History Chart</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={history}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="bmi" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <ul className="divide-y mt-4">
        {history.map((entry, i) => (
          <li key={i} className="py-2 text-sm">
            <strong>{entry.date}</strong>: {entry.bmi} ({entry.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
