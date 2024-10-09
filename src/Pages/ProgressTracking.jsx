import React from 'react';
import '../Styles/ProgressTracking.css';
import Hero from "../Components/Hero";
import ProgressTrackingMetrics from '../Components/ProgressTrackingMetrics';
import AssignmentsTable from '../Components/AssignmentsTable';

const API = import.meta.env.VITE_BASE_URL;

const ProgressTracking = () => {
  return (
    <div className='ProgressTracking'>
        <Hero />
        <div className="category-header"><strong>Music</strong> <span>&gt;</span> Instruments</div>
        <div className="assignment-chart-container">
            <div className="dated-assignments">
                <div className="to-do">To Do</div>
                <div className="upcoming-assignments">Upcoming Assignments</div>
                <div className="past-assignments">Past Assignments</div>
            </div>
            <ProgressTrackingMetrics/>
        </div>
        <AssignmentsTable/>
    </div>
  );
};

export default ProgressTracking;
