// Components/UserCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/UserCard.css"


const UserCard = (props) => {

  const{ name, id, job_title, categoryName, className, addLinks } = props;

  return (
    <div className={`user-card ${className}`}>
      <div className="user-card-image-container">
        <img src="https://mighty.tools/mockmind-api/content/human/41.jpg" alt="profile picture" />
        {addLinks && (
          <div className="user-card-links-container">
            <span id='conversation-link' onClick={(e) => {e.stopPropagation()}}>See Conversation</span>
            <span id='calender-link' onClick={(e) => {e.stopPropagation()}}>Calender</span>
          </div>
          )}
      </div>
      <h4 id='name'>{name}</h4>
      {categoryName && <p id='category-name'>{categoryName}</p>}
      {job_title && <p id='job-title'>{job_title}</p>}
    </div>
  );
};

export default UserCard;;
