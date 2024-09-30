// Components/AssignmentsTable.jsx

import React, { useState } from 'react';

const AssignmentsTable = () => {

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("Score");
  const [tableMenu, setTableMenu] = useState({
    filter,
    sort
  });

  const assignments = [
    {
      "Name": "A Major Scale",
      "Metric": "Scales",
      "Target Date": "June 14, 2023",
      "Submission Date": "June 13, 2023",
      "Score": "100/100",
      "Comment": "Very very nice. You did well"
    },
    {
      "Name": "F# Minor",
      "Metric": "Chords",
      "Target Date": "Nov 14, 2024",
      "Submission Date": "N/A",
      "Score": "0/100",
      "Comment": "No comments yet..."
    },
    {
      "Name": "I - V - VI - IV",
      "Metric": "Common Chord Progressions",
      "Target Date": "June 14, 2023",
      "Submission Date": "N/A",
      "Score": "0/100",
      "Comment": "No comments yet..."
    },
    {
      "Name": "E Major",
      "Metric": "Chords",
      "Target Date": "June 14, 2023",
      "Submission Date": "June 13, 2023",
      "Score": "100/100",
      "Comment": "Good work. Very impressed"
    }
  ];

  const metrics = ["Scales", "Chords", "Common Chord Progressions"];

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const handleSort = (event) => {
    setSort(event.target.value);
  }

  const applyFilters = () => {
    setTableMenu({filter, sort});
  }
  

  return (
    <div className='AssignmentsTable'>

      <div className="filter-table">
        <div className="filter-table-label">Filter</div>
        <select onChange={handleFilter} value={filter} name="" id="filter-table-menu">
          <option value="">All</option>
          {metrics.map(metric => <option key={metric} value={metric}>{metric}</option>)}
        </select>
      </div>

      <div className="sort-table">
        <div className="sort-table-label">Sort</div>
        <select onChange={handleSort} value={sort} name="" id="sort-table-menu">
          {Object.keys(assignments[1]).map(key => <option key={key} value={key}>{key}</option>)}
        </select>
      </div>

      <div className="apply-filters-button" onClick={applyFilters}>Apply</div>

      <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Target Date</th>
            <th>Submission Date</th>
            <th>Score</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {assignments.filter(assignment => tableMenu.filter ? assignment.Metric === tableMenu.filter : true).sort((x,y) => x[tableMenu.sort] < y[tableMenu.sort] ? -1 : 1).map(assignment => 
            <tr key={assignment.Name}>
              <td>{assignment.Name}<br/>{assignment.Metric}</td>
              <td>{assignment["Target Date"]}</td>
              <td>{assignment["Submission Date"]}</td>
              <td>{assignment.Score}</td>
              <td>{assignment.Comment}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentsTable;