// Pages/SignUp.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/Hero";
import { Box, Typography, TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const SignUp = ({ setUser, setToken }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    education: "",
    role: "",
    email: "",
    password_hash: "",
    confirmPassword: "", 
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.education) errors.education = "Please select your education";
    if (!formData.role) errors.role = "Please select whether you are a mentor or a mentee";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.password_hash.trim()) errors.password_hash = "Password is required";
    if (formData.password_hash !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match"; 
    }
    return errors;
  };

  const checkEmailExists = async (email) => {
    const response = await fetch(`${API}/users/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return response.ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; 
    }

    // Check if email already exists
    const emailExists = await checkEmailExists(formData.email);
    if (emailExists) {
      setErrors({ email: "Email already exists. Please use a different email." });
      return; // Stop the submission if the email exists
    }

    // Clear errors and proceed with submission
    setErrors({});
    setSubmitted(true);

    const backEndObject = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      job_title: formData.jobTitle || null,
      is_mentee: formData.role === "Mentee",
      is_mentor: formData.role === "Mentor",
      password_hash: formData.password_hash,
    };

    fetch(`${API}/users`, {
      method: "POST",
      body: JSON.stringify(backEndObject),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => {
      if (res.user.id) {
        const { user, token } = res;
        setUser(user);
        setToken(token);

        const userCategoryObject = {
          user_id: user.id,
          category_id: formData.education,
        };

        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          education: "",
          role: "",
          email: "",
          password_hash: "",
          confirmPassword: "", // Reset confirmation password
        });
        navigate(`/user-dashboard/${user.id}`);
      } else {
        console.log(res);
      }
    })
    .catch(err => {
      console.error("Error signing up:", err);
    });
    console.log("Form submitted successfully:", formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#ebfcff',
        padding: 2,
        marginTop: '3em',
        overflow: 'auto',
      }}
    >
      <Hero />
      {submitted ? (
        <Typography
          variant='h4'
          sx={{ color: '#222e50', marginBottom: 1 }}
        >
          Thank you for signing up, {formData.firstName}!
        </Typography>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400 }}>
          <Typography
            variant='h4'
            sx={{ color: '#222e50', marginBottom: 1 }}
          >
            Sign Up
          </Typography>

          {/* First Name Field */}
          <TextField
            fullWidth
            label='First Name'
            variant='outlined'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            sx={{ marginBottom: 1 }}
          />

          {/* Last Name Field */}
          <TextField
            fullWidth
            label='Last Name'
            variant='outlined'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={{ marginBottom: 1 }}
          />

          {/* Email Field */}
          <TextField
            fullWidth
            label='Email'
            variant='outlined'
            name='email'
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ marginBottom: 1 }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            label='Password'
            type='password'
            name='password_hash'
            value={formData.password_hash}
            onChange={handleChange}
            error={!!errors.password_hash}
            helperText={errors.password_hash}
            sx={{ marginBottom: 1 }}
          />

          {/* Confirm Password Field */}
          <TextField
            fullWidth
            label='Confirm Password'
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            sx={{ marginBottom: 1 }}
          />

          {/* Job Title Field (Optional) */}
          <TextField
            fullWidth
            label='Job Title'
            variant='outlined'
            name='jobTitle'
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Please enter job title (optional)"
            sx={{ marginBottom: 1 }}
          />

          {/* Education Dropdown */}
          <TextField
            select
            fullWidth
            label='Education'
            name='education'
            value={formData.education}
            onChange={handleChange}
            error={!!errors.education}
            helperText={errors.education}
            sx={{ marginBottom: 1 }}
          >
            <MenuItem value="">Select your education category</MenuItem>
            <MenuItem value="1">Development</MenuItem>
            <MenuItem value="2">Business</MenuItem>
            <MenuItem value="3">Finance & Accounting</MenuItem>
            <MenuItem value="4">IT & Software</MenuItem>
            <MenuItem value="5">Office Productivity</MenuItem>
            <MenuItem value="6">Personal Development</MenuItem>
            <MenuItem value="7">Design</MenuItem>
            <MenuItem value="8">Marketing</MenuItem>
            <MenuItem value="9">Health & Fitness</MenuItem>
            <MenuItem value="10">Music</MenuItem>
          </TextField>

          {/* Mentor/Mentee Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
            <Button
              variant='outlined'
              onClick={() => setFormData({ ...formData, role: "Mentor" })}
              sx={{
                backgroundColor: formData.role === "Mentor" ? '#DFC853' : 'transparent',
                color: formData.role === "Mentor" ? '#222e50' : '#000',
                width: '48%',
              }}
            >
              Mentor
            </Button>
            <Button
              variant='outlined'
              onClick={() => setFormData({ ...formData, role: "Mentee" })}
              sx={{
                backgroundColor: formData.role === "Mentee" ? '#DFC853' : 'transparent',
                color: formData.role === "Mentee" ? '#222e50' : '#000',
                width: '48%',
              }}
            >
              Mentee
            </Button>
          </Box>
          {errors.role && (
            <Typography variant="body2" color="error">{errors.role}</Typography>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant='contained'
            sx={{ backgroundColor: '#002366', color: '#fff' }}
          >
            Sign Up
          </Button>
        </form>
      )}
    </Box>
  );
};

export default SignUp;