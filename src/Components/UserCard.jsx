// Components/UserCard.jsx

import React from 'react';

const UserCard = (props) => {

  const{ name, id, job_title, category, className } = props;

  return (
    <div className={`user-card ${className}`}>
      <h3 id='name'>{name}</h3>
      {category && <p id='category'>{category}</p>}
      {job_title && <p id='job-title'>{job_title}</p>}
    </div>
  );
};

export default UserCard;;
