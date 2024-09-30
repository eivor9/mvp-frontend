// Components/ProgressTrackingMetrics.jsx

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../Styles/ProgressTrackingMetrics.css';

const ProgressTrackingMetrics = () => {
  const [metrics, setMetrics] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const dummyData = [
      { id: 1, name: "Coding Skills", progress: 75 },
      { id: 2, name: "Communication", progress: 60 },
      { id: 3, name: "Problem Solving", progress: 80 },
      { id: 4, name: "Team Collaboration", progress: 90 },
    ];
    setMetrics(dummyData);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className={`progress-tracking-metrics ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <h2>Progress Tracking</h2>
      <div className="metrics-container">
        <div className="pie-chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={metrics}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="progress"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {metrics.map((entry, index) => (
                  <Cell key={`cell-${entry.id}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="vertical-progress-bars">
          {metrics.map((metric) => (
            <div key={metric.id} className="vertical-progress-bar">
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{height: `${metric.progress}%`}}
                ></div>
              </div>
              <p className="progress-label">{metric.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackingMetrics;