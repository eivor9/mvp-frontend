// Pages/LoginDev.jsx

import React, { useState, useEffect } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import "../Styles/Login.css";

const API = import.meta.env.VITE_BASE_URL;

    const Login = ({ setUser, setToken }) => {

        const API = import.meta.env.VITE_BASE_URL;
        const navigate = useNavigate();

    const [formData, setFormData ] = useState({
        email: '',
        password_hash: ''
    })

   

    const handleTextChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`${API}/users/login`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                if(res.user){
                    const { user, token } = res
                    setUser(user)
                    setToken(token)
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', token);

                    setFormData(() => ({
                        email: '',
                        password_hash: ''
                    }))
                    navigate(`/dashboard`);
                } else {
                    alert("Invalid email or password")
                }
            })
            .catch(err => console.log(err))
      };

  return (
    <div className="Login">
        <Link className="login-logo" to="/">
            <img src={logo} alt="" />
        </Link>

        <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="email">Email
                <input required onChange={handleTextChange} value={formData.email} id='email' type="email" placeholder="What's your email?"/>
            </label>

            <label htmlFor="password_hash">Password
                <input required onChange={handleTextChange} value={formData.password_hash} id='password_hash' type="password" placeholder="Did you forget?"/>
            </label>
            <button type="submit">Log In</button>
        </form>

        <div className="or-signup">
            <div className="left-line or-line"></div>or<div className="right-line or-line"></div>
        </div>

        <div className="signup-buttons">
            <Link to="/mentee-signup">Become a mentee</Link>
            <Link to="/mentor-signup">Become a mentor</Link>
        </div>
    </div>
  )
};

export default Login;
