// Pages/Login.jsx

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
                console.log(res)
                if(res.user.id){
                    const { user, token } = res
                    setUser(user)
                    setToken(token)
                    setFormData(() => ({
                        email: '',
                        password_hash: ''
                    }))
                    navigate(`/user-dashboard/${user.id}`);
                } else {
                    console.log(res)
                }
            })
            .catch(err => console.log(err))
    
        
      };

  return (
    <div className="Login">
        <div className="login-logo">
            <img src={logo} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
            <input required onChange={handleTextChange} value={formData.email} id='email' type="email"placeholder='Email'/>
            <input required onChange={handleTextChange} value={formData.password_hash} id='password_hash' type="password" placeholder="Password"/>
            <button type="submit">Log In</button>
        </form>
    </div>
  )
};

export default Login;
