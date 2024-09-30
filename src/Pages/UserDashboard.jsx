// Pages/UserDashboard.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../Components/UserCard';

const UserDashboard = () => {

    const { id } = useParams();

    const API = import.meta.env.VITE_BASE_URL;
    const [connections, setConnections] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [mentees, setMentees] = useState([]);
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    // const [subcategories, setSubcategories] = useState([]);


    // Fetch all connections 
    useEffect(() => {       
        fetch(`${API}/connections`)
        .then(res => res.json())
        .then(res => {
            setConnections(res)
        })
        .catch(err => {
            console.error(err);
        });

    // fetch all users
        fetch(`${API}/users`)
            .then(res => res.json())
            .then(res => {
                setUsers(res)
            })
            .catch(err => {
                console.error(err)
        });

    // fetch all categories
        fetch(`${API}/categories`)
        .then(res => res.json())
        .then(res => {
            setCategories(res)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    // useEffect to set mentor/mentee arrays.

    useEffect(() => {
        if(connections.length > 0 && users.length > 0 && categories.length > 0){
            setMentors(getMentors(id, connections, users, categories));
            setMentees(getMentees(id, connections, users, categories));
        }
    }, [id, connections, users, categories])


    // Helper functions for getting associated mentors/mentees;
    const getMentors = (user_id, connectionsArr, usersArr, categoriesArr) => {
        const mentors = connectionsArr.filter(connection => connection.mentee_id === Number(user_id))
        .map(connection => {
            
            const user = usersArr.find(user => user.id === connection.mentor_id)
            const category = categoriesArr.find(category => category.id === connection.category_id);
            return {user: user, category : category.name}
        })

        return mentors;
    }

    const getMentees = (user_id, connectionsArr, usersArr, categoriesArr) => {
        
        const mentees = connectionsArr.filter(connection => connection.mentor_id === Number(user_id))
        .map(connection => {

            const user = usersArr.find(user => user.id === connection.mentee_id);
            const category = categoriesArr.find(category => category.id === connection.category_id);
            return {user: user, category : category.name}
        });

        return mentees;
    }

    // Helper function for getting 

    return (
        <div>
            <div className='dashboard-mentors-container'>
                <h3 className='dashboard-mentor-list-header'>Mentors</h3>
                <div className='dashboard-mentor-list'>
                    {mentors.length > 0 ? (
                        mentors.map(({ user, category }) => {
                            return  <UserCard 
                                        key={user.id} 
                                        name={`${user.first_name} ${user.last_name}`} 
                                        category={category}
                                        className="dashboard-card"
                                    />
                    })
                    ) : (
                    <p>You are currently not connected to any mentors.</p>
                    )
                }
                </div>
            </div>

            <div className='dashboard-mentees-container'>
                <h3 className='dashboard-mentee-list-header'>Mentees</h3>
                <div className='dashboard-mentee-list'>
                    {mentees.length > 0 ? (
                        mentees.map(({ user, category}) => {
                            return  <UserCard 
                                        key={user.id} 
                                        name={`${user.first_name} ${user.last_name}`} 
                                        category={category}
                                        className="dashboard-card"
                                    />
                    })
                    ) : (
                    <p>You are currently not connected to any mentees.</p>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;