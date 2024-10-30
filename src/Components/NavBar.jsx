// Components/NavBar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css";
import logo from "../assets/logo.png"


const NavBar = ({ user, setUser, setToken, pendingConnections }) => {

  const [connections, setConnections] = useState([]);
  const [hasPendingConnections, setHasPendingConnections] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      fetch(`${import.meta.env.VITE_BASE_URL}/users/${user.id}/connections`, {
        headers: {
          Authorization: user.token,
        },
      })
      .then(res => res.json())
      .then(data => {
        setConnections(data);
        const pendingConnections = data.filter(connection => connection.status === 'pending');
        console.log('Pending connections:', pendingConnections.length); // Log count of pending connections
        setHasPendingConnections(pendingConnections.length > 0);
        setPendingConnections(pendingConnections); // Store pending connections in state
        console.log('Pending connections state:', pendingConnections); // Log the actual pending connections
      })
      .catch(err => console.error('Error fetching connections:', err));
    }
  }, [user]);

  const handleLogout = () => {

    setUser(null)
    setToken(null)
    localStorage.removeItem('user');
    localStorage.removeItem('token');

  }

  return(
    <div className='NavBar'>
      <Link to='/' className="nav-logo"><img src={logo} alt="mvp logo"/></Link>
      {/* <div className="nav-logo-text">MVP</div> */}
      <div className="nav-links">
        <Link to='/about' className="nav-about-button"><i className="fa-solid fa-circle-info"></i></Link>
        <Link to='/faq' className="nav-faq-button"><i className="fa-solid fa-circle-question"></i></Link>
        {user ? (
          <>
          <Link to='/dashboard' className='nav-dashboard-button'>
            <i className="fa-solid fa-people-arrows"></i>
            {pendingConnections.length > 0 && (
              <span 
                className="notification-badge" 
                title={`${pendingConnections.length} pending connection${pendingConnections.length > 1 ? 's' : ''}`}
              >
                <span className="notification-badge-number">
                  {pendingConnections.length} {/* Display count */}
                </span>
              </span>
            )}
          </Link>
          <Link to='/' onClick={handleLogout} className="nav-login-button"><i className="fa-solid fa-right-from-bracket"></i></Link>
          </>
        ) : (
          <Link to='/login' className="nav-login-button"><i className="fa-solid fa-right-to-bracket"></i></Link>
        )}
        
      </div>
    </div>
  );
};

export default NavBar;
