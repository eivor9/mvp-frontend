import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//components 
import UserCard from '../Components/UserCard';

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
    }, [mentors], mentees)

    const toggleShowMentors = () => {
        setShowMentors(!showMentors);
    }

    return (
        <div>
          <div className="header">
            <span onClick={toggleShowMentors}>Mentors</span><span onClick={toggleShowMentors}>Mentees</span>
          </div>
    
          <div className="category-user-list">
          {showMentors ? (mentors.map(mentor => {
            return  <Link key={mentor.id}>
                      <UserCard
                        name={`${mentor.first_name} ${mentor.last_name}`}
                        job_title={`${mentor.job_title}`}
                        categoryName={subcategoryName}
                        className="subcategory-card"
                      />
                    </Link>        
          })) : (mentees.map(mentee => {
            return  <Link key={mentee.id}>
                      <UserCard
                        name={`${mentee.first_name} ${mentee.last_name}`}
                        job_title={`${mentee.job_title}`}
                        categoryName={subcategoryName}
                        className="subcategory-card"
                      />
                    </Link>
            
          }))}
          </div>
        </div>
    );
};

export default Subcategory;