import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/RecentActivities.css"

const RecentActivities = (props) => {
    const { id } = props;
    const API = import.meta.env.VITE_BASE_URL;

    const [recentAssignments, setRecentAssignments] = useState([]);

    useEffect(()=> {
        fetch(`${API}/users/${id}/recent-assignments`)
        .then(res =>  res.json())
        .then(res => {
            console.log(res)
            setRecentAssignments(res)
        })
        .catch(err => {
            console.error(err)
        })
    }, [id, API])
    
    // console.log(recentAssignments)

    return (
        <div className='recent-activities-container'>
            {recentAssignments.length > 0 ? (
                recentAssignments.map(assignment => {
                    return  <Link key={assignment.assignment_id} >
                                <div className='activity'>
                                    <img src="#" alt="" />
                                    <p>{assignment.subcategory_name}</p>
                                    <p>{assignment.assignment_name}</p>
                                </div> 
                            </Link>
                })
            ) : (<p>You have no recent activities</p>)}
        </div>
    );
};

export default RecentActivities;