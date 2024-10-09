// Pages/Login.jsx

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import "../Styles/Login.css";

const API = import.meta.env.VITE_BASE_URL;

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleTextChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        setUser({email:'', password:''})
    } 

    const loginUser = () => {
        fetch(`${API}/`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/json"}
          })
          .then(() => {
              
          })
          .catch((error) => {
            console.error("catch", error)
        });
  
    }

  return (
    <div className="Login">
        <div className="login-logo">
            <img src={logo} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
            <input required onChange={handleTextChange} value={user.email} id='email' type="email"placeholder='Email'/>
            <input required onChange={handleTextChange} value={user.password} id='password' type="password" placeholder="Password"/>
            <button type="submit">Log In</button>
        </form>
    </div>
  )
};

export default Login;
