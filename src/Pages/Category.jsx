// Pages/Category.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//components 
import UserCard from '../Components/UserCard';

const Category = () => {

  const { category_id } = useParams();
  const API = import.meta.env.VITE_BASE_URL;
  const [categoryName, setCategoryName] = useState("");
  const [mentors, setMentors] = useState([]);
  const [mentees, setMentees] = useState([]);
  const [showMentors, setShowMentors] = useState(true);

  // get all users associated with category
  useEffect(() => {
    fetch(`${API}/categories/${category_id}/category-users`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setCategoryName(res.name)

      //filter for mentors/mentees
      const filterMentors = res.categoryUsers.filter(user => user.is_mentor === true);
      const filterMentees = res.categoryUsers.filter(user => user.is_mentee === true);

      setMentors(filterMentors);
      setMentees(filterMentees);

    })
    .catch(err => {
      console.error(err);
    })
  }, [category_id, API])

  const toggleShowMentors = () => {
    setShowMentors(!showMentors);
  }

  console.log({mentors, mentees})

  return (
    <div>
      <div className="header">
        <span onClick={toggleShowMentors}>Mentors</span><span onClick={toggleShowMentors}>Mentees</span>
      </div>

      <div className="category-user-list">
      {showMentors ? (mentors.map(mentor => {
        return  <Link>
                  <UserCard
                    key={mentor.id}
                    name={`${mentor.first_name} ${mentor.last_name}`}
                    job_title={`${mentor.job_title}`}
                    categoryName={categoryName}
                  />
                </Link>        
      })) : (mentees.map(mentee => {
        return  <Link>
                  <UserCard
                    key={mentee.id}
                    name={`${mentee.first_name} ${mentee.last_name}`}
                    job_title={`${mentee.job_title}`}
                    categoryName={categoryName}
                  />
                </Link>
        
      }))}
      </div>
    </div>
  );
};

export default Category;