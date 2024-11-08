import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../Styles/Subcategory.css"

//components 
import UserCard from '../Components/UserCard';
import Hero from '../Components/Hero';

const Subcategory = () => {

    const { category_id, subcategory_id} = useParams();
    // console.log(category_id, subcategory_id)

    const API = import.meta.env.VITE_BASE_URL;
    const [subcategoryName, setSubcategoryName] = useState("");
    const [mentors, setMentors] = useState([]);
    const [mentees, setMentees] = useState([]);
    const [showMentors, setShowMentors] = useState(true);

    useEffect(()=> {
        fetch(`${API}/categories/${category_id}/subcategories/${subcategory_id}/subcategory-users`)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            // console.log(res.subcategoryUsers[0])
            setSubcategoryName(res.name);

            // filter for mentors/mentees
            const filterSubcategoryMentors = res.subcategoryUsers.filter(user => user.is_mentor === true);
            const filterSubcategoryMentees = res.subcategoryUsers.filter(user => user.is_mentee === true);

            setMentors(filterSubcategoryMentors);
            setMentees(filterSubcategoryMentees);
        })
        .catch(err => {
            console.error(err);
        })
    }, [category_id, subcategory_id, API])

    useEffect(()=> {
    console.log({mentees: mentees, mentors : mentors});
    }, [mentors, mentees])

    // functions to set list-header behaviour
    const toggleShowMentors = () => {
        setShowMentors(!showMentors);
    }

    const toggleShowMentees = () => {
        setShowMentors(false);
    };

    const toggleHeaderColor = () => {
        return {backgroundColor: '#222850', color: "white"};
    }

    return (
        <div className='subcategory-container'>
            <Hero />
            <div className="toggle-header">
                <h3 id='mentor-header' style={showMentors ? toggleHeaderColor() : null} onClick={toggleShowMentors}>Mentors</h3>
                <h3 id='mentee-header' style={!showMentors ? toggleHeaderColor() : null} onClick={toggleShowMentees}>Mentees</h3>
            </div>
        
            
            {showMentors && (
                <div className="subcategory-user-list">
                    {mentors.length ? (mentors.map(mentor => {
                        return  <Link key={mentor.id}>
                                <UserCard
                                    name={`${mentor.first_name} ${mentor.last_name}`}
                                    job_title={`${mentor.job_title}`}
                                    categoryName={subcategoryName}
                                    className="subcategory-card"
                                />
                                </Link>        
                            })): (
                            <p>No mentors available in this subcategory</p>
                    
                    )}
                </div>
            )}
                
                {!showMentors && (
                    <div className="subcategory-user-list">
                       { mentees.length ? mentees.map(mentee => {
                            return  <Link key={mentee.id}>
                                    <UserCard
                                        name={`${mentee.first_name} ${mentee.last_name}`}
                                        job_title={`${mentee.job_title}`}
                                        categoryName={subcategoryName}
                                        className="subcategory-card"
                                    />
                                    </Link>
                
                            }) : (<p>No mentees in this subcategory</p>)
                       } 
                    </div>
                )}
            
        </div>
    );
};

export default Subcategory;
