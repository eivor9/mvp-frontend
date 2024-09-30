// Components/UserCard.jsx

import React from 'react';

const UserCard = (props) => {

  const{ name, id, job_title, categoryName, className } = props;

  return (
    <div className={`user-card ${className}`}>
      <h3 id='name'>{name}</h3>
      {categoryName && <p id='category-name'>{categoryName}</p>}
      {job_title && <p id='job-title'>{job_title}</p>}
    </div>
  );
};

export default UserCard;;
