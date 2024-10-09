// Components/ProgressTrackingMetrics.jsx

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, CartesianGrid, Legend, Bar, YAxis, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../Styles/ProgressTrackingMetrics.css';

const ProgressTrackingMetrics = () => {
  const [metrics, setMetrics] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const data = [
    {
      "name": "Scales",
      "progress": 100
    },
    {
      "name": "Chords",
      "progress": 50
    },
    {
      "name": "Progressions",
      "progress": 10
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="ProgressTrackingMetrics">
      <div className="piechart-container">
        <PieChart width={300} height={333}>
          <Pie innerRadius={50} data={data} dataKey="progress" nameKey="name" cx={145} cy={145} outerRadius={150} fill="#222E50" />
          <Legend verticalAlign="bottom" height={0}/>
        </PieChart>
      </div>

      <BarChart width={300} height={345} data={data}>
        <XAxis dataKey="name" />
        <Bar barSize={50} dataKey="progress" fill="#222E50" />
      </BarChart>
    </div>
          
  );
};

export default ProgressTrackingMetrics;