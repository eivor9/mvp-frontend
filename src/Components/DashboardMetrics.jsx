// Components/DashboardMetrics.jsx

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../Styles/DashboardMetrics.css';

const DashboardMetrics = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const dummyData = [
      { id: 1, name: "Coding Skills", progress: 75, connection_id: 1 },
      { id: 2, name: "Communication", progress: 60, connection_id: 1 },
      // { id: 3, name: "Problem Solving", progress: 80, connection_id: 1 },
      // { id: 4, name: "Team Collaboration", progress: 90, connection_id: 1 },
    ];
    setMetrics(dummyData);
    
    // Uncomment this block when ready to fetch real data
    /*
    const fetchMetrics = async () => {
      try {
        const response = await fetch('http://localhost:4001/connections/1/metrics/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };

    fetchMetrics();
    */
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="dashboard-metrics">
      <h2>Dashboard Metrics</h2>
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
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div key={metric.id} className="metric-card">
              <h3>{metric.name}</h3>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{width: `${metric.progress}%`}}
                ></div>
              </div>
              <p className="progress-text">{metric.progress}% Complete</p>
              <p className="connection-id">Connection ID: {metric.connection_id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMetrics;