// Pages/UserDashboard.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../Styles/UserDashboard.css"
import profilepic from "../assets/default.jpeg";
import logo2 from "../assets/logo2.png";

// Component imports
import UserCard from '../Components/UserCard';
import DashboardMetrics from '../Components/DashboardMetrics';
import RecentActivities from '../Components/RecentActivities';
import MentorPopup from '../Components/MentorPopup';
import connectionPending from "../assets/connectionPending.gif";

const UserDashboard = () => {

    const { id } = useParams();

    const API = import.meta.env.VITE_BASE_URL;
    const [connections, setConnections] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [mentees, setMentees] = useState([]);
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showMentors, setShowMentors] = useState(true);
    const [currentConnectionId, setCurrentConnectionId] = useState(null)
    const [usersCategories , setUsersCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState(1);
    const [showMetrics, setShowMetrics] = useState(false);
    const [potentialMentors, setPotentialMentors] = useState([]);
    const [currentMentor, setCurrentMentor] = useState("No Current Mentor");
    
    // const [subcategories, setSubcategories] = useState([]);


    // Fetch all connections 
    useEffect(() => {       
        fetch(`${API}/users/${id}/connections`)
        .then(res => res.json())
        .then(res => {
            setConnections(res);
            console.log("connections:", res);
            setShowMetrics(res.length > 0);
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

        fetch(`${API}/category-users/users/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log("user's-categories:",res)
            setUsersCategories(res);
            return res;
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
            return {user: user, category : category.name, connection_id : connection.id}
        })

        console.log(mentors)
        return mentors;
    }

    const getMentees = (user_id, connectionsArr, usersArr, categoriesArr) => {
        
        const mentees = connectionsArr.filter(connection => connection.mentor_id === Number(user_id))
        .map(connection => {

            const user = usersArr.find(user => user.id === connection.mentee_id);
            const category = categoriesArr.find(category => category.id === connection.category_id);
            return {user: user, category : category.name, connection_id : connection.id}
        });

        return mentees;
    };

    // functions to set list-header behaviour
    const toggleShowMentors = () => {
        setShowMentors(true);
      };

    const toggleShowMentees = () => {
        setShowMentors(false);
    };

    const toggleHeaderColor = () => {
        return {backgroundColor: '#222850', color: "white"};
    }

    // useEffect for setting connection_id prop to pass to dashboardMetrics 
    useEffect(() => {
        if(mentors.length > 0){
            setCurrentConnectionId(mentors[0].connection_id)
            console.log(currentConnectionId)
        } else if(mentees.length > 0){
            setCurrentConnectionId(mentees[0].connection_id)
        }
    }, [mentors, mentees])

    useEffect(() => {
        fetch(`${API}/category-users/${currentCategory || 1}`)
        .then(res => res.json())
        .then(res => {
        console.log(res)

        //filter for mentors
        const filterMentors = res.categoryUsers.filter(user => user.is_mentor === true && user.id != id);

        setPotentialMentors(filterMentors);
        console.log("potentialMentors: ", filterMentors)
        });
    }, [currentCategory])

    // function for changing currentConnectionId to change displayed dashboardMetrics

    const handleSelectConnectionId = (current_id) => {
        setCurrentConnectionId(current_id);
    }

    const handleCategoryChange = (e) => {
        setCurrentCategory(Number(e.target.value));
    }

    return (
        <div className='user-dashboard'>
            {/* {console.log(currentConnectionId)} */}
            <div className="dashboard-metrics-container">
                {connections.length < 0 ? 
                
                    <DashboardMetrics connection_id={currentConnectionId} />
                     : 
                    <div className="get-started">
                        {/* <div className="get-started-background">
                            <img src={logo2} />
                        </div> */}
                        <div className="get-started-label">Pick a Mentor</div>
                        {typeof currentMentor === "object" ? <MentorPopup currentMentor={currentMentor} setCurrentMentor={setCurrentMentor} menteeId={id} currentCategory={currentCategory}/> : null}
                        <div className="recommended-mentors">
                            {potentialMentors.map(mentor =>
                            <div className="recommended-mentor" onClick={() => setCurrentMentor(mentor)} key={mentor.id}>
                                <img className='recommended-mentor-img' src={profilepic} alt="" />
                                <div className="recommended-mentor-info">{`${mentor.first_name} ${mentor.last_name}`}<span>{mentor.job_title}</span></div>
                            </div>
                            )}
                        </div>
                        
                    </div>
                }
                
            </div>

            <select className='dashboard-category-select' onChange={handleCategoryChange} value={currentCategory} id="current-category">
                {usersCategories.map(category => <option key={category.id} value={category.category_id}>{categories[category.category_id - 1].name}</option>)}
            </select>
           
            <div className='dashboard-list-container connections-list'>
                <div className="toggle-header">
                    <h3 id='mentor-header' style={showMentors ? toggleHeaderColor() : null} onClick={toggleShowMentors}>Mentors</h3>
                    <h3 id='mentee-header' style={!showMentors ? toggleHeaderColor() : null} onClick={toggleShowMentees}>Mentees</h3>
                </div>
                    
                {showMentors && (
                    <div className='dashboard-list'>
                        {mentors.length > 0 ? (
                            mentors.map(({ user, category, connection_id }) => {
                                return  <Link key={user.id} onClick={()=>{handleSelectConnectionId(connection_id)}}>
                                            <UserCard 
                                                name={`${user.first_name} ${user.last_name}`} 
                                                categoryName={category}
                                                className="dashboard-card"
                                                addLinks={true}
                                            />
                                        </Link>
                                        })
                                    ) : (
                                <p>You are currently not connected to any mentors.</p>
                            )
                        }
                    </div>
                )}

                {!showMentors && (
                    <div className='dashboard-list'>
                        {mentees.length > 0 ? (
                            mentees.map(({ user, category, connection_id}) => {
                                return  <Link key={user.id} onClick={()=>{handleSelectConnectionId(connection_id)}}>
                                            <UserCard
                                                name={`${user.first_name} ${user.last_name}`} 
                                                categoryName={category}
                                                className="dashboard-card"
                                                addLinks={true}
                                            />
                                        </Link>
                                    })
                                ) : (
                                <p>You are currently not connected to any mentees.</p>
                            )
                        }
                    </div>
                )}
            </div>

            <div className="dashboard-list-container recent-activities">
                <h3 id="dashboard-list-header">Recent Activities</h3>
                <RecentActivities id={id}/>
            </div>
        </div>
    );
};

export default UserDashboard;